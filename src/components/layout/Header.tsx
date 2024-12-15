import {Link} from "react-router-dom";
import logo from "../../static/logo.svg"
import vk from "../../static/vk.webp"
// @ts-ignore
import tg from "../../static/tg.png"
import inst from "../../static/inst.png"
import React, {useState} from "react";
import MenuHeader from "./MenuHeader";
import Popup from "../Popup";

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = () => {
    const [open, setOpen] = useState(false);
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    function setPopupTrue() {
        setIsPopupVisible(true);
        document.body.style.overflow = "hidden";
    }
    function setPopupFalse() {
        setIsPopupVisible(false);
        document.body.style.overflow = "scroll";
    }
    function handleMenu() {
        if (!open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "scroll";
        }
        setOpen(!open);
    }

    return (
        <header>
            {open && <MenuHeader handleMenuLinks={handleMenu}/>}

            <div className="menu_and_logo">
                <div className="menu_header" onClick={handleMenu}>
                    <span className="menu_header_block" style={{top: 25, display: open ? 'none' : "initial"}}></span>
                    <span className="menu_header_block"
                          style={{top: 33, transform: open ? "rotate(45deg)" : "none"}}></span>
                    <span className="menu_header_block"
                          style={{top: 33, transform: open ? "rotate(-45deg)" : "none"}}></span>
                    <span className="menu_header_block" style={{top: 41, display: open ? 'none' : "initial"}}></span>
                </div>


                <Link to="/">
                    <img src={logo} style={{width: '40%'}} alt="emblem"/>
                </Link>
            </div>

            <Popup isVisible={isPopupVisible}  setVisibleFalse={setPopupFalse}/>
            <div className="links_container_header">
                <a href="/#games" className="link_header_footer">Игры</a>
                <a href="/#price" className="link_header_footer">Цены</a>
                <a href="/#contacts" className="link_header_footer">Контакты</a>
                <a onClick={setPopupTrue} href="#" className="link_header_footer">Забронировать время</a>
            </div>

            <div className="contacts_header_footer">
                <a href="tel:+79172575466" className="tel_link">+7 (917) 257-54-66</a>
                <div style={{display: "flex", flexFlow: "row", marginTop: 5}}>
                    <a href="https://vk.com/id895997005">
                        <img src={vk} style={{width: 30, marginRight: 10}} alt="vk"/>
                    </a>
                    <a href="https://www.instagram.com/avatar_arena_kukmor">
                        <img src={inst} style={{width: 30}} alt="inst"/>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;