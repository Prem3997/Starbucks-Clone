import React from 'react'
import './FeaturedSmall.css'

function FeaturedSmall({
    title,
    info,
    image,
    color,
    order,
    background,
}) {
    return (
        <div className='featuredSmall' style={{ background }}>
            <div className='featuredSmall__left' style={{ color, order }}>
                <h4>{title}</h4>
                <p>{info}</p>
            </div>
            <div className='featuredSmall__right'>
                <img src={image} alt={title} />
            </div>
        </div>
    )
}

export default FeaturedSmall