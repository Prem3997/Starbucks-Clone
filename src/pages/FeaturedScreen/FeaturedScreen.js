import React from 'react'
import "./FeaturedScreen.css"
import { Fade } from 'react-awesome-reveal'
import Info from '../../components/info/Info'
import Heading from '../../components/heading/Heading'
import Featured from '../../components/featured/Featured'
import "./FeaturedScreen.css"
import { DARK_INFO_1, DARK_INFO_2, DARK_INFO_3, DARK_INFO_4, DARK_INFO_HEADING, FEATURE, LIGHT_INFO_1_1, LIGHT_INFO_1_2, LIGHT_INFO_1_HEADING, LIGHT_INFO_2_1, LIGHT_INFO_2_2, LIGHT_INFO_2_HEADING } from '../../constants/FeaturedScreenConstants'
function FeaturedScreen() {
    return (
        <div className="featuredScreen">
            <div className="featuredScreen__heading">
                <Fade>
                    <Heading heading={LIGHT_INFO_1_HEADING} />
                </Fade>
            </div>
            <Fade>
                <div className="featuredScreen__discover">
                    <Info
                        title={LIGHT_INFO_1_1.title}
                        image={LIGHT_INFO_1_1.image}
                        info={LIGHT_INFO_1_1.info}
                        link="Order"
                        color="#1e3932"
                        background="#f0ebe0"
                        className="info__hoverLight"
                    />
                    <Info
                        title={LIGHT_INFO_1_2.title}
                        image={LIGHT_INFO_1_2.image}
                        info={LIGHT_INFO_1_2.info}
                        link="Order"
                        color="#1e3932"
                        background="#f0ebe0"
                        className="info__hoverLight"
                    />
                </div>
            </Fade>

            <Fade>
                <Heading heading={DARK_INFO_HEADING} />
            </Fade>
            <Fade>
                <div className="featuredScreen__discover">
                    <Info
                        title={DARK_INFO_1.title}
                        image={DARK_INFO_1.image}
                        info={DARK_INFO_1.info}
                        link="Order"
                        color="white"
                        background="#1e3932"
                        className="info__hoverDark"
                    />
                    <Info
                        title={DARK_INFO_2.title}
                        image={DARK_INFO_2.image}
                        info={DARK_INFO_2.info}
                        link="Order"
                        color="white"
                        background="#1e3932"
                        className="info__hoverDark"
                    />

                    <Info
                        title={DARK_INFO_3.title}
                        image={DARK_INFO_3.image}
                        info={DARK_INFO_3.info}
                        link="Order"
                        color="white"
                        background="#1e3932"
                        className="info__hoverDark"
                    />

                    <Info
                        title={DARK_INFO_4.title}
                        image={DARK_INFO_4.image}
                        info={DARK_INFO_4.info}
                        link="Order"
                        color="white"
                        background="#1e3932"
                        className="info__hoverDark"
                    />
                </div>
            </Fade>

            <Fade>
                <Heading heading={LIGHT_INFO_2_HEADING} />
            </Fade>
            <Fade>
                <div className="featuredScreen__discover">
                    <Info
                        title={LIGHT_INFO_2_1.title}
                        image={LIGHT_INFO_2_1.image}
                        info={LIGHT_INFO_2_1.info}
                        link="Order"
                        color="#1e3932"
                        background="#d4e9e4"
                        className="info__hoverLight"
                    />
                    <Info
                        title={LIGHT_INFO_2_2.title}
                        image={LIGHT_INFO_2_2.image}
                        info={LIGHT_INFO_2_2.info}
                        link="Order"
                        color="#1e3932"
                        background="#d4e9e4"
                        className="info__hoverLight"
                    />
                </div>
            </Fade>
            <Fade>
                <div className="featuredScreen__featured">
                    <Featured
                        title={FEATURE.title}
                        info={FEATURE.info}
                        link="Order now"
                        path={FEATURE.path}
                        image={FEATURE.image}
                        order={FEATURE.order}
                        background="#1e3932"
                        color="white"
                        className="featured__hoverDark"
                    />
                </div>
            </Fade>
        </div>
    )
}

export default FeaturedScreen
