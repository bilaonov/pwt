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

                <div className="footer__items2">
                    <p>LP Lock - 3 months</p>

                    <p>
                        • Mcap 600K <span>+</span> 3 months
                    </p>
                    <p>
                        • Mcap 1M <span>+</span> 3 months
                    </p>
                    <p>
                        • Mcap 2M <span>+</span> 3 months
                    </p>
                    <p>
                        Mcap 5M <span>+</span> 10 years
                    </p>
                </div>
                <div className="footer__items">
                    <p>Max Wallet - 1%</p>
                    <a href="#">contract</a>
                </div>
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
