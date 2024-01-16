"use client";
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";

function FlappyBird() {
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const birdRef = useRef(null);
  const canvasRef = useRef(null);

  const birdY = useRef(50);
  const birdJump = 25;
  const obstacleX = useRef(300);
  const obstacleWidth = 50;
  const gap = 200;
  const obstacleSpeed = 10;
  const gravity = 1.5;

  const startGame = () => {
    setGameOver(false);
    setScore(0);
    birdY.current = 50;
    obstacleX.current = 300;
    updateGameArea();
  };

  const jump = () => {
    if (!gameOver) {
      birdY.current -= birdJump;
    }
  };

  const handleTouch = () => {
    if (!gameOver) {
      jump();
    }
  };

  let frameCount = 0;
  let randomGap = 15;
  let birdX = 100;

  useEffect(() => {
    // Function to handle window resize events and update canvas width
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const canvasWidth = screenWidth * 0.8;
      const canvasHeight = canvasWidth * (3 / 4); // Maintain a 4:3 aspect ratio
      const canvas = canvasRef.current;

      // Update canvas size
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initialize canvas size
    handleResize();

    return () => {
      // Remove event listener on component unmount
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const updateGameArea = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    if (!gameOver) {
      context.clearRect(0, 0, canvas.width, canvas.height);

      if (frameCount < 120) {
        context.fillStyle = "black";
        context.font = "30px Arial";
        context.fillText("Get Ready", canvas.width / 2 - 70, canvas.height / 2);
      } else {
        obstacleX.current -= obstacleSpeed;

        if (birdY.current + 40 > canvas.height || birdY.current < 0) {
          endGame();
          return;
        }

        if (
          birdX + 40 > obstacleX.current &&
          birdX < obstacleX.current + obstacleWidth &&
          (birdY.current < randomGap || birdY.current + 40 > randomGap + gap)
        ) {
          endGame();
          return;
        }

        // Increase score when passing an obstacle
        if (obstacleX.current + obstacleWidth < birdX) {
          if (!obstacleX.passed) {
            setScore((prevScore) => prevScore + 1);
            obstacleX.passed = true; // Mark the obstacle as passed
          }
        } else {
          obstacleX.passed = false; // Reset the passed flag
        }

        if (obstacleX.current + obstacleWidth < 0) {
          obstacleX.current = canvas.width;
          randomGap = Math.floor(Math.random() * 200) + 100;
        }

        birdY.current += gravity;

        context.fillStyle = "yellow";
        context.fillRect(birdX, birdY.current, 40, 40);

        context.fillStyle = "green";
        context.fillRect(obstacleX.current, 0, obstacleWidth, randomGap);
        context.fillRect(
          obstacleX.current,
          randomGap + gap,
          obstacleWidth,
          canvas.height - randomGap - gap
        );
      }

      frameCount++;
    } else {
      context.fillStyle = "white";
      context.font = "30px Arial white";
      context.fillText("Game Over", canvas.width / 2 - 70, canvas.height / 2);
    }

    requestAnimationFrame(updateGameArea);
  };

  const endGame = () => {
    setGameOver(true);
  };

  useLayoutEffect(() => {
    birdRef.current = document.getElementById("bird");
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === " ") {
        event.preventDefault();
        jump();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [gameOver]);

  useEffect(() => {
    if (!gameOver) {
      document.addEventListener("keydown", jump);
      document.addEventListener("touchstart", handleTouch); // Add touch event
      return () => {
        document.removeEventListener("keydown", jump);
        document.removeEventListener("touchstart", handleTouch); // Remove touch event
      };
    }
  }, [gameOver]);

  useEffect(() => {
    if (gameOver) {
      return;
    }
    updateGameArea();
  }, [gameOver]);

  return (
    <div className="flappy-bird mx-auto">
      <h1 className="text-center text-2xl font-bold mb-4">Flying Block</h1>
      <p className="text-center text-xl font-semibold">Score: {score}</p>
      <canvas
        ref={canvasRef}
        style={{ border: "1px solid black", background: "black" }}
        className="mx-auto"
      ></canvas>
      {gameOver && (
        <button
          onClick={startGame}
          className="mx-auto block px-6 py-3 bg-blue-500 text-white text-xl font-semibold mt-4"
        >
          Play Again
        </button>
      )}
    </div>
  );
}

export default FlappyBird;
