import { useGame } from "./GameContext.jsx";

export default function Mole() {
  const { whackMole } = useGame();

  return (
    <div
      className="mole"
      onClick={whackMole}
      role="button"
      tabIndex={0}
      aria-label="Whack the mole"
    />
  );
}
