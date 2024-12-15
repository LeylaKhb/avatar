import React, {useEffect, useRef, useState} from "react";
import {Helmet, HelmetProvider} from "react-helmet-async";
import bg_title from "../static/battle/bg_title.png";
import character_desc_1 from "../static/battle/character_desc_1.webp";
import character_desc_2 from "../static/battle/character_desc_2.webp";
import character_desc_3 from "../static/battle/character_desc_3.webp";
import {Swiper,  SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import unique_ability from "../static/battle/unique_ability.svg";
import title_boy from "../static/battle/title_boy.png";
import title_character_2 from "../static/battle/title_character_2.png";
import "../styles/battle.css";
import useOnScreen from "../hooks/useIntersection";
import {battle_characters} from "../text/battle";
import character_all from "../static/battle/character_all.png";
import bg_modes from "../static/battle/bg_modes.webp";
import mode_1 from "../static/battle/mode_1.png";
import mode_2 from "../static/battle/mode_2.png";
import mode_3 from "../static/battle/mode_3.png";
import mode_4 from "../static/battle/mode_4.png";

const BattleGames: React.FC = () => {
    const titleRef = useRef<HTMLDivElement>(null);
    const isTitleOnScreen = useOnScreen(titleRef);
    const [hasBeenVisible, setHasBeenVisible] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (isTitleOnScreen && !hasBeenVisible) {
            setHasBeenVisible(true);
        }
    }, [isTitleOnScreen, hasBeenVisible]);

    useEffect(() => {
        const timer = setTimeout(() => setOpen(true), 500);
        return () => clearTimeout(timer);
    }, []);

    const charactersRef = useRef<HTMLDivElement>(null);
    const isCharactersOnScreen = useOnScreen(charactersRef);
    const [charactersHasBeenVisible, setCharactersHasBeenVisible] = useState(false);
    useEffect(() => {
        if (isCharactersOnScreen && !charactersHasBeenVisible) {
            setCharactersHasBeenVisible(true);
        }
    }, [isCharactersOnScreen, charactersHasBeenVisible]);
    return (
        <div style={{width: '100%', height: '90vh', display: open ? "initial" : "none"}}>
            <HelmetProvider>
                <Helmet
                    title="Battle Games"
                />
            </HelmetProvider>
            <div className="page_content">
                <div style={{marginTop: 80}} className="battle_games">
                    <div>
                        <img src={bg_title} alt={bg_title} className="battle_bg"/>
                        <div className={hasBeenVisible ? "visible" : "hidden_bottom"}
                             style={{width: "100%", position: "relative"}}
                             ref={titleRef}>
                            <img src={title_boy} alt="boy" className="img_boy_battle"/>
                            <img src={title_character_2} alt="girl" className="img_girl_battle"/>
                            <h1 className="title_battle">BATTLE <br/> GAMES</h1>
                            <p className="desc_battle"> Игра, которая соединяет в себе элементы тактических RPG и зубодробительных шутеров</p>
                        </div>
                    </div>
                    <div style={{display: "flex", alignItems: "center", flexFlow: "column"}}>
                        <h1 className="characters_title">В Avatar Battle есть 12 персонажей,<br/> у каждого из которых своя <br/> уникальная особенность.</h1>
                        <div style={{display: "flex", flexFlow: "row", justifyContent: "space-around", width: '90%'}}>
                            <img src={character_desc_1}  alt="battle_character_desc"
                                 className={`battle_character_desc ${charactersHasBeenVisible ? "scale_character" : ""}`} />
                            <img src={character_desc_2} alt="battle_character_desc"
                                 className={`battle_character_desc ${charactersHasBeenVisible ? "scale_character" : ""}`}/>
                            <img src={character_desc_3}  alt="battle_character_desc"
                                 className={`battle_character_desc ${charactersHasBeenVisible ? "scale_character" : ""}`}/>
                        </div>
                        <p className="characters_desc" style={{marginTop: 0}} ref={charactersRef}>
                            Вы можете собирать комбинации героев в команде так, чтобы их способности дополняли и усиливали друг друга.
                        </p>
                        <p className="characters_desc">
                            Отравляйте врагов, лечите союзников, поглощайте урон и убивайте с одного выстрела — игра заточена под командное взаимодействие.
                        </p>
                    </div>

                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation={{ nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",}}
                        loop={true}
                        style={{width: '85vw', display: 'flex', justifyContent: "center", alignItems: 'center', marginBottom: 90,
                            marginTop: 90, marginLeft: "auto", marginRight: "auto"}}
                        slidesPerView={1}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: true
                        }}

                    >
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                        {battle_characters.map((battleCharacter, index) => (
                            <SwiperSlide key={index} className="slide_character">
                                <img className="character_img" src={battleCharacter.image} alt={battleCharacter.title} />
                                <div>
                                    <h1 className="slide_character_title">{battleCharacter.title}</h1>
                                    <p className="slide_character_desc">{battleCharacter.description}</p>
                                    <p className="slide_character_ability">
                                        <img src={unique_ability} className="unique_ability_icon" alt={battleCharacter.title}/>
                                        {battleCharacter.uniqueAbility}
                                    </p>
                                    <p className="slide_character_ability_desc">{battleCharacter.uniqueAbilityDescription}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div style={{position: "relative", fontFamily: "Rockwell, sans-serif"}}>
                        <img src={bg_title} alt={bg_title} className="battle_bg battle_modes_bg"/>
                        <div>
                            <div className="stat-card card-left">
                                <h1 className="large-number">14</h1>
                                <h1 className="description">карт</h1>
                            </div>
                            <div className="stat-card card-right">
                                <h1 className="large-number">4</h1>
                                <h1 className="description">режима</h1>
                            </div>
                            <div className="battle_arrow_down"></div>
                        </div>
                        <img src={bg_modes} className="battle_mode_background" alt={bg_modes}/>

                        <div className="battle_mode_card battle_mode_card_top_left">
                            <img src={mode_1} className="battle_mode_image"/>
                            <div className="battle_mode_title">Бой насмерть</div>
                        </div>

                        <div className="battle_mode_card battle_mode_card_top_right">
                            <img src={mode_2} className="battle_mode_image"/>
                            <div className="battle_mode_title">Контрольная точка</div>
                        </div>

                        <div className="battle_mode_card battle_mode_card_bottom_left">
                            <img src={mode_3} className="battle_mode_image"/>
                            <div className="battle_mode_title">Одна жизнь</div>
                        </div>

                        <div className="battle_mode_card battle_mode_card_bottom_right">
                            <img src={mode_4} className="battle_mode_image"/>
                            <div className="battle_mode_title">Захват территории</div>
                        </div>
                    </div>

                    <div>
                        <h1 className="characters_title all_characters_title" >ВСЛЕННАЯ ГЕРОЕВ</h1>
                        <div className="all_characters_bg">
                            <img src={character_all} alt="character_all" className="character_all_img"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BattleGames;