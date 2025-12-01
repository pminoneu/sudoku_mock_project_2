import React from "react";

export default function Scoreboard() {
    return (
        <>
            <div className="title bebas-neue-regular">
                <h1>Highest Scores</h1>
            </div>
            <div className="score_box">
                <span className="left-text">Mary</span>
                <span className="right-text">90 pts</span>
            </div>
            <div className="score_box">
                <span className="left-text">Joe</span>
                <span className="right-text">90 pts</span>
            </div>
            <div className="sidenav bebas-neue-regular sidenav-font">
                <a href="https://pminoneu.github.io/sudokumockpage/index">Home</a>
                <a href="https://pminoneu.github.io/sudokumockpage/login_page">Login</a>
                <a href="https://pminoneu.github.io/sudokumockpage/select_game_page/">Play</a>
                <a href="https://pminoneu.github.io/sudokumockpage/rules/">Rules</a>
                <a className="active" href="https://pminoneu.github.io/sudokumockpage/scoreboard/">Scoreboard</a>
            </div>
        </>
    );
}