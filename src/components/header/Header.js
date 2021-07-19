import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'
import FindAStore from '../button/FindAStore'
import { NavigationBar } from '../navigationbar/NavigationBar'
import { useSelector } from 'react-redux'
import { selectUser } from "../../features/UserSlice"
import SignInButton from '../button/SignInButton'
import SignUpButton from '../button/SignUpButton'
import LogoutButton from '../button/LogoutButton'
import StarbucksLogo from '../logo/StarbucksLogo'
import { GIFT_CARDS_PAGE, MENU_PAGE, REWARDS_PAGE } from '../../constants/routes'
import OrderNow from '../button/OrderNow'

function Header({ fixHeader }) {
    const user = useSelector(selectUser)
    return (
        <div className={`header ${fixHeader && 'header__menuPage'}`}>
            <div className="header__left">
                <StarbucksLogo />
                <NavLink className="header__link" activeClassName="header__link--active" to={MENU_PAGE}>
                    Menu
                </NavLink>
                <NavLink className="header__link" activeClassName="header__link--active" to={REWARDS_PAGE}>
                    Rewards
                </NavLink>
                <NavLink className="header__link" activeClassName="header__link--active" to={GIFT_CARDS_PAGE}>
                    Gift Cards
                </NavLink>
            </div>
            <div className="header__right">
                <NavigationBar />
                <FindAStore />
                {!user ? (
                    <>
                        <SignInButton name="Sign In"/>
                        <SignUpButton />
                    </>
                ) : (
                    <div className="header__logout">
                        {fixHeader ? <LogoutButton /> : <OrderNow />}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;