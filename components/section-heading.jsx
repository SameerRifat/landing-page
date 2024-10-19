import React from 'react'

const SectionHeading = ({ text, className, style }) => {
    return (
        <h2 className={`display-5 fw-bold mb-3 ${className}`} style={style}>
            {text}
        </h2>
    )
}

export default SectionHeading