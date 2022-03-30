import React from 'react';
import { Menu } from '@components/Menu';
import '@styles/header.scss';
import logo from '@logos/logo_yard_sale.svg';
import menu from '@icons/icon_menu.svg';
import shoppingcart from '@icons/icon_shopping_cart.svg';

const Header = () => {
    const [toggle, setToggle] = React.useState(false);

    const handleToggle = () => { setToggle(!toggle); }

    return(
        <nav>
            <img src={ menu } alt="Menu" className="menu"/>
            <div className="navbar-left">
                <img src={ logo } alt="Logo" className="nav-logo"/>
                <ul>
                    <li>
                    <a href="/">All</a>
                    </li>
                    <li>
                    <a href="/">Clothes</a>
                    </li>
                    <li>
                    <a href="/">Electronics</a>
                    </li>
                    <li>
                    <a href="/">Furnitures</a>
                    </li>
                    <li>
                    <a href="/">Toys</a>
                    </li>
                    <li>
                    <a href="/">Others</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={ handleToggle }>
                        1999lopezbautistasergio@gmail.com
                    </li>
                    <li className="navbar-shopping-cart">
                        <img src={ shoppingcart } alt="Shopping cart"/>
                        <div>2</div>
                    </li>
                </ul>
            </div>
            { toggle && <Menu/> }
        </nav>
    );
};

export { Header };