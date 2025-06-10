import { GameProvider, useGame } from "./GameContext.jsx"; // Import provider and hook
import WelcomeScreen from "./WelcomeScreen.jsx"; // Import WelcomeScreen
import GameScreen from "./GameScreen.jsx"; // Import GameScreen

function MainContent() {
  const { gameState } = useGame(); // Get current game state

  return gameState === "welcome" ? <WelcomeScreen /> : <GameScreen />; // Conditional rendering
}

export default function App() {
  return (
    <GameProvider>
      <MainContent />
    </GameProvider>
  );
}

// // App.jsx
// - Import GameProvider
// - Wrap main content in <GameProvider>
// - If gameState is 'welcome':
//     - Render <WelcomeScreen />
// - Else if gameState is 'playing':
//     - Render <GameScreen />

// // Game logic in context:
// - startGame():
//     - Set score to 0
//     - Set molePosition to random hole index
//     - Set gameState to 'playing'
// - restartGame():
//     - Set gameState to 'welcome'
// - whackMole():
//     - Increment score by 1
//     - Set molePosition to new random hole index

// // State management:
// - Never mutate arrays directly (if used)
// - Use setState with new arrays/values

// // Images:
// - Use provided images for holes and mole as backgrounds in CSS
