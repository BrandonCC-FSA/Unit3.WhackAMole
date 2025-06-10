import { useGame } from "./GameContext.jsx";
import Mole from "./Mole.jsx";

export default function Holes() {
  const { numHoles, molePosition } = useGame();

  return (
    <div className="holes-grid">
      {Array.from({ length: numHoles }).map((_, idx) => (
        <div className="hole" key={idx}>
          {idx === molePosition ? <Mole /> : null}
        </div>
      ))}
    </div>
  );
}
