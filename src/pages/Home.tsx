import React, {useEffect, useRef, useState} from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';
import "../styles/home.css";
import home_tactics from "../static/home_tactics.webp"
import home_battle from "../static/home_battle.webp"
import home_zombies from "../static/home_zombies.webp"
import home_party from "../static/home_party.webp"
import home_img from "../static/home_img.webp";
import bell from "../static/bell.svg";
import {Link} from "react-router-dom";
import YandexMap from "../components/YandexMap";
import Typed from "typed.js";
import SocialNetwork from "../components/SocialNetwork";
import Popup from "../components/Popup";
import Actions from "../components/Actions";

const Home: React.FC<{}> = () => {
    const el = useRef<HTMLDivElement>(null);
    const typedInstance = useRef<Typed | null>(null);
    const [telError, setTelError] = useState("");
    const [telInput, setTelInput] = useState("");
    const [nameInput, setNameInput] = useState("");
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    function setPopupTrue() {
        setIsPopupVisible(true);
        document.body.style.overflow = "hidden";
    }

    function setPopupFalse() {
        setIsPopupVisible(false);
        document.body.style.overflow = "scroll";
    }

    useEffect(() => {
        typedInstance.current = new Typed(el.current, {
            strings: ["AVATAR ARENA"],
            typeSpeed: 50,
            showCursor: false,
        });

        return () => {
        };
    });

    function handleNameInput(e: React.ChangeEvent<HTMLInputElement>) {
        let inputValue = e.target.value;
        let lastChar = inputValue.charAt(inputValue.length - 1);
        if (!(/^[a-zA-Zа-яА-Я-]+$/.test(lastChar))) {
            e.target.value = inputValue.slice(0, -1);
        }
        setNameInput(e.target.value);
    }

    function handleContactsForm(event: React.FormEvent) {
        event.preventDefault();

        fetch("https://api.telegram.org/bot7798352943:AAF3A3Zy71ubXYwJQ8YM1O1oAPv_ZHBBVWk/sendMessage?chat_id=1639215243&text="
            + "Имя: " + nameInput + ", Телефон: " + telInput)
            .then(function () {
                setSuccess(true);
            })
            .catch(function (error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                setError(true);
                throw error;
            });

    }

    function handleTelInput(e: React.ChangeEvent<HTMLInputElement>) {
        let inputValue = e.target.value;
        let lastChar = inputValue.charAt(inputValue.length - 1);
        if (isNaN(Number(lastChar)) || (lastChar === ' ') || (inputValue.length === 16)) {
            e.target.value = inputValue.slice(0, -1);
            if (inputValue.endsWith(") "))
                e.target.value = inputValue.slice(0, -2);
            return;
        }

        if (inputValue.length === 1)
            e.target.value = '(' + inputValue;
        if (inputValue.length === 5)
            e.target.value = inputValue.slice(0, 4) + ") " + lastChar;
        if (inputValue.length === 10)
            e.target.value = inputValue.slice(0, -1) + "-" + lastChar;
        if (inputValue.length === 13)
            e.target.value = inputValue.slice(0, -1) + "-" + lastChar;
        setTelInput(e.target.value);
        setTelError("");
    }

    return (
        <div style={{width: '100%', height: '90vh',}}>
            <HelmetProvider>
                <Helmet
                    title="Avatar Arena"
                />
            </HelmetProvider>
            <div className="page_content">
                <div style={{
                    marginTop: 60,
                    width: '100vw',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexFlow: "column"
                }}>
                    <div style={{width: '100%', textAlign: "center"}}>
                        <h1 ref={el} className="home_title"></h1>
                        <h2 className="home_desc">ПЕРВАЯ В КУКМОРЕ <br/> АРЕНА ВИРУАЛЬНОЙ РЕАЛЬНОСТИ</h2>
                        <button className="consultation_button" onClick={setPopupTrue}>Записаться онлайн</button>
                        <img src={home_img} className="home_img"/>
                    </div>
                    <Popup isVisible={isPopupVisible} setVisibleFalse={setPopupFalse}/>

                    <Actions/>
                    <div style={{
                        width: '100%',
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexFlow: "column"
                    }}>
                        <h1 className="home_title block_2">Наши игры</h1>
                        <div className="home_games">
                            <Link to="/games/party">
                                <div className="home_game party">
                                    <img src={home_party} className="home_game_img"/>
                                    <h1 className="home_game_title">PARTY GAMES</h1>
                                    <p className="home_game_titles">
                                        <span> Жанр: </span>
                                        <span> Возраст: </span>
                                        <span> Игры: </span>
                                        <span> Игроки: </span>
                                    </p>
                                    <p className="home_game_desc">
                                        <span>Casual</span>
                                        <span>c 5 лет</span>
                                        <span>8 мини-игр</span>
                                        <span>до 16 в игре</span>
                                    </p>
                                    <button className="home_game_button">Подробнее</button>
                                </div>
                            </Link>
                            <Link to="/games/battle">
                                <div className="home_game battle">
                                    <img src={home_battle} className="home_game_img"/>
                                    <h1 className="home_game_title">BATTLE GAMES</h1>
                                    <p className="home_game_titles">
                                        <span> Жанр: </span>
                                        <span> Возраст: </span>
                                        <span> Игры: </span>
                                        <span> Игроки: </span>
                                    </p>
                                    <p className="home_game_desc">
                                        <span>Action shooter</span>
                                        <span>c 9 лет</span>
                                        <span>14 игровых миров</span>
                                        <span>до 16 в игре</span>
                                    </p>
                                    <button className="home_game_button">Подробнее</button>
                                </div>
                            </Link>
                            <Link to="/games/zombies">
                                <div className="home_game zombies">
                                    <img src={home_zombies} className="home_game_img"/>
                                    <h1 className="home_game_title">ZOMBIES GAMES</h1>
                                    <p className="home_game_titles">
                                        <span> Жанр: </span>
                                        <span> Возраст: </span>
                                        <span> Игры: </span>
                                        <span> Игроки: </span>
                                    </p>
                                    <p className="home_game_desc">
                                        <span>Survival</span>
                                        <span>c 14 лет</span>
                                        <span>40 минут выживания</span>
                                        <span>до 16 в игре</span>
                                    </p>
                                    <button className="home_game_button">Подробнее</button>
                                </div>
                            </Link>
                            <Link to="/games/tactics">
                                <div className="home_game tactics">
                                    <img src={home_tactics} className="home_game_img"/>
                                    <h1 className="home_game_title">TACTICS GAMES</h1>
                                    <p className="home_game_titles">
                                        <span> Жанр: </span>
                                        <span> Возраст: </span>
                                        <span> Игры: </span>
                                        <span> Игроки: </span>
                                    </p>
                                    <p className="home_game_desc">
                                        <span>Tactic shooter</span>
                                        <span>c 14 лет</span>
                                        <span>15 видов оружия</span>
                                        <span>до 16 в игре</span>
                                    </p>
                                    <button className="home_game_button" id="price">Подробнее</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div style={{
                        width: '90%',
                        display: "flex",
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexFlow: "column"
                    }}>
                        <h1 className="home_title block_2">Цены</h1>
                        <div style={{width: '100%'}}>
                            <table className="price_table">
                                <tr>
                                    <th style={{backgroundColor: 'white'}}></th>
                                    <th>ОТКРЫТАЯ ИГРА</th>
                                    <th colSpan={3}>ЗАКРЫТАЯ ИГРА</th>
                                </tr>
                                <tr>
                                    <td style={{backgroundColor: '#e69e19', fontWeight: 600}}>ПН-ЧТ</td>
                                    <td style={{fontWeight: 600}}>500₽/чел</td>
                                    <td>
                                        <div className="closed-games-row">
                                            <span style={{fontWeight: 600}}>5000₽</span>
                                            <span style={{marginTop: 5}}>1-й час</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="closed-games-row">
                                            <span style={{fontWeight: 600}}>4000₽</span>
                                            <span style={{marginTop: 5}}>2-й час</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="closed-games-row">
                                            <span style={{fontWeight: 600}}>3000₽</span>
                                            <span style={{marginTop: 5}}>3-й час</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{backgroundColor: '#e69e19', fontWeight: 600}}>ПТ-ВС</td>
                                    <td style={{fontWeight: 600}}>700₽/чел</td>
                                    <td>
                                        <div className="closed-games-row">
                                            <span style={{fontWeight: 600}}>7000₽</span>
                                            <span style={{marginTop: 5}}>1-й час</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="closed-games-row">
                                            <span style={{fontWeight: 600}}>5000₽</span>
                                            <span style={{marginTop: 5}}>2-й час</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="closed-games-row">
                                            <span style={{fontWeight: 600}}>4000₽</span>
                                            <span id="contacts" style={{marginTop: 5}}>3-й час</span>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            <div className="price-container">
                                <div className="price-row" style={{backgroundColor: '#e69e19', fontWeight: 600}}>
                                    Понедельник-Четверг
                                </div>
                                <div className="price-row" style={{backgroundColor: "#A5A5A5"}}>
                                    <span style={{fontWeight: 600}}>ОТКРЫТАЯ ИГРА</span>
                                </div>
                                <div className="price-row">
                                    <span style={{fontWeight: 600}}>500₽/чел</span>
                                </div>
                                <div className="price-row" style={{backgroundColor: "#A5A5A5"}}>
                                    <span style={{fontWeight: 600}}>ЗАКРЫТАЯ ИГРА</span>
                                </div>
                                <div className="price-row">
                                    <span style={{fontWeight: 600}}>5000₽</span> <span>1-й час</span>
                                </div>
                                <div className="price-row">
                                    <span style={{fontWeight: 600}}>4000₽</span> <span>2-й час</span>
                                </div>
                                <div className="price-row">
                                    <span style={{fontWeight: 600}}>3000₽</span> <span>3-й час</span>
                                </div>
                                {/* Repeat for ПТ-ВС section */}
                                <div className="price-row" style={{backgroundColor: '#e69e19', fontWeight: 600}}>
                                    Пятница-Воскресенье
                                </div>
                                <div className="price-row" style={{backgroundColor: "#A5A5A5"}}>
                                    <span style={{fontWeight: 600}}>ОТКРЫТАЯ ИГРА</span>
                                </div>
                                <div className="price-row">
                                    <span style={{fontWeight: 600}}>700₽/чел</span>
                                </div>
                                <div className="price-row" style={{backgroundColor: "#A5A5A5"}}>
                                    <span style={{fontWeight: 600}}>ЗАКРЫТАЯ ИГРА</span>
                                </div>
                                <div className="price-row">
                                    <span style={{fontWeight: 600}}>7000₽</span> <span>1-й час</span>
                                </div>
                                <div className="price-row">
                                    <span style={{fontWeight: 600}}>5000₽</span> <span>2-й час</span>
                                </div>
                                <div className="price-row">
                                    <span style={{fontWeight: 600}}>4000₽</span> <span>3-й час</span>
                                </div>
                            </div>
                            <div style={{width: '90%', marginRight: '5%', marginLeft: '5%', marginTop: 20, boxSizing: "border-box"}}>
                                <div style={{display: "flex", flexFlow: "row"}}>
                                    <img src={bell} className="bell"/>
                                    <div className="bell_text">Лаунж-зона для вашего праздника, оборудованная столами,
                                        стульями, микроволновой печью, кулером и посудой в подарок!
                                    </div>
                                </div>
                                <div style={{display: "flex", flexFlow: "row", marginTop: 12}}>
                                    <img src={bell} className="bell"/>
                                    <div className="bell_text">Открытая игра: оплата идет за игрока, каждый платит сам
                                        за себя, к вам могут присоединиться другие участники
                                    </div>
                                </div>
                                <div style={{display: "flex", flexFlow: "row", marginTop: 12}}>
                                    <img src={bell} className="bell"/>
                                    <div className="bell_text">Закрытая игра: аренда площадки только для вашей компании. Фиксированная цена вне зависимости от количества участников
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="maps_block">
                        <h1 className="home_title block_2">Контакты</h1>
                        <div className="contacts_block">
                            <div className="contacts_row">
                                <div className="contact">
                                    Телефон:
                                    <br/>+7 (917) 257-54-66
                                </div>
                                <div className="contact">
                                    Адрес:
                                    <br/>г. Кукмор, ул. Магистральная, д. 65А
                                </div>
                            </div>
                            <SocialNetwork/>
                            <div className="contacts_questions">Остались вопросы? Свяжитесь с нами</div>
                            <form className="contacts_form" onSubmit={handleContactsForm}>
                                <div>
                                    <input required type="text" className="name_input" placeholder="Ваше имя"
                                           defaultValue={""} onInput={handleNameInput}/>
                                </div>
                                <div>
                                    <input required type="text" className="tel_input" placeholder="(999) 999-99-99"
                                           onInput={handleTelInput} defaultValue={""}/>
                                    <div className="form_error">{telError}</div>
                                    <span className="tel_span">+7</span>
                                </div>
                                <div>
                                    <button type="submit" className="contacts_button">Отправить</button>
                                </div>
                            </form>
                            {success && <div className="success">Ваша заявка отправлена</div>}
                            {error &&
                              <div className="error">Возникла ошибка при отправке заявки. Пожалуйста, свяжитесь с нами
                                по номеру <a href="tel:+79172575466" className="tel_link">+7 (917) 257-54-66</a></div>}
                        </div>
                        <YandexMap/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;

