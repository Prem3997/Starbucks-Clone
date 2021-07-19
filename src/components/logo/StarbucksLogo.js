import React from 'react'
import { STARBUCKS_LOGO } from '../../constants/HomePageConstants'
import { Link } from 'react-router-dom'
import "./StarbucksLogo.css"
function StarbucksLogo() {
    return (
        <div>
            <Link className="logo" to="/">
                <img
                    src={STARBUCKS_LOGO}
                    alt="starbucks_logo"
                />
            </Link>
        </div>
    )
}

export default StarbucksLogo
