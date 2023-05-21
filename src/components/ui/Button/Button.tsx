import React from 'react'

interface Props {
    text: string
}

const Button: React.FC<Props> = ({ text }) => {
    return (
        <a href="#" className="btn">
            <button>{text}</button>
        </a>
    )
}

export default Button
