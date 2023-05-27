import React from 'react'

interface Props {
    text: string
}

const Button: React.FC<Props> = ({ text }) => {
    return (
        <a
            href="https://pancakeswap.finance/swap?outputCurrency=0xaf4774C26FC3B4D238D9f04821316C4eC553c0C3"
            className="btn"
            target="_blank"
        >
            <button>{text}</button>
        </a>
    )
}

export default Button
