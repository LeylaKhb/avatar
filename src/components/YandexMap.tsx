import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';
import "../App.css"
import React from "react";

const YandexMap: React.FC<{}> = () => {
    return (
        <YMaps>
            <Map
                defaultState={{
                    center: [56.169072, 50.897412],
                    zoom: 16,
                    controls: ["zoomControl", "fullscreenControl"],
                }}
                modules={["control.ZoomControl", "control.FullscreenControl", 'geoObject.addon.balloon']}
                width={'100%'}
                height={300}
            >
                <Placemark
                    defaultGeometry={[56.169072, 50.897412]}
                    options={{}}
                    properties={{
                        hintContent: '<b> Я появляюсь при наведении на метку </b>',
                    }}
                />
            </Map>
        </YMaps>
    )
};

export default YandexMap;
