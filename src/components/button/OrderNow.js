import React from 'react'
import { MENU_PAGE } from '../../constants/routes'
import { Link } from 'react-router-dom'
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import "./OrderNow.css"
function OrderNow() {
    return (
        <Link className="orderNow" to={MENU_PAGE}>
            Order Now
            <LocalCafeIcon />
        </Link>
    )
}

export default OrderNow
