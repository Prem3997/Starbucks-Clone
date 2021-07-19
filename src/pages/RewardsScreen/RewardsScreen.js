import React from 'react'
import "./RewardsScreen.css"
import Featured from '../../components/featured/Featured'
import { REWARDS_FEATURE, REWARDS_SUB_CON_1, REWARDS_SUB_CON_3, REWARDS_SUB_CON_4, starTabs, starLists, REWARDSFORM } from '../../constants/RewardsPageConstants'
import { Fade } from 'react-awesome-reveal'
import Tablist from "../../components/tablist/Tablist"
import { ReportProblemRounded, Close } from '@material-ui/icons'
import { useForm } from 'react-hook-form'
import { TextField } from '@material-ui/core'

function RewardsScreen() {
    const { register, handleSubmit, errors } = useForm()
    const onSubmit = () => {
        console.log('ButtonClicked.')
    }
    return (
        <Fade>
            <div className="rewardsScreen">
                <div className="rewardsScreen__container">
                    <Featured
                        title={REWARDS_FEATURE.title}
                        info={REWARDS_FEATURE.info}
                        link={REWARDS_FEATURE.link}
                        path={REWARDS_FEATURE.path}
                        image={REWARDS_FEATURE.image}
                        background={REWARDS_FEATURE.background}
                        color={REWARDS_FEATURE.color}
                        className={REWARDS_FEATURE.className}
                    />
                </div>
                <Fade>
                    <div className="rewardsScreen__container">
                        <Fade>
                            <div className="rewardsScreen__subContainer">
                                <Fade>
                                    <h2>{REWARDS_SUB_CON_1.heading}</h2>
                                    <p>{REWARDS_SUB_CON_1.paragraph}</p>
                                </Fade>
                                <Fade>
                                    <div className="rewardsScreen__multiRowContainer">
                                        <Fade>
                                            <div className="rewardsScreen__rowFlexContainer">
                                                <div className="rewardsScreen__imageContainer">
                                                    <img className="rewardsScreen__image" src={REWARDS_SUB_CON_1.sub1.image} alt="rewards_img" width="48" />
                                                </div>
                                                <div className="rewardsScreen__cardContent">
                                                    <h2>{REWARDS_SUB_CON_1.sub1.heading}</h2>
                                                    <p>{REWARDS_SUB_CON_1.sub1.paragraph}</p>
                                                </div>
                                            </div>
                                            <div className="rewardsScreen__rowFlexContainer">
                                                <div className="rewardsScreen__imageContainer">
                                                    <img className="rewardsScreen__image" src={REWARDS_SUB_CON_1.sub2.image} alt="rewards_img" width="48" />
                                                </div>
                                                <div className="rewardsScreen__cardContent">
                                                    <h2>{REWARDS_SUB_CON_1.sub2.heading}</h2>
                                                    <p>{REWARDS_SUB_CON_1.sub2.paragraph}</p>
                                                </div>
                                            </div>
                                            <div className="rewardsScreen__rowFlexContainer">
                                                <div className="rewardsScreen__imageContainer">
                                                    <img className="rewardsScreen__image" src={REWARDS_SUB_CON_1.sub3.image} alt="rewards_img" width="48" />
                                                </div>
                                                <div className="rewardsScreen__cardContent">
                                                    <h2>{REWARDS_SUB_CON_1.sub3.heading}</h2>
                                                    <p>{REWARDS_SUB_CON_1.sub3.paragraph}</p>
                                                </div>
                                            </div>
                                        </Fade>
                                    </div>
                                </Fade>
                            </div>
                        </Fade>
                        <Fade>
                            <Fade style={{ marginBottom: '30px' }}>
                                <Tablist tabLists={starLists} tabs={starTabs} />
                            </Fade>
                        </Fade>
                        <div className="rewardsScreen__subContainer">
                            <Fade>
                                <h2>{REWARDS_SUB_CON_3.heading}</h2>
                                <p>{REWARDS_SUB_CON_3.paragraph}</p>
                            </Fade>
                            <Fade>
                                <div className="rewardsScreen__multiRowContainer">
                                    <Fade>
                                        <div className="rewardsScreen__rowFlexContainer">
                                            <div className="rewardsScreen__imageContainer">
                                                <img className="rewardsScreen__image" src={REWARDS_SUB_CON_3.sub1.image} alt="rewards_img" width="112" />
                                            </div>
                                            <div className="rewardsScreen__cardContent">
                                                <h2>{REWARDS_SUB_CON_3.sub1.heading}</h2>
                                                <p>{REWARDS_SUB_CON_3.sub1.paragraph}</p>
                                                <button>Learn More</button>
                                            </div>
                                        </div>
                                        <div className="rewardsScreen__rowFlexContainer">
                                            <div className="rewardsScreen__imageContainer">
                                                <img className="rewardsScreen__image" src={REWARDS_SUB_CON_3.sub2.image} alt="rewards_img" width="112" />
                                            </div>
                                            <div className="rewardsScreen__cardContent">
                                                <h2>{REWARDS_SUB_CON_3.sub2.heading}</h2>
                                                <p>{REWARDS_SUB_CON_3.sub2.paragraph}</p>
                                                <button>Learn More</button>
                                            </div>
                                        </div>
                                        <div className="rewardsScreen__rowFlexContainer">
                                            <div className="rewardsScreen__imageContainer">
                                                <img className="rewardsScreen__image" src={REWARDS_SUB_CON_3.sub3.image} alt="rewards_img" width="112" />
                                            </div>
                                            <div className="rewardsScreen__cardContent">
                                                <h2>{REWARDS_SUB_CON_3.sub3.heading}</h2>
                                                <p>{REWARDS_SUB_CON_3.sub3.paragraph}</p>
                                                <button>Learn More</button>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>
                            </Fade>
                        </div>
                        <div className="rewardsScreen__subContainer">
                            <Fade>
                                <h2>{REWARDS_SUB_CON_4.heading}</h2>
                                <p>{REWARDS_SUB_CON_4.paragraph}</p>
                                <Fade>
                                    <div className="grid-container">
                                        <Fade>
                                            <div className="grid-item">
                                                <h2>{REWARDS_SUB_CON_4.sub1.heading}</h2>
                                                <p>{REWARDS_SUB_CON_4.sub1.headignInfo}</p>
                                            </div>
                                            <div className="grid-item">
                                                <div className="grid-item-featured">
                                                    <div className="grid-item-featured__Left">
                                                        <img className="grid-item-image" src={REWARDS_SUB_CON_4.sub1.image1} alt="rewards_img" width="112" />
                                                    </div>
                                                    <div className="grid-item-featured__Right">
                                                        <h2>{REWARDS_SUB_CON_4.sub1.subheading1}</h2>
                                                        <p>{REWARDS_SUB_CON_4.sub1.subheadingInfo1}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid-item">
                                                <div className="grid-item-featured">
                                                    <div className="grid-item-featured__Left">
                                                        <img src={REWARDS_SUB_CON_4.sub1.image2} alt="rewards_img" width="112" />
                                                    </div>
                                                    <div className="grid-item-featured__Right">
                                                        <h2>{REWARDS_SUB_CON_4.sub1.subheading2}</h2>
                                                        <p>{REWARDS_SUB_CON_4.sub1.subheadingInfo2}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid-item">
                                                <h2>{REWARDS_SUB_CON_4.sub2.heading}</h2>
                                                <p>{REWARDS_SUB_CON_4.sub2.headignInfo}</p>
                                            </div>
                                            <div className="grid-item">
                                                <div className="grid-item-featured">
                                                    <div className="grid-item-featured__Left">
                                                        <img src={REWARDS_SUB_CON_4.sub2.image1} alt="rewards_img" width="112" />
                                                    </div>
                                                    <div className="grid-item-featured__Right">
                                                        <h2>{REWARDS_SUB_CON_4.sub2.subheading1}</h2>
                                                        <p>{REWARDS_SUB_CON_4.sub2.subheadingInfo1}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid-item">
                                                <div className="grid-item-featured">
                                                    <div className="grid-item-featured__Left">
                                                        <img src={REWARDS_SUB_CON_4.sub2.image2} alt="rewards_img" width="112" />
                                                    </div>
                                                    <div className="grid-item-featured__Right">
                                                        <h2>{REWARDS_SUB_CON_4.sub2.subheading2}</h2>
                                                        <p>{REWARDS_SUB_CON_4.sub2.subheadingInfo2}</p>
                                                    </div>
                                                </div>
                                            </div><div className="grid-item">
                                                <h2>{REWARDS_SUB_CON_4.sub3.heading}</h2>
                                                <p>{REWARDS_SUB_CON_4.sub3.headignInfo}</p>
                                            </div>
                                            <div className="grid-item">
                                                <div className="grid-item-featured">
                                                    <div className="grid-item-featured__Left">
                                                        <img src={REWARDS_SUB_CON_4.sub3.image1} alt="rewards_img" width="112" />
                                                    </div>
                                                    <div className="grid-item-featured__Right">
                                                        <h2>{REWARDS_SUB_CON_4.sub3.subheading1}</h2>
                                                        <p>{REWARDS_SUB_CON_4.sub3.subheadingInfo1}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Fade>
                                    </div>
                                </Fade>
                            </Fade>
                        </div>
                        <div className="rewardForm">
                            <Fade>
                                <div className="rewardForm__Container">
                                    <h2>{REWARDSFORM.heading}</h2>
                                    <p>{REWARDSFORM.headingInfo}</p>
                                    <form onSubmit={handleSubmit(onSubmit)} className="rewardForm__form">
                                        <div className="rewardForm__inputContainer">
                                            <TextField
                                                label={REWARDSFORM.formPlaceHolder}
                                                className="rewardForm__input"
                                                type="text"
                                                error={errors.starCode}
                                                name="starCode"
                                                variant="outlined"
                                                inputRef={register({ required: true })}
                                                InputLabelProps={{
                                                    style: {
                                                        color: !errors.starCode? "black":"red"
                                                    }
                                                }}
                                                InputProps={{
                                                    style: {
                                                        fontWeight: "400"
                                                    }
                                                }}
                                            />
                                            {errors.starCode && (
                                                <div className="rewardForm__error">
                                                    <Close fontSize="small" />
                                                    <span>{REWARDSFORM.formError}</span>
                                                    <ReportProblemRounded
                                                        fontSize="small"
                                                        className="rewardForm__reportIcon"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                        <button type="submit" >Submit</button>
                                        <p>{REWARDSFORM.paragraph}</p>
                                    </form>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </Fade>
            </div >
        </Fade >
    )
}

export default RewardsScreen
