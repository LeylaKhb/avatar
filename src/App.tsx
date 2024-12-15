import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import PartyGames from "./pages/PartyGames";
import BattleGames from "./pages/BattleGames";
import ZombyGames from "./pages/ZombyGames";
import TacticsGames from "./pages/TacticsGames";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/games/party" element={<PartyGames/>}/>
                    <Route path="/games/battle" element={<BattleGames/>}/>
                    <Route path="/games/zombies" element={<ZombyGames/>}/>
                    <Route path="/games/tactics" element={<TacticsGames/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
