import { useGame } from "./GameContext.jsx";

export default function WelcomeScreen() {
  const { startGame } = useGame();

  return (
    <div className="welcome-screen">
      <h1>Welcome to Whack-a-Mole!</h1>
      <p>
        Click the mole as fast as you can to score points.
        <br />
        Press `Play` to start the game!
      </p>
      <button onClick={startGame}>Play</button>
    </div>
  );
}
