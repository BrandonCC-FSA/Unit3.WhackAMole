import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const numHoles = 9;
  const [molePosition, setMolePosition] = useState(
    Math.floor(Math.random() * numHoles)
  );
  const [gameState, setGameState] = useState(`welcome`);

  const startGame = () => {
    setScore(0);
    setMolePosition(Math.floor(Math.random() * numHoles));
    setGameState("playing");
  };

  const restartGame = () => {
    setGameState("welcome");
  };

  const whackMole = () => {
    setScore((prev) => prev + 1);
    setMolePosition(Math.floor(Math.random() * numHoles));
  };

  const value = {
    score,
    molePosition,
    gameState,
    startGame,
    restartGame,
    whackMole,
    numHoles,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGame = () => {
  return useContext(GameContext);
};
