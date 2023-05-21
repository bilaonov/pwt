import Canvas from './components/Canvas/Canvas'
import Layout from './components/core/Layout/Layout'
import warrior from './assets/warrior1.png'
import moon_warrior from './assets/moonaawarrior.png'
import valley from './assets/valley.png'
import coin_image from './assets/coin.png'
import './index.scss'
import Button from './components/ui/Button/Button'
import Title from './components/ui/Title/Title'

const App = () => {
    return (
        <Layout>
            <div className="main">
                <div id="buytoken" className="section">
                    <div className="section__box">
                        <div className="section__model">
                            <Canvas />
                        </div>

                        <div className="section__image">
                            <img alt="warrior" src={warrior} width={799} height={672} />
                        </div>

                        <div className="section__title">
                            PEACEFULL WARRIOR <br /> TOKEN
                        </div>
                    </div>
                    <Button text="buy token" />
                </div>
                <div id="about" className="about">
                    <Title text="LEGEND" />
                    <div className="about__section">
                        <div className="about__sectionText">
                            The world is changing. It doesn't become better, it simply becomes
                            different. The time of the Peaceful Warrior has come. The Chosen One
                            possesses incredible strength and skill in battle but always refuses to
                            use their abilities for personal gain or engage in wars. Their heart is
                            filled with peace and the desire to see justice and well-being in the
                            world. Now, the Peaceful Warrior decides to challenge the centralized
                            financial system that controls and manipulates people's lives. They see
                            how this system leads to inequality and the suffering of many.
                            Determined to change the situation, the Peaceful Warrior makes the
                            decision to create a decentralized system that empowers every individual
                            to feel free. Anyone who shares their worldview and is willing to defend
                            justice can join.
                        </div>
                        <div className="about__sectionImage">
                            <div className="about__sectionElipse"></div>
                            <img src={moon_warrior} alt="moon_warrior" width={550} height={550} />
                        </div>
                    </div>
                    <div className="about__section2">
                        <div className="about__sectionImage">
                            <img src={valley} alt="moon_warrior" width={550} height={550} />
                        </div>
                        <div className="about__sectionText">
                            Embarking on their mission, the Peaceful Warrior travels to different
                            corners of the planet, encountering like-minded individuals who share
                            their ideals. Together, they create a community of kindred spirits
                            called the "Peaceful Guardians." This community unites people of various
                            professions and skills: scientists, programmers, philosophers, and
                            ordinary citizens who believe in the power of decentralization and
                            equality. With their skills and knowledge, the Peaceful Warrior and the
                            Peaceful Guardians develop a new decentralized financial system called
                            PWT (Peaceful Warrior Token) or "Free Currency."
                        </div>
                    </div>
                    <div className="about__section">
                        <div className="about__sectionText3">
                            They create a digital currency that is independent of central bank
                            control and immune to manipulation by corrupt institutions. PWT provides
                            everyone with the opportunity to participate in the system, regardless
                            of their status or education. It operates on blockchain technology,
                            ensuring transparency and reliability in transactions. People can send
                            and receive funds, invest in projects, and propose their ideas to
                            improve the system. Over time, Peaceful Warrior Token attracts an
                            increasing number of people.
                        </div>
                        <div className="about__sectionImage3">
                            <img src={coin_image} alt="moon_warrior" width={300} height={350} />
                        </div>
                        <Button text={'BUY TOKEN'} />
                    </div>
                </div>
                <div id="roadmap" className="roadmap">
                    <Title text="ROADMAP" />
                    <div className="roadmap__section">
                        <div className="roadmap__box">
                            <p className="roadmap__step">1</p>
                            • Initial launch <br /> • Social setup <br /> • Website launch for
                            Peaceful Warrior <br /> • Leader onboarding
                        </div>

                        <div className="roadmap__scheme">
                            <div className="roadmap__schemeLine">
                                <p className="roadmap__schemePhare">1</p>
                                <p className="roadmap__schemePhare">2</p>
                                <p className="roadmap__schemePhare">3</p>
                                <p className="roadmap__schemePhare">4</p>
                            </div>
                        </div>

                        <div className="roadmap__box4">
                            <p className="roadmap__step">4</p>
                            • Focus on sustainable growth strategy <br /> • Expand team to continue
                            development <br /> • Secret Utility Alpha <br /> • List $PWT token on
                            major centralized exchanges (CEX)
                        </div>
                        <div className="roadmap__box3">
                            <p className="roadmap__step">3</p>
                            • Partnerships, collaborations and AMAs <br /> • Next step of Marketing
                            <br /> • Social Media Advertisements <br /> • Secret Utility Beta
                        </div>
                        <div className="roadmap__box2">
                            <p className="roadmap__step">2</p>
                            • Building community of The Peaceful Guardians <br /> • Marketing <br />
                            • Launch a system of rewards for promotion <br /> • Listings on CMC and
                            CG
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default App
