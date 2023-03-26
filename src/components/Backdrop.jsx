import React from 'react'
import "./Backdrop.css"

const Backdrop = (props) => {
    return (
        props.show ? <div className="backdrop" onClick={props.modalClose}><span className='close_btn'><i className='bi bi-x'></i></span></div> : null
    )
}

export default Backdrop