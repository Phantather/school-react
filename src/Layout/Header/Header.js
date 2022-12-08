import React from 'react';
import {Link} from "react-router-dom"
import logo from '../../assets/header/logo.svg'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <ul className="header__menu">
                        <li className="header__item">
                            <Link to={'about'} className="header__link">
                                О школе
                            </Link>
                        </li>
                        <li className="header__item">
                            <Link to={'admission'} className="header__link">
                                Поступление
                            </Link>
                        </li>
                        <li className="header__item">
                            <Link to={'education'} className="header__link">
                                Обучение
                            </Link>
                        </li>
                    </ul>
                    <Link to={''} className="header__logo">
                        <h1 className="header__title">
                            <img src={logo} alt="logo"/>
                            Частная интегрированная школа
                        </h1>
                    </Link>
                    <ul className="header__menu">
                        <li className="header__item">
                            <Link to={'life'} className="header__link">
                                Школьная жизнь
                            </Link>
                        </li>
                        <li className="header__item">
                            <Link to={'news'} className="header__link">
                                Новости
                            </Link>
                        </li>
                        <li className="header__item">
                            <Link to={'contacts'} className="header__link">
                                Контакты
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;