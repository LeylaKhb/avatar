import React from "react";
// @ts-ignore
import tg from "../static/tg.PNG";
import vk from "../static/vk.webp";
import inst from "../static/inst.png";
import "../styles/home/social_network.css";

const SocialNetwork: React.FC = () => {
    return (
        <div className="social_network">
            <a href="https://vk.com/id895997005" target="_blank">
                <img src={vk} alt="telegram" className="soc_network_img"  />
            </a>
            <a href="https://www.instagram.com/avatar_arena_kukmor" target="_blank">
                <img src={inst} alt="whatsapp" className="soc_network_img"  />
            </a>
            <a href="https://t.me/Avatar_Arena_Kukmor" target="_blank">
                <img src={tg} alt="viber" className="soc_network_img" style={{borderRadius: '50%'}}  />
            </a>
        </div>
    )
}

export default SocialNetwork;