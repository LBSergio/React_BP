import React from 'react';
import { Menu } from '@components/Menu';
import { AppContext } from '@context/AppContext';
import { MyOrder } from '@containers/MyOrder';
import '@styles/header.scss';
import logo from '@logos/logo_yard_sale.svg';
import menu from '@icons/icon_menu.svg';
import shoppingcart from '@icons/icon_shopping_cart.svg';

const Header = () => {
    const [toggle, setToggle] = React.useState(false);
    const [toggleOrders, setToggleOrders] = React.useState(false);

    const { state } = React.useContext(AppContext);

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
                    <li className="navbar-email" onClick={ () => setToggle(!toggle, setToggleOrders(false)) }>
                        1999lopezbautistasergio@gmail.com
                    </li>
                    <li className="navbar-shopping-cart" onClick={ () => setToggleOrders(!toggleOrders, setToggle(false)) }>
                        <img src={ shoppingcart } alt="Shopping cart"/>

                        { state.cart.length > 0 
                            ? <div>
                                { state.cart.length }
                            </div> 
                            : null 
                        }
                    </li>
                </ul>
            </div>
            { toggle && <Menu/> }
            { toggleOrders && <MyOrder/> }
        </nav>
    );
};

export { Header };