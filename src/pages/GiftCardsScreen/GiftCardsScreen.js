import React from 'react'
import useMedia from 'use-media';
import CardCarousel from '../../components/card/CardCarousel'
import HeaderSecondary from '../../components/header/HeaderSecondary';
import { Link } from 'react-router-dom';
import "./GiftCardScreen.css"
import { BIRTHDAY_GIFT_SCREEN_URLS, FEATURED_GIFT_SCREEN_URLS, LOVE_GIFT_SCREEN_URLS, PARENTS_GIFT_SCREEN_URLS, SUMMER_GIFT_SCREEN_URLS, THANKYOU_GIFT_SCREEN_URLS } from '../../constants/GiftScreenConstants';
import { Fade } from 'react-awesome-reveal';

function GiftCardsScreen() {
    const isLaptopLarge = useMedia({ maxWidth: '1440px' });
    return (
        <Fade>
            <div className="GiftScreen__container">
                <div>
                    <Fade>
                        <HeaderSecondary name="Featured" length={isLaptopLarge ? FEATURED_GIFT_SCREEN_URLS.length > 4 : FEATURED_GIFT_SCREEN_URLS.length > 5} />
                        <CardCarousel imageUrls={FEATURED_GIFT_SCREEN_URLS} />
                    </Fade>
                </div>
                <div className="giftScreen__giftcard">
                    <Fade>
                        <h3>Got a gift card?</h3>
                        <p>Earn 2<span style={{ color: "#cba258" }}>★</span> per $1</p>
                        <Link className="checknowButton">Check Balance</Link>
                        <Link className="addCardButton">Add Card</Link>
                    </Fade>
                </div>
                <div>
                    <Fade>
                        <HeaderSecondary name="Thank You" length={isLaptopLarge ? THANKYOU_GIFT_SCREEN_URLS.length > 4 : THANKYOU_GIFT_SCREEN_URLS.length > 5} />
                        <CardCarousel imageUrls={THANKYOU_GIFT_SCREEN_URLS} />
                    </Fade>
                </div>
                <div>
                    <Fade>
                        <HeaderSecondary name="Birthday" length={isLaptopLarge ? BIRTHDAY_GIFT_SCREEN_URLS.length > 4 : BIRTHDAY_GIFT_SCREEN_URLS.length > 5} />
                        <CardCarousel imageUrls={BIRTHDAY_GIFT_SCREEN_URLS} />
                    </Fade>
                </div>
                <div>
                    <Fade>
                        <HeaderSecondary name="Love" length={isLaptopLarge ? LOVE_GIFT_SCREEN_URLS.length > 4 : LOVE_GIFT_SCREEN_URLS.length > 5} />
                        <CardCarousel imageUrls={LOVE_GIFT_SCREEN_URLS} />
                    </Fade>
                </div>
                <div>
                    <Fade>
                        <HeaderSecondary name="Summer" length={isLaptopLarge ? SUMMER_GIFT_SCREEN_URLS.length > 4 : SUMMER_GIFT_SCREEN_URLS.length > 5} />
                        <CardCarousel imageUrls={SUMMER_GIFT_SCREEN_URLS} />
                    </Fade>
                </div>
                <div>
                    <Fade>
                        <HeaderSecondary name="Parents Day" length={isLaptopLarge ? PARENTS_GIFT_SCREEN_URLS.length > 4 : PARENTS_GIFT_SCREEN_URLS.length > 5} />
                        <CardCarousel imageUrls={PARENTS_GIFT_SCREEN_URLS} />
                    </Fade>
                </div>
            </div>
        </Fade>
    )
}

export default GiftCardsScreen
