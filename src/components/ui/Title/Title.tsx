import React from 'react'

interface Props {
    text: string
}

const Title: React.FC<Props> = ({ text }) => {
    return <div className="title">{text}</div>
}

export default Title
