import React from 'react'
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./CardCarousel.css"

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 },
];

function CardCarousel({ imageUrls }) {
    return (
        <>
            <Carousel
                className="my-carousel"
                breakPoints={breakPoints}
                pagination={false}
                autoTabIndexVisibleItems={true}
                showEmptySlots
                itemsToScroll={2}
            >
                {imageUrls.map(url => <Item key={url} src={url} />)}
            </Carousel>
        </>
    )
}

export default CardCarousel
