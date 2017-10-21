import React from 'react'

const UploadIcon = ({...props}) => {
    return (
        <svg fill='#000000' width="50" height="50" viewBox="0 0 50 50" { ...props }>
            <defs>
                <rect id="a" width="39" height="34" rx="6"/>
            </defs>
            <g fill="none" fill-rule="evenodd">
                <path d="M0 0h50v50H0z"/>
                <g transform="translate(6 8)">
                    <use fill="#FFF" />
                    <rect width="37" height="32" x="1" y="1" stroke="#BBB" stroke-width="2" rx="6"/>
                    <path fill="#FFF" stroke="#BBB" stroke-linejoin="round" stroke-width="2" d="M11 24.174l5.533-7.207 2.644 3.365 4.09-5.768L30 24.174z"/>
                    <circle cx="12" cy="11" r="2" fill="#FFF" stroke="#BBB" stroke-width="1.8"/>
                </g>
            </g>
        </svg>
    )
}

export default UploadIcon
