import React from 'react';

export function GamePiece(props) {
    if(props.piece === "x") {
        return "X";
    }
    else if(props.piece === "o") {
        return "O";
    }
    else {
        return "?"
    }
}