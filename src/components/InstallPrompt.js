import React, { useState, useEffect } from 'react';

const InstallPrompt = () => {
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [showInstallPrompt, setShowInstallPrompt] = useState(false);

    useEffect(() => {
        // Listen for the beforeinstallprompt event
        const handleBeforeInstallPrompt = (e) => {
            e.preventDefault(); // Prevent the default mini-infobar prompt on mobile
            setDeferredPrompt(e); // Save the event to trigger it later
            setShowInstallPrompt(true); // Show custom install prompt
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        // Clean up the event listener
        return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    }, []);

    const handleInstallClick = async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt(); // Show the install prompt

            const { outcome } = await deferredPrompt.userChoice;
            console.log(`User response to the install prompt: ${outcome}`);

            setDeferredPrompt(null); // Clear the deferred prompt
            setShowInstallPrompt(false); // Hide the custom prompt
        }
    };

    // If app is already installed, don't show the prompt
    useEffect(() => {
        if (window.matchMedia('(display-mode: standalone)').matches) {
            setShowInstallPrompt(false);
        }
    }, []);

    if (!showInstallPrompt) return null;

    return (
        <div style={styles.prompt}>
            <p>{t('installMessage')}</p>
            <button onClick={handleInstallClick} style={styles.button}>Install</button>
        </div>
    );
};

const styles = {
    prompt: {
        position: 'fixed',
        bottom: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#ffffff',
        border: '1px solid #ccc',
        padding: '10px 20px',
        borderRadius: '5px',
        boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
        zIndex: 1000,
        textAlign: 'center',
    },
    button: {
        padding: '5px 10px',
        backgroundColor: '#007bff',
        color: '#ffffff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default InstallPrompt;
