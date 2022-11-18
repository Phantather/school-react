import React from 'react';
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <ul className="header__menu">
                        <li className="header__item">
                            <Link to={''} className="header__link">
                                О школе
                            </Link>
                        </li>
                        <li className="header__item">
                            <Link to={''} className="header__link">
                                О школе
                            </Link>
                        </li>
                        <li className="header__item">
                            <Link to={''} className="header__link">
                                О школе
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;