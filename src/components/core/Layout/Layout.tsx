import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

interface Props {
    children: any
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className="container">
            <Header />

            {children}
            {/* <Footer /> */}
        </div>
    )
}

export default Layout
