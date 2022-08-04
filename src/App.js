import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Main from "./Pages/Main";
import Sudoku from "./Pages/Sudoku";
import './App.scss';

function App() {
    return (
        <div className="App">
            <Router>
                <header className="App-header">
                    <nav>
                        <ul>
                            <li><Link to={"/"}>Kezdőoldal</Link></li>
                            <li><Link to={"/sudoku"}>Sudoku</Link></li>
                        </ul>
                    </nav>
                </header>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/sudoku" element={<Sudoku />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
