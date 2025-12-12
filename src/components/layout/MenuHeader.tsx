import React from "react";

interface MenuHeaderProps {
    handleMenuLinks: any;
}

const MenuHeader: React.FC<MenuHeaderProps> = ({handleMenuLinks}) => {
    return (
        <div className="menu">
            <ul className="menu_ul" onClick={handleMenuLinks}>
                <li className="menu_li">
                    <a className="menu_li_link" href="/">Главная</a></li>
                <li className="menu_li">
                    <a href="/#games" className="menu_li_link">Игры</a>
                </li>
                <li className="menu_li">
                    <a className="menu_li_link" href="/#price">Цены</a>
                </li>
                <li className="menu_li">
                    <a className="menu_li_link" href="/#contacts">Контакты</a>
                </li>
            </ul>
        </div>
    )
}
export default MenuHeader;