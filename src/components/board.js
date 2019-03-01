import React from 'react';
import GamePiece from './game-piece';
import '../styles/board.css';

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="Board">
                <div className="position pos1"></div>
                <div className="position pos2"></div>
                <div className="position pos3"></div>
                <div className="position pos4"></div>
                <div className="position pos5"></div>
                <div className="position pos6"></div>
                <div className="position pos7"></div>
                <div className="position pos8"></div>
                <div className="position pos9"></div>
            </div>

        );
    }
}