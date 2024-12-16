import React, {useEffect, useRef, useState} from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';
import zombies_bg_2 from "../static/zombies/zombies_bg_2.webp";
import spider from "../static/zombies/spider.webp";
import zombie_bg_3 from "../static/zombies/zombie_bg_3.webp";
import all_zombies from "../static/zombies/all_zombies.webp";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation} from 'swiper/modules';
import "../styles/zombies.css";
import {zombies_slides} from "../text/zombies";

const ZombiesGames: React.FC = () => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setOpen(true), 500);
        return () => clearTimeout(timer);
    }, []);

    const [swiper, setSwiper] = useState<any>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const slideTo = (index: number) => {
        if (swiper)
            swiper.slideTo(index)
    };
    useEffect(() => {
        if (swiper) {
            swiper.on('slideChange', () => {
                setActiveIndex(swiper.activeIndex);
            });
        }
    }, [swiper]);

    return (
        <div style={{width: '100%', height: '90vh', display: open ? "initial" : "none"}}>
            <HelmetProvider>
                <Helmet
                    title="Zombies Games"
                />
            </HelmetProvider>
            <div className="page_content">
                <div style={{marginTop: 80}}>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        loop={true}
                        style={{
                            width: '100vw',
                            height: "90vh",
                            display: 'flex',
                            justifyContent: "center",
                            alignItems: 'center',
                        }}
                        slidesPerView={1}
                        autoplay={{
                            delay: 100,
                            disableOnInteraction: true
                        }}
                        speed={3000}
                        onSwiper={setSwiper}
                    >
                        {zombies_slides.map((zombie) => (
                            <SwiperSlide key={zombie.index} className="slide_zombies">
                                <img className="slide_zombie_bg_img" src={zombie.image} alt="slide_zombie_bg_img"/>
                                <div className="slide1_zombie_title">ZOMBIES GAMES</div>
                                <div className="slide_zombie_text">{zombie.text}</div>
                            </SwiperSlide>
                        ))}
                        <div className="zombies_slides_all">
                            {zombies_slides.map((zombie) => (
                                <img
                                    className={`all_slides_zombie_img ${activeIndex === zombie.index ? 'active' : ''}`}
                                    onClick={() => slideTo(zombie.index)}
                                    src={zombie.image}
                                    alt="slide_zombie_bg_img"/>

                            ))}
                        </div>
                    </Swiper>
                    <div className="zombies_block">
                        <img src={zombies_bg_2} className="zombies_bg_2"/>
                        <h2 className="zombies_block_title">Об игре</h2>
                        <p className="zombies_block_desc">
                            Игра представляет собой шутер от первого лица с элементами хоррора и
                            рассчитана на аудиторию 14+. Особенность игры в том, что игроки сражаются не друг против
                            друга, а против армии монстров. Ваша команда может быть от 2-х до 16-и человек.
                        </p>
                        <p className="zombies_block_desc" >
                            Игроков ждет 12 волн нападения различных тварей: зомби, черви, пауки, летающие головы,
                            огненные рыцари, приведения и мегабоссы. Уровень сложности повышается с каждой волной, а
                            также зависит от количества игроков. По мере прохождения игры вам будет предоставляться
                            более мощное оружие: от арбалетов до автоматов с турелями и минами.
                        </p>

                        <p className="zombies_block_desc zombies_block_desc_2" >
                            Проверьте свои нервы на прочность! Настолько ли вы бесстрашны, как думали?
                        </p>
                        <img src={spider} className="zombie_spider"/>
                    </div>

                        <div className="all_zombies_black_block">
                            <h1 className="all_zombies_title">
                                ощутите ужас, <br/> от которого стынет <br/> кровь в жилах!
                            </h1>
                        </div>
                        <div style={{position: "relative"}}>
                            <img src={zombie_bg_3} className="zombie_bg_3"/>
                            <img src={all_zombies} className="all_zombies"/>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default ZombiesGames;

