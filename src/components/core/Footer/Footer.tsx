import telegramImage from '../../../assets/telegram.svg'
import twitterImage from '../../../assets/twitter.svg'
import dextoolsImage from '../../../assets/dextools.svg'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__box">
                <div className="footer__items">
                    Total supply: <br /> 100,000,000,000 <br /> Tax - 6% / 6% <br /> Max Wallet - 1%
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
                    <a
                        href="https://bscscan.com/address/0xaf4774c26fc3b4d238d9f04821316c4ec553c0c3"
                        target="_blank"
                    >
                        contract
                    </a>
                </div>
            </div>
            <div className="footer__social">
                <div className="footer__socialLink">
                    <a href="https://t.me/Peaceful_Warrior_Token" target="_blank">
                        <img src={telegramImage} alt="telegram" width={30} height={30} />
                    </a>
                    <a href="https://twitter.com/peacefulwt83215" target="_blank">
                        <img src={twitterImage} alt="telegram" width={30} height={30} />
                    </a>
                    <a
                        href="https://www.dextools.io/app/bnb/pair-explorer/0x3f8607ac6d69a195da5acb779bf434d82e781a9e"
                        target="_blank"
                    >
                        <img src={dextoolsImage} alt="telegram" width={30} height={30} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
