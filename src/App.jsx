import { GameProvider, useGame } from "./GameContext.jsx";
import WelcomeScreen from "./WelcomeScreen.jsx";
import GameScreen from "./GameScreen.jsx";

function MainContent() {
  const { gameState } = useGame();

  return gameState === "welcome" ? <WelcomeScreen /> : <GameScreen />;
}

export default function App() {
  return (
    <GameProvider>
      <MainContent />
    </GameProvider>
  );
}
