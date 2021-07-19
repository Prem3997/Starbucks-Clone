import React from 'react'
import "./MenuHeader.css"
import { NavLink } from 'react-router-dom'
import * as MENU from '../../constants/routes'

function MenuHeader({ rewardsPage }) {
    return (
        <div className={`menuHeader ${rewardsPage && 'menuHeader__rewardsPage'}`}>
            {rewardsPage ?
                <div className="menuHeader__Rewardslinks">
                    <p>Starbucks® Rewards</p>
                </div>
                :
                <div className="menuHeader__links">
                    <NavLink
                        to={MENU.MENU_PAGE}
                        activeClassName="menuHeader__link--active"
                        exact
                    >
                        All Products
                    </NavLink>
                    <NavLink
                        to={MENU.MENU_FEATURED_PAGE}
                        activeClassName="menuHeader__link--active"
                    >
                        Featured
                    </NavLink>
                    <NavLink
                        to={MENU.MENU_TODAYSPL_PAGE}
                        activeClassName="menuHeader__link--active"
                    >
                        Today's Special
                    </NavLink>
                </div>
            }
        </div>
    )
}

export default MenuHeader
