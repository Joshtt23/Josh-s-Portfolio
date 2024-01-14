"use client";
import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Modal,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { FaTimesCircle, FaCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const Square = ({ value, onClick }) => (
  <motion.button
    className="w-16 h-16 bg-blue-200 text-4xl font-bold border border-blue-500 pl-3 rounded-xl text-gray-900"
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
  >
    {value === "X" ? <FaTimesCircle /> : value === "O" ? <FaCircle /> : null}
  </motion.button>
);

function TikTakToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (board[index] || winner) {
      return;
    }

    const squares = [...board];
    squares[index] = "X";
    setBoard(squares);
    setXIsNext(false);
    setWinner(calculateWinner(squares));
  };

  const renderSquare = (index) => (
    <Square value={board[index]} onClick={() => handleClick(index)} />
  );

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
  };

  useEffect(() => {
    if (!xIsNext && winner === null) {
      const bestMove = findBestMove(board, "O");
      if (bestMove !== -1) {
        const squares = [...board];
        squares[bestMove] = "O";
        setBoard(squares);
        setXIsNext(true);
        setWinner(calculateWinner(squares));
      }
    }
  }, [xIsNext, board, winner]);

  return (
    <Card className="p-5 bg-gray-900 w-5/6 rounded-2xl mx-auto text-white">
      <div className="text-center mt-10">
        <CardHeader>
          <h1 className="text-4xl font-bold mb-4">Tic-Tac-Toe</h1>
          {winner !== null && (
            <div className="w-100 mb-5">
              <h2 className="text-2xl font-bold mb-4">
                {winner !== "tie" ? `Player ${winner} wins!` : "It's a draw!"}
              </h2>
              <button className="btn btn-primary text-blue-600" onClick={resetGame}>
                Play Again
              </button>
            </div>
          )}
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-3 gap-2">
            {Array(9)
              .fill(null)
              .map((_, index) => (
                <div key={index}>{renderSquare(index)}</div>
              ))}
          </div>
        </CardBody>
      </div>
    </Card>
  );
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
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  if (squares.every((square) => square !== null)) {
    return "tie";
  }

  return null;
}

function findBestMove(squares, player) {
  const availableMoves = [];
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] === null) {
      availableMoves.push(i);
    }
  }

  const bestMoves = [];
  let bestScore = player === "O" ? -Infinity : Infinity;

  for (let i = 0; i < availableMoves.length; i++) {
    const move = availableMoves[i];
    const newSquares = [...squares];
    newSquares[move] = player;

    const score = minimax(newSquares, 0, false);

    if (player === "O") {
      if (score > bestScore) {
        bestScore = score;
        bestMoves.length = 0;
        bestMoves.push(move);
      } else if (score === bestScore) {
        bestMoves.push(move);
      }
    } else {
      if (score < bestScore) {
        bestScore = score;
        bestMoves.length = 0;
        bestMoves.push(move);
      } else if (score === bestScore) {
        bestMoves.push(move);
      }
    }
  }

  return bestMoves.length > 0 ? bestMoves[0] : -1;
}

function minimax(squares, depth, isMaximizing) {
  const result = calculateWinner(squares);
  if (result !== null) {
    if (result === "tie") {
      return 0;
    }
    return isMaximizing ? -1 : 1;
  }

  const player = isMaximizing ? "O" : "X";

  let bestScore = isMaximizing ? -Infinity : Infinity;

  for (let i = 0; i < squares.length; i++) {
    if (squares[i] === null) {
      const newSquares = [...squares];
      newSquares[i] = player;
      const score = minimax(newSquares, depth + 1, !isMaximizing);
      bestScore = isMaximizing
        ? Math.max(score, bestScore)
        : Math.min(score, bestScore);
    }
  }

  return bestScore;
}

export default TikTakToe;
