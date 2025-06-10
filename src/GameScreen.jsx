import { useGame } from "./GameContext.jsx";
import Holes from "./Holes.jsx";

export default function GameScreen() {
  const { score, restartGame } = useGame();
  return (
    <div className="game-screen">
      <div className="score">Score: {score}</div>
      <button onClick={restartGame}>Restart</button>
      <Holes />
    </div>
  );
}
