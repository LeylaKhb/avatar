import React, {useEffect, useRef, useState} from "react";
import useOnScreen from "../../hooks/useIntersection";
import Typed from "typed.js";

interface PartyGameBlockProps {
    title: string;
    img: string;
    right: boolean;
    firstParagraph: { text: string; bold: boolean }[];
    secondParagraph: { text: string; bold: boolean }[];
    thirdParagraph: { text: string; bold: boolean }[];
}

const PartyGameBlock: React.FC<PartyGameBlockProps> = ({
                                                           title,
                                                           img,
                                                           right,
                                                           firstParagraph,
                                                           secondParagraph,
                                                           thirdParagraph
                                                       }) => {
    const titleRef = useRef<HTMLDivElement>(null);
    const isTitleOnScreen = useOnScreen(titleRef);
    const [titleHasBeenVisible, setTitleHasBeenVisible] = useState(false);
    useEffect(() => {
        if (isTitleOnScreen && !titleHasBeenVisible) {
            setTitleHasBeenVisible(true);
        }
    }, [isTitleOnScreen, titleHasBeenVisible]);

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

    const el = useRef<HTMLDivElement>(null);
    const typedInstance = useRef<Typed | null>(null);

    useEffect(() => {
        if (isTitleOnScreen && el.current && !typedInstance.current) {
            typedInstance.current = new Typed(el.current, {
                strings: [title],
                typeSpeed: 50,
                showCursor: false,
            });
        }

        return () => {
        };
    }, [isTitleOnScreen]);

    return (
        <div className={`party_game_block ${right ? "move_right_block" : "move_left_block"}`}>
            <div>
                <div className={`party_game_circle ${right ? "move_right_circle" : "move_left_circle"}`}>
                    <img className="party_game_img" src={img} alt="party_game_img"
                         style={{left: right ? -150 : 150}}/>
                </div>
            </div>
            <div className="party_game_desc">
                <h1 className="party_game_title" ref={el}></h1>
                <p ref={titleRef} className={titleHasBeenVisible ? "visible" : "hidden_bottom"}>
                    {firstParagraph.map((part, index) =>
                        part.bold ? (
                            <b key={index}>{part.text}</b>
                        ) : (
                            <span key={index}>{part.text}</span>
                        )
                    )}
                </p>
                <p ref={secondParagraphRef} className={secondParagraphHasBeenVisible ? "visible" : "hidden_bottom"}>
                    {secondParagraph.map((part, index) =>
                        part.bold ? (
                            <b key={index}>{part.text}</b>
                        ) : (
                            <span key={index}>{part.text}</span>
                        )
                    )}
                </p>
                <p ref={thirdParagraphRef} className={thirdParagraphHasBeenVisible ? "visible" : "hidden_bottom"}>
                    {thirdParagraph.map((part, index) =>
                        part.bold ? (
                            <b key={index}>{part.text}</b>
                        ) : (
                            <span key={index}>{part.text}</span>
                        )
                    )}
                </p>
            </div>
        </div>
    )
}

export default PartyGameBlock;