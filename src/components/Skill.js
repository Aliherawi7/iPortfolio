import React from 'react'
import "./Skill.css"

function Skill({ name, icon, level, color }) {
    const barStyles = {
        width: level + "%",
        background: color
    }


    return (
        <div className='skill'>
            <div className='skill_header'>
                <div className='skill_title'>
                    <span>{icon}</span>
                    <p>{name}</p>
                </div>
                <span>{level+"%"}</span>
            </div>
            <div className='bar' >
                <span style={barStyles}></span>
            </div>
        </div>
    )
}

export default Skill
