import { Fade } from 'react-awesome-reveal'
import React from 'react'
import "./HomeScreen.css"
import { Link } from 'react-router-dom'
import Heading from '../../components/heading/Heading'
import Featured from '../../components/featured/Featured'
import Info from '../../components/info/Info'
import { Feature_1, Feature_2, HOME_SCREEN_BOTTOM_LEFT, HOME_SCREEN_HEADING_1, HOME_SCREEN_HEADING_2, HOME_SCREEN_STARBUCKS_PEOPLE, HOME_SCREEN_TOP, INFO_1, INFO_2 } from '../../constants/HomePageConstants'

function HomeScreen() {
    return (
        <div className="homeScreen">
            <Fade>
                <div className="homeScreen__top">
                    <h4>
                        {HOME_SCREEN_TOP} <Link>Learn more</Link>
                    </h4>
                </div>
            </Fade>
            <Fade>
                <div className="homeScreen__bottom">
                    <div className="homeScreen__bottomLeft">
                        <h4>{HOME_SCREEN_BOTTOM_LEFT.heading}</h4>
                        <p>
                            {HOME_SCREEN_BOTTOM_LEFT.paragraph}
                        </p>
                        <button>Learn more</button>
                    </div>
                    <div className="homeScreen__bottomRight">
                        <img
                            src={HOME_SCREEN_STARBUCKS_PEOPLE}
                            alt="starbucks_people"
                        />
                    </div>
                </div>
            </Fade>
            <Fade>
                <Heading heading={HOME_SCREEN_HEADING_1} />
            </Fade>
            <div className="homeScreen__featured">
                <Fade>
                    <Featured
                        title={Feature_1.title}
                        info={Feature_1.info}
                        link={Feature_1.link}
                        path={Feature_1.path}
                        image={Feature_1.image}
                        background="#f0ebe0"
                        color="#1e3932"
                        className="featured__hoverLight"
                    />
                </Fade>
                <Fade>
                    <Featured
                        title={Feature_2.title}
                        info={Feature_2.info}
                        link={Feature_2.link}
                        path={Feature_2.path}
                        image={Feature_2.image}
                        order={Feature_2.order}
                        background="#f0ebe0"
                        color="#1e3932"
                        className="featured__hoverLight"
                    />
                </Fade>
            </div>
            <Fade>
                <Heading heading={HOME_SCREEN_HEADING_2} />
            </Fade>

            <Fade>
                <div className="homeScreen__discover">
                    <Info
                        title={INFO_1.title}
                        image={INFO_1.image}
                        info={INFO_1.info}
                        link={INFO_1.link}
                        path={INFO_1.path}
                        color="#1e3932"
                        background="#d4e9e4"
                        className="info__hoverLight"
                    />
                      <Info
                        title={INFO_2.title}
                        image={INFO_2.image}
                        info={INFO_2.info}
                        link={INFO_2.link}
                        path={INFO_2.path}
                        color="#1e3932"
                        background="#d4e9e4"
                        className="info__hoverLight"
                    />
                </div>
            </Fade>
        </div>
    )
}

export default HomeScreen
