import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'
import "./MenuItem.css"

function MenuItem({ type, image }) {
    return (
        <Fade>
            <Link className='menuItem'>
                <img src={image} alt='' className='menuItem__image' />
                <h4 className='menuItem__type'>{type}</h4>
            </Link>
        </Fade>
    )
}

export default MenuItem
