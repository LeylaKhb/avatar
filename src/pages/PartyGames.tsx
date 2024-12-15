import React, {useEffect, useRef, useState} from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';
import party_1 from "../static/party/party_1.png";
import party_2 from "../static/party/party_2.png";
import party_3 from "../static/party/party_3.png";
import party_4 from "../static/party/party_4.png";
import party_5 from "../static/party/party_5.png";
import party_6 from "../static/party/party_6.png";
import party_7 from "../static/party/party_7.png";
import party_8 from "../static/party/party_8.png";
import party_title from "../static/party/party_title.png";
import party_title_2 from "../static/party/party_title_2.png";
import party_family from "../static/party/party_family.png";
import bg_yellow from "../static/party/bg-yellow.svg";
import arrow_down from "../static/party/arrow-down.webp";
import useOnScreen from "../hooks/useIntersection";
import "../styles/party.css";
import PartyGameBlock from "../components/party/PartyGameBlock";

const PartyGames: React.FC = () => {
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

    return (
        <div style={{width: '100%', height: '90vh', display: open ? "initial" : "none"}}>
            <HelmetProvider>
                <Helmet
                    title="Party Games"
                />
            </HelmetProvider>
            <div className="page_content">
                <div style={{marginTop: 100}}>
                    <div>
                        <img src={bg_yellow} alt="bg_yellow" className="bg_yellow"/>
                        <div className={hasBeenVisible ? "visible" : "hidden_bottom"}
                             style={{width: "100%", position: "relative"}}
                             ref={titleRef}>
                            <img src={party_title} alt="girl" className="img_girl"/>
                            <img src={party_title_2} alt="team" className="img_team"/>
                            <h1 className="title_party">ВСЕЛЕННАЯ <br/> AVATAR PARTY GAMES</h1>
                        </div>
                        <img src={party_family} alt="party_family" className="party_family"/>
                        <img src={arrow_down} alt="arrow" className="arrow_down"/>
                    </div>
                    <PartyGameBlock title={"СПАСИ ПИНГВИНОВ"} img={party_1} right={false}
                                    firstParagraph={[
                                        {
                                            text: "Непослушные пингвины совсем отбились от рук и не хотят идти домой. Вы грациозно передвигаетесь по льду, не боитесь холода, а всё ради чего – чтобы спасти этих милых птичек.",
                                            bold: false
                                        }
                                    ]}
                                    secondParagraph={[
                                        {
                                            text: "Привлечь пингвинчиков можно только самым вкусным лакомством – свежей рыбой. ",
                                            bold: true
                                        },
                                        {
                                            text: "Она уже у вас в руках. Ищите пингвинов и заманивайте в дом.",
                                            bold: false
                                        },
                                    ]}
                                    thirdParagraph={[
                                        {
                                            text: "Любовь птиц к рыбке переходит все границы, и они спокойно идут за игроками другой команды.",
                                            bold: false
                                        },
                                        {
                                            text: " Спасти как можно больше пингвинов – только ваша задача.",
                                            bold: true
                                        },
                                        {
                                            text: " Станьте повелителем антарктических пушистиков.",
                                            bold: false
                                        },
                                    ]}/>

                    <PartyGameBlock title={"КОМАНДНАЯ РЫБАЛКА"} img={party_2} right={true}
                                    firstParagraph={[
                                        {
                                            text: "Рыбалка мечты выглядит именно так: бескрайнее море и десятки рыбок, снующих под ногами. Они так и целятся в сачок.",
                                            bold: false
                                        },
                                        {
                                            text: " Вы – лучший рыбак этого побережья.",
                                            bold: true
                                        },
                                        {
                                            text: " Рассекайте морские волны в поисках улова.",
                                            bold: false
                                        },
                                    ]}
                                    secondParagraph={[
                                        {
                                            text: "Будьте начеку – вместе с безобидными рыбками на дне прячутся ядовитые существа.",
                                            bold: true
                                        },
                                        {
                                            text: " Они тоже не прочь оказаться в вашем сачке, ужалив как следует! Наберитесь храбрости, внимательности и вперёд – ставить рекорды. Докажите, что только вы сможете поймать больше всех. Ведь есть и другие любители рыбалки.",
                                            bold: false
                                        },
                                    ]}
                                    thirdParagraph={[]}/>
                    <PartyGameBlock title={"ХРАНИТЕЛЬ ОГНЯ"} img={party_3} right={false}
                                    firstParagraph={[
                                        {
                                            text: "Ночь, только звёздное небо, выглядывают тёмные верхушки пальм. В полумраке вы пробираетесь по лабиринту с важной миссией – сохранить огонь и разжечь все факелы.",
                                            bold: false
                                        },
                                        {
                                            text: " Хранитель – вот ваше призвание.",
                                            bold: true
                                        }
                                    ]}
                                    secondParagraph={[
                                        {
                                            text: "Огонь освещает всё больше пространства, но вдруг все старания становятся бессмысленными. Хитрые другие хранители огня идут по следу, присваивают себе добытое пламя.",
                                            bold: false
                                        },
                                    ]}
                                    thirdParagraph={[
                                        {
                                            text: "Не сдавайтесь!",
                                            bold: false
                                        },
                                        {
                                            text: " У вас есть огнетушитель – тушите чужой огонь, разжигайте свой!",
                                            bold: true
                                        },
                                    ]}/>
                    <PartyGameBlock title={"БИТВА КРАСОК"} img={party_4} right={true}
                                    firstParagraph={[
                                        {
                                            text: "Хватит серости, настало время для ярких красок. Представьте, как было бы круто прогуливаться по городу и быть художником. Тусклая дорожка вмиг превращается в красочный островок. Как?",
                                            bold: false
                                        },
                                        {
                                            text: " Всё просто – у вас в руках чудо-краскомёт. Бам-бам-бам и всё закрашено.",
                                            bold: true
                                        }
                                    ]}
                                    secondParagraph={[
                                        {
                                            text: "Но аккуратнее, вы такой не один. По городу гуляет много людей, у которых тоже есть краскомёты. Им не нравится это цветовое решение. Они хотят перекрасить всё по-своему, даже вас.",
                                            bold: false
                                        },
                                    ]}
                                    thirdParagraph={[
                                        {
                                            text: "Прячьтесь от красочных выстрелов под зонтиком и закрашивайте в ответ всё, до чего дотронулись краски соперников.",
                                            bold: true
                                        },
                                    ]}/>
                    <PartyGameBlock title={"ПОДЗАМЕЛЬЕ АЛМАЗОВ"} img={party_5} right={false}
                                    firstParagraph={[
                                        {
                                            text: "Вы отправляетесь на поиски ценного клада, как кладоискатели в приключенческих историях. Найти алмазы, спрятанные в стенах подземелья, будет непросто. Но вы готовы к любым сложностям. Вы уже видите яркие отблески драгоценных камней.",
                                            bold: false
                                        },
                                    ]}
                                    secondParagraph={[
                                        {
                                            text: "Придётся много копать, чтобы добыть заветный клад. Опережать других искателей – они изо всех сил пытаются забрать все алмазы.",
                                            bold: true
                                        },
                                        {
                                            text: " Раз удар… два…три… кто же сумеет отыскать сокровища?",
                                            bold: false
                                        },
                                    ]}
                                    thirdParagraph={[]}/>
                    <PartyGameBlock title={"БИТВА ЗА УРОЖАЙ"} img={party_6} right={true}
                                    firstParagraph={[
                                        {
                                            text: "Пока вы засеиваете огород тыквами, кто-то пытается вас обхитрить и посадить арбузы. Да как он смеет!",
                                            bold: false
                                        },
                                        {
                                            text: " Скорее берите в руки подручные инструменты и вперёд выращивать свой урожай.",
                                            bold: true
                                        },
                                    ]}
                                    secondParagraph={[
                                        {
                                            text: "Ловкость и быстрота рук, точно никакого мошенничества, только честная битва. Кто самый лучший фермер? Покажет время.",
                                            bold: false
                                        },
                                        {
                                            text: " Не дайте сопернику сажать, что вздумается, на вашей земле.",
                                            bold: true
                                        },
                                        {
                                            text: " Но помните, пока вы сеете тыквы, арбузов становится всё больше.",
                                            bold: false
                                        },
                                    ]}
                                    thirdParagraph={[]}/>
                    <PartyGameBlock title={"АРБАЛЕТНЫЙ БОЙ"} img={party_7} right={false}
                                    firstParagraph={[
                                        {
                                            text: "Вы оказались на карте, где у каждого игрока в руках есть арбалет! А через секунду вас уже задело выстрелом. Нет времени объяснять, прячемся за ближайшим укрытием и стараемся понять, откуда прилетела стрела. Пока врага вроде не видно. Но вы видите рядом с собой яблоки, которые кто-то разбросал по всей карте.",
                                            bold: false
                                        },
                                    ]}
                                    secondParagraph={[
                                        {
                                            text: "Отличный повод быстро потренироваться в меткости, а после вступить в настоящий лучный бой и отправить суппостата на респаун.",
                                            bold: true
                                        },
                                        {
                                            text: " Добейтесь победы любой ценой и покажите, кто здесь самый меткий стрелок.",
                                            bold: false
                                        },
                                    ]}
                                    thirdParagraph={[
                                        {
                                            text: "Сосредоточьтесь! Цельтесь в яблоки и в соперника – так вы придёте к победе.",
                                            bold: true
                                        },
                                    ]}/>
                    <PartyGameBlock title={"РЕАКТИВНЫЙ БОКС"} img={party_8} right={true}
                                    firstParagraph={[
                                        {
                                            text: "Вы когда-нибудь держали в руках пистолет, выстреливающий боксёрскими перчатками? Они летают как самые настоящие ракеты. Один удар и полный нокаут. Вы, как супермен, такой же мощный и непробиваемый.",
                                            bold: false
                                        },
                                    ]}
                                    secondParagraph={[
                                        {
                                            text: "Противник прячется за укрытиями, нужно только прицелиться и летающая реактивная перчатка всё сделает за вас. Раз удар, два…Осторожнее! За вами следят и стреляют в ответ.",
                                            bold: false
                                        },
                                    ]}
                                    thirdParagraph={[
                                        {
                                            text: "Для вас нет препятствий – даже каменная стена не выстоит против такого оружия.",
                                            bold: false
                                        },
                                        {
                                            text: " Поставленная задача – выследить противника и отправить его в нокаут.",
                                            bold: true
                                        },
                                    ]}/>
                </div>
            </div>
        </div>
    )
}

export default PartyGames;

