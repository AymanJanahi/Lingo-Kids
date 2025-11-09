import React, { useState } from 'react';
import { GameState, Category, QuizItem } from './types';
import { UI_TEXT } from './constants';
import { getQuizDataForCategory } from './services/quizService';
import CategoryMenu from './components/CategoryMenu';
import GameScreen from './components/GameScreen';
import { soundService } from './services/soundService';

const LoadingSpinner: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex flex-col items-center justify-center text-white text-2xl font-bold">
    <div className="w-16 h-16 border-8 border-yellow-300 border-t-transparent rounded-full animate-spin mb-4"></div>
    <p>{text}</p>
  </div>
);

const ErrorDisplay: React.FC<{ message: string; onRetry: () => void }> = ({ message, onRetry }) => {
    const handleRetryClick = () => {
        soundService.playClick();
        onRetry();
    }
    return (
        <div className="text-center text-white bg-red-500/80 p-8 rounded-2xl">
            <div className="text-5xl mb-4">😥</div>
            <h2 className="text-3xl font-bold mb-4">{message}</h2>
            <button onClick={handleRetryClick} className="bg-white text-red-500 font-bold py-2 px-6 rounded-full hover:bg-gray-200 transition-colors">
                Try Again
            </button>
        </div>
    );
}


function App() {
  const [gameState, setGameState] = useState<GameState>('menu');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [quizData, setQuizData] = useState<QuizItem[] | null>(null);

  const handleSelectCategory = (category: Category) => {
    setSelectedCategory(category);
    setGameState('loading');
    
    // Using a timeout to make the loading screen visible for a moment for a smoother UX
    setTimeout(() => {
        try {
            const data = getQuizDataForCategory(category.id);
            if (data && data.length > 0) {
                setQuizData(data);
                setGameState('playing');
            } else {
                console.error("No quiz data returned for category:", category.id);
                setGameState('error');
            }
        } catch (error) {
            console.error("Failed to generate quiz data:", error);
            setGameState('error');
        }
    }, 500);
  };

  const handleBackToMenu = () => {
    setGameState('menu');
    setSelectedCategory(null);
    setQuizData(null);
  };

  const renderContent = () => {
    switch (gameState) {
      case 'menu':
        return <CategoryMenu onSelectCategory={handleSelectCategory} />;
      case 'loading':
        return <LoadingSpinner text={UI_TEXT.en.loading} />;
      case 'playing':
        if (quizData && selectedCategory) {
          return <GameScreen quizData={quizData} category={selectedCategory} onBackToMenu={handleBackToMenu} />;
        }
        // This case should not be reached if logic is correct, but as a safeguard,
        // render an error state directly instead of setting state during render.
        console.error("Invalid state: gameState is 'playing' but quizData or selectedCategory is missing.");
        return <ErrorDisplay message={UI_TEXT.en.error} onRetry={() => selectedCategory ? handleSelectCategory(selectedCategory) : handleBackToMenu()} />;
      case 'error':
        return <ErrorDisplay message={UI_TEXT.en.error} onRetry={() => selectedCategory ? handleSelectCategory(selectedCategory) : handleBackToMenu()} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 p-4 sm:p-8 flex flex-col items-center justify-center transition-all">
      <header className="w-full max-w-6xl mx-auto flex justify-center items-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-black text-white drop-shadow-md">
          {UI_TEXT.en.title}
        </h1>
      </header>
      <main className="flex-grow flex items-center justify-center w-full">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
