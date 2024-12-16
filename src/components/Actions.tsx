import home_actions_1 from "../static/home_actions_1.webp";
import home_actions_2 from "../static/home_actions_2.webp";
import home_actions_3 from "../static/home_actions_3.webp";
import home_actions_4 from "../static/home_actions_4.webp";
import React, {useEffect, useRef, useState} from "react";
import useOnScreen from "../hooks/useIntersection";

const Actions: React.FC = () => {
    const firstParagraphRef = useRef<HTMLDivElement>(null);
    const isFirstParagraphOnScreen = useOnScreen(firstParagraphRef);
    const [firstParagraphHasBeenVisible, setFirstParagraphHasBeenVisible] = useState(false);
    useEffect(() => {
        if (isFirstParagraphOnScreen && !firstParagraphHasBeenVisible) {
            setFirstParagraphHasBeenVisible(true);
        }
    }, [isFirstParagraphOnScreen, firstParagraphHasBeenVisible]);
    
    const secondParagraphRef = useRef<HTMLDivElement>(null);
    const isSecondParagraphOnScreen = useOnScreen(secondParagraphRef);
    const [secondParagraphHasBeenVisible, setSecondParagraphHasBeenVisible] = useState(false);
    useEffect(() => {
        if (isSecondParagraphOnScreen && !secondParagraphHasBeenVisible) {
            setSecondParagraphHasBeenVisible(true);
        }
    }, [isSecondParagraphOnScreen, secondParagraphHasBeenVisible]);

    const thirdParagraphRef = useRef<HTMLDivElement>(null);
    const isThirdParagraphOnScreen = useOnScreen(thirdParagraphRef);
    const [thirdParagraphHasBeenVisible, setThirdParagraphHasBeenVisible] = useState(false);
    useEffect(() => {
        if (isThirdParagraphOnScreen && !thirdParagraphHasBeenVisible) {
            setThirdParagraphHasBeenVisible(true);
        }
    }, [isThirdParagraphOnScreen, thirdParagraphHasBeenVisible]);

    const fourthParagraphRef = useRef<HTMLDivElement>(null);
    const isFourthParagraphOnScreen = useOnScreen(fourthParagraphRef);
    const [fourthParagraphHasBeenVisible, setFourthParagraphHasBeenVisible] = useState(false);
    useEffect(() => {
        if (isFourthParagraphOnScreen && !fourthParagraphHasBeenVisible) {
            setFourthParagraphHasBeenVisible(true);
        }
    }, [isFourthParagraphOnScreen, fourthParagraphHasBeenVisible]);
    
    return (
        <div style={{width: '100%', display: "flex", alignItems: "center", justifyContent: "center", flexFlow: "column"}}>
            <h1 className="home_title block_2">НОВЫЙ РАЗВЛЕКАТЕЛЬНЫЙ <br/> VR-ЦЕНТР ПРЕДЛАГАЕТ</h1>
            <div className="home_actions">
                <div className={`home_actions_div ${firstParagraphHasBeenVisible? "visible" : "hidden_bottom"}`}>
                    <img src={home_actions_1} className="home_actions_img"/>
                    <div className="home_actions_desc" ref={firstParagraphRef}>Провести время с семьей и друзьями</div>
                </div>
                <div className={`home_actions_div ${secondParagraphHasBeenVisible? "visible" : "hidden_bottom"}`}>
                    <img src={home_actions_2} className="home_actions_img"/>
                    <div className="home_actions_desc" ref={secondParagraphRef}>Отметить день рождения</div>
                </div>
                <div className={`home_actions_div ${thirdParagraphHasBeenVisible ? "visible" : "hidden_bottom"}`}>
                    <img src={home_actions_3} className="home_actions_img"/>
                    <div className="home_actions_desc" ref={thirdParagraphRef}>Провести корпоратив или вечеринку</div>
                </div>
                <div className={`home_actions_div ${fourthParagraphHasBeenVisible? "visible" : "hidden_bottom"}`}>
                    <img src={home_actions_4} className="home_actions_img"/>
                    <div className="home_actions_desc" id="games" ref={fourthParagraphRef}>Организовать досуг для любителей vr-игр</div>
                </div>
            </div>
        </div>
    )
}

export default Actions;