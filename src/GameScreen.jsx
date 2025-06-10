import { useGame } from "./GameContext.jsx"; // Import context hook
import Holes from "./Holes.jsx"; // Import Holes component

export default function GameScreen() { // Define GameScreen component
  const { score, restartGame } = useGame(); // Get score and restart function

  return (
    <div className="game-screen">
      <div className="score">Score: {score}</div> {/* Display current score */}
      <button onClick={restartGame}>Restart</button> {/* Restart button */}
      <Holes /> {/* Render the holes grid */}
    </div>
  );
}
