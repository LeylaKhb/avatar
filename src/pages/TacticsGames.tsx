import React, {useEffect, useRef, useState} from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';
import "../styles/tactics.css"
import {CustomCursor} from '@feverus/react-custom-cursor'
import '@feverus/react-custom-cursor/dist/style.css'

import tactics_title_bg from "../static/tactics/tactics_title_bg.webp"
import tactics_about from "../static/tactics/tactics_about.webp"
import tactics_games_title from "../static/tactics/tactics_games_title.png";
import tactics_mode_1 from "../static/tactics/tactics_mode_1.webp";
import tactics_mode_2 from "../static/tactics/tactics_mode_2.webp";
import tactics_mode_3 from "../static/tactics/tactics_mode_3.webp";
import tactics_mode_4 from "../static/tactics/tactics_mode_4.webp";
import tactics_modes_bg from "../static/tactics/tactics_modes_bg.webp"
import useOnScreen from "../hooks/useIntersection";
import ShuffleText from "react-shuffle-text";

const TacticsGames: React.FC = () => {
    const myCursor = <div className="aim-crosshair"></div>

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

    const aboutRef = useRef<HTMLDivElement>(null);
    const isAboutOnScreen = useOnScreen(aboutRef);
    const [aboutHasBeenVisible, setAboutHasBeenVisible] = useState(false);
    useEffect(() => {
        if (isAboutOnScreen && !aboutHasBeenVisible) {
            setAboutHasBeenVisible(true);
        }
    }, [isAboutOnScreen, aboutHasBeenVisible]);

    const modesRef = useRef<HTMLDivElement>(null);
    const isModesOnScreen = useOnScreen(modesRef);
    const [modesHasBeenVisible, setModesHasBeenVisible] = useState(false);
    useEffect(() => {
        if (isModesOnScreen && !modesHasBeenVisible) {
            setModesHasBeenVisible(true);
        }
    }, [isModesOnScreen, modesHasBeenVisible]);

    return (
        <div style={{width: '100%', height: '90vh', display: open ? "initial" : "none"}}>
            <HelmetProvider>
                <Helmet
                    title="Tactics Games"
                />
            </HelmetProvider>
            <div className="page_content">
                <div style={{marginTop: 30}}>
                    <div style={{width: '100vw', height: '96vh'}} ref={titleRef}
                         className="tactics_title_div">
                        <img src={tactics_title_bg} className="tactics_title_bg"/>
                        <div className={hasBeenVisible ? "visible" : "hidden_bottom"}
                             style={{height: '100%', width: "100%", position: "absolute", top: 0}}>
                            <img src={tactics_games_title} className="tactics_games_title"/>
                            <p className="tactics_games_desc">Тактический командный шутер с реалистичными моделями
                                оружия, звуками и окружением...</p>
                        </div>
                    </div>
                    <div style={{position: "relative"}} className="tactics_about_div">
                        {aboutHasBeenVisible &&
                          <ShuffleText content="ОБ ИГРЕ"/>
                        }
                        <img src={tactics_about} className="tactics_about_bg"/>
                        <p className="tactics_about_desc" ref={aboutRef}>
                            Эта игра для тех кто любит хардкорные шутеры по типу: warzone, counter strike 2, valorant.
                            Никакой мультяшной графики или низкополигональных моделек. Только реализм.</p>
                    </div>

                    <CustomCursor cursor={myCursor}>
                        <div style={{position: "relative"}} className="tactics_modes_div">
                            {modesHasBeenVisible &&
                              <ShuffleText content="РЕЖИМЫ СПЕЦОПЕРАЦИИ"/>
                            }
                            <img src={tactics_modes_bg} className="tactics_modes_bg"/>
                            <div className="tactic-modes__blocks">
                                <div ref={modesRef} className="tactics_mode_block">
                                    <div className="tactics_mode_div">
                                        <img src={tactics_mode_1} className="tactics_mode_bg"/>
                                        <h1 className="tactics_mode_title">ОДНА ЖИЗНЬ</h1>
                                        <p className="tactics_mode_desc">
                                            Задача уничтожить команду соперника, отличается от режима бой насмерть тем,
                                            что здесь нет возрождений.
                                        </p>
                                    </div>
                                </div>
                                <div className="tactics_mode_block">
                                    <div className="tactics_mode_div">
                                        <img src={tactics_mode_2} className="tactics_mode_bg"/>
                                        <h1 className="tactics_mode_title">БОЙ НАСМЕРТЬ</h1>
                                        <p className="tactics_mode_desc">
                                            Задача уничтожить команду соперника, но если ты умер, то ты можешь пойти на
                                            базу и возродится.
                                        </p>
                                    </div>
                                </div>
                                <div className="tactics_mode_block">
                                    <div className="tactics_mode_div">
                                        <img src={tactics_mode_3} className="tactics_mode_bg"/>
                                        <h1 className="tactics_mode_title">
                                            ГОНКА ВООРУЖЕНИЙ
                                        </h1>
                                        <p className="tactics_mode_desc">
                                            Матч, в котором все игроки стартуют с одинаковым оружием и с каждым
                                            убийством, игрок получает новое оружие.
                                        </p>
                                    </div>
                                </div>
                                <div className="tactics_mode_block">
                                    <div className="tactics_mode_div">
                                        <img src={tactics_mode_4} className="tactics_mode_bg"/>
                                        <h1 className="tactics_mode_title">УСТАНОВКА БОМБЫ</h1>
                                        <p className="tactics_mode_desc">
                                            Цель атакующих установить бомбу на контрольной точке. Цель защищающихся не
                                            дать заложить бомбу или обезвредить её.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CustomCursor>
                </div>
            </div>
        </div>
    )
}

export default TacticsGames;

