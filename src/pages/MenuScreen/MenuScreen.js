import React from 'react'
import "./MenuScreen.css"
import menuList from "../../constants/MenuList.json"
import MenuList from '../../components/menu/MenuList'
import MenuItem from '../../components/menu/MenuItem'
function MenuScreen() {
    return (
        <div className="menuScreen">
            <div className="menuScreen__container">
                <div className="menuScreen__left">
                    <MenuList />
                </div>
                <div className="menuScreen__right">
                    <h1>Menu</h1>
                    <div className="menuScreen__category">
                        <h2>Drinks</h2>
                        <div className="menuScreen__items">
                            {menuList.map((menuListCategory) =>
                                menuListCategory.drinks.map(({ type, image }) => (
                                    <MenuItem key={type} type={type} image={image} />
                                ))
                            )}
                        </div>
                    </div>
                    <div className="menuScreen__category">
                        <h2>Food</h2>
                        <div className="menuScreen__items">
                            {menuList.map((menuListCategory) =>
                                menuListCategory.food.map(({ type, image }) => (
                                    <MenuItem key={type} type={type} image={image} />
                                ))
                            )}
                        </div>
                    </div>
                    <div className="menuScreen__category">
                        <h2>At Home Coffee</h2>
                        <div className="menuScreen__items">
                            {menuList.map((menuListCategory) =>
                                menuListCategory.atHomeCoffee.map(({ type, image }) => (
                                    <MenuItem key={type} type={type} image={image} />
                                ))
                            )}
                        </div>
                    </div>
                    <div className="menuScreen__category">
                        <h2>Merchandise</h2>
                        <div className="menuScreen__items">
                            {menuList.map((menuListCategory) =>
                                menuListCategory.merchandise.map(({ type, image }) => (
                                    <MenuItem key={type} type={type} image={image} />
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuScreen
