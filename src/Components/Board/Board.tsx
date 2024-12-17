import React, { JSX } from 'react'
import './Board.css'
import Square from '../Square/Square.tsx'

interface Props {
    isXNext: boolean
    squares: string[]
    onPlay: (i: number) => void
}

const Board : React.FC<Props> = ({isXNext, squares, onPlay}) : JSX.Element => {
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (isXNext ? 'X' : 'O');
    }

    function handleClick(i) {
        if (squares[i] != null || winner) {
            return;
        }

        const newSquares = squares.slice();
        if (isXNext) {
            newSquares[i] = 'X';
        }
        else {
            newSquares[i] = 'O';
        }
        onPlay(newSquares);
    }

    return (
        <div>
            <div className="status">{status}</div>
            <div className="row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </div>
    )
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default Board