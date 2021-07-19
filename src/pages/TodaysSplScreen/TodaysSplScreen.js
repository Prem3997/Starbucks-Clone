import React, { useState } from 'react'
import "./TodaysSplScreen.css"
import { Link } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'
import { SPECIAL_1, SPECIAL_2, SPECIAL_3 } from '../../constants/TodaysSpecialScreen'

function TodaysSplScreen() {
    const [image, setImage] = useState(SPECIAL_1.image)
    const [background, setBackground] = useState(SPECIAL_1.background)
    const [info, setInfo] = useState(SPECIAL_1.info)
    const [name, setName] = useState(SPECIAL_1.name)
    return (
        <div className="todaysSpl">
            <Fade>
                <div className="circle" style={{ background: background }}></div>
            </Fade>
            <Fade>
                <div className="todaysSpl__container">
                    <div className="todaysSpl__Content">
                        <div className="todaysSpl__textBox">

                            <h2>It's not just Coffee<br />It's <span>Starbucks</span></h2>
                            <p>{info}</p>
                            <Link>{name}</Link>

                        </div>
                    </div>
                    <div className="todaysSpl__Content">
                        <div className="todaysSpl__imgBox">
                            <img
                                src={image}
                                alt="today's__Spl__milkshakes" />
                        </div>
                    </div>
                </div>
            </Fade>
            <Fade>
                <div className="todaysSpl__thumbContainer">
                    <ul className="todaysSpl__thumb">
                        <li>
                            <img
                                src={SPECIAL_1.thumb}
                                onClick={() => {
                                    setBackground(SPECIAL_1.background)
                                    setImage(SPECIAL_1.image)
                                    setInfo(SPECIAL_1.info)
                                    setName(SPECIAL_1.name)
                                }}
                                alt={SPECIAL_1.name}
                            />
                        </li>
                        <li>
                            <img
                                src={SPECIAL_2.thumb}
                                alt={SPECIAL_2.name}
                                onClick={() => {
                                    setBackground(SPECIAL_2.background)
                                    setImage(SPECIAL_2.image)
                                    setInfo(SPECIAL_2.info)
                                    setName(SPECIAL_2.name)
                                }}
                            />
                        </li>
                        <li>
                            <img
                                src={SPECIAL_3.thumb}
                                alt={SPECIAL_3.name}
                                onClick={() => {
                                    setBackground(SPECIAL_3.background)
                                    setImage(SPECIAL_3.image)
                                    setInfo(SPECIAL_3.info)
                                    setName(SPECIAL_3.name)
                                }}
                            />
                        </li>
                    </ul>
                </div>
            </Fade>
        </div >
    )
}

export default TodaysSplScreen
