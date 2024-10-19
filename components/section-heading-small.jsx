import React from 'react'

const SectionHeadingSmall = ({ text, className, style }) => {
    return (
        <p className={`text-uppercase mb-2 fw-normal ${className}`} style={{ color: '#a98b4f', fontSize: '0.9rem', fontFamily: 'var(--font-montserrat)', fontWeight: 100, ...style }}>
            {text}
        </p>
    )
}

export default SectionHeadingSmall