import React from 'react'
import telegramImage from '../../../assets/telegram.svg'
import twitterImage from '../../../assets/twitter.svg'
import dextoolsImage from '../../../assets/dextools.svg'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__box">
                <div className="footer__items">
                    Total supply: <br /> 100,000,000,000 <br /> Tax - 6% / 6%
                </div>
                <div className="footer__items">
                    - Mcap 600K + 3 months <br /> - Mcap 1M+ + 3 months <br /> - Mcap 2M+ + 3 months{' '}
                    <br />- Mcap 5M+ + 10 years
                </div>
                <div className="footer__items">
                    LP Lock - 3 months <br /> Max Wallet - 1%
                </div>
                <div className="footer__items">contract </div>
            </div>
            <div className="footer__social">
                <div className="footer__socialLink">
                    <a href="#">
                        <img src={telegramImage} alt="telegram" width={30} height={30} />
                    </a>
                    <a href="#">
                        <img src={twitterImage} alt="telegram" width={30} height={30} />
                    </a>
                    <a href="#">
                        <img src={dextoolsImage} alt="telegram" width={30} height={30} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
