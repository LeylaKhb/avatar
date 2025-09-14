import bell from "../static/bell.svg";
import React from "react";

const WinterPrice = () => {
    return (
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
                                <span style={{marginTop: 5}}>1 час</span>
                            </div>
                        </td>
                        <td>
                            <div className="closed-games-row">
                                <span style={{fontWeight: 600}}>9000₽</span>
                                <span style={{marginTop: 5}}>2 часа</span>
                            </div>
                        </td>
                        <td>
                            <div className="closed-games-row">
                                <span style={{fontWeight: 600}}>12000₽</span>
                                <span style={{marginTop: 5}}>3 часа</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style={{backgroundColor: '#e69e19', fontWeight: 600}}>ПТ-ВС</td>
                        <td style={{fontWeight: 600}}>700₽/чел</td>
                        <td>
                            <div className="closed-games-row">
                                <span style={{fontWeight: 600}}>7000₽</span>
                                <span style={{marginTop: 5}}>1 час</span>
                            </div>
                        </td>
                        <td>
                            <div className="closed-games-row">
                                <span style={{fontWeight: 600}}>11000₽</span>
                                <span style={{marginTop: 5}}>2 часа</span>
                            </div>
                        </td>
                        <td>
                            <div className="closed-games-row">
                                <span style={{fontWeight: 600}}>15000₽</span>
                                <span id="contacts" style={{marginTop: 5}}>3 часа</span>
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
                        <span style={{fontWeight: 600}}>5000₽</span> <span>1 час</span>
                    </div>
                    <div className="price-row">
                        <span style={{fontWeight: 600}}>9000₽</span> <span>2 часа</span>
                    </div>
                    <div className="price-row">
                        <span style={{fontWeight: 600}}>12000₽</span> <span>3 часа</span>
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
                        <span style={{fontWeight: 600}}>7000₽</span> <span>1 час</span>
                    </div>
                    <div className="price-row">
                        <span style={{fontWeight: 600}}>11000₽</span> <span>2 часа</span>
                    </div>
                    <div className="price-row">
                        <span style={{fontWeight: 600}}>15000₽</span> <span>3 часа</span>
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
    )
}

export default WinterPrice;