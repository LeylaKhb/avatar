import React from "react";
import logo from "../../static/logo.svg";
import {Link} from "react-router-dom";
import vk from "../../static/vk.webp";
import inst from "../../static/inst.png";

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="logo_and_button">
                <Link to="/">
                    <img src={logo} style={{width: '50%'}} alt="emblem"/>
                </Link>
                <div className="contacts_header_footer_with_logo">
                    <div style={{display: "flex", flexFlow: "row", marginTop: 5}}>
                        <Link to="#">
                            <img src={vk} style={{width: 30, marginRight: 10}} alt="vk"/>
                        </Link>
                        <Link to="#">
                            <img src={inst} style={{width: 30}} alt="inst"/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="links_container_footer">
                <a href="/#about" className="link_header_footer">Игры</a>
                <a href="/#reviews" className="link_header_footer">Отзывы</a>
                <a href="/#contacts" className="link_header_footer">Контакты</a>
                <a href="/schedule" className="link_header_footer">Забронировать время</a>
            </div>
            <div className="contacts_header_footer">
                <div style={{display: "flex", flexFlow: "row", marginTop: 5}}>
                    <Link to="#">
                        <img src={vk} style={{width: 30, marginRight: 10}} alt="vk"/>
                    </Link>
                    <Link to="#">
                        <img src={inst} style={{width: 30}} alt="inst"/>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;