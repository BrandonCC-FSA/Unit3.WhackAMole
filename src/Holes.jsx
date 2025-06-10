import { useGame } from "./GameContext.jsx"; // Import context hook
import Mole from "./Mole.jsx"; // Import Mole component

export default function Holes() { // Define Holes component
  const { numHoles, molePosition } = useGame(); // Get number of holes and mole's position

  return (
    <div className="holes-grid">
      {Array.from({ length: numHoles }).map((_, idx) => (
        <div className="hole" key={idx}>
          {idx === molePosition ? <Mole /> : null} {/* Render Mole if this is the mole's position */}
        </div>
      ))}
    </div>
  );
}
