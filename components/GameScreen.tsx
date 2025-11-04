import React, { useState, useEffect, useCallback, useRef } from 'react';
import { QuizItem, Language, Category } from '../types';
import { UI_TEXT } from '../constants';

const SoundIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.348 2.595.341 1.24 1.518 1.905 2.66 1.905H6.44l4.5 4.5c.944.945 2.56.276 2.56-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 01-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
        <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
    </svg>
);


interface GameScreenProps {
  quizData: QuizItem[];
  language: Language;
  category: Category;
  onBackToMenu: () => void;
}

const GameScreen: React.FC<GameScreenProps> = ({ quizData, language, category, onBackToMenu }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  const [audioState, setAudioState] = useState<'idle' | 'playing'>('idle');
  
  const audioRef = useRef<HTMLAudioElement>(null);
  const currentItem = quizData[currentIndex];

  const shuffleArray = useCallback(<T,>(array: T[]): T[] => {
    return [...array].sort(() => Math.random() - 0.5);
  }, []);

  useEffect(() => {
    setSelectedAnswer(null);
    setIsCorrect(null);
    setShuffledOptions(shuffleArray(currentItem.options.transliterated));
  }, [currentIndex, currentItem, shuffleArray]);

  const handleAnswer = (answer: string) => {
    if (selectedAnswer) return;

    const correctAnswer = currentItem.transliteration;
    setSelectedAnswer(answer);
    setIsCorrect(answer === correctAnswer);
  };

  const handleNext = () => {
    if (currentIndex < quizData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onBackToMenu();
    }
  };

  const playAudio = () => {
    const base64Audio = currentItem.audioData;
    if (!base64Audio || !audioRef.current || audioState === 'playing') return;

    let mimeType = 'audio/mpeg'; // Default to mpeg
    // Check the start of the base64 string for magic numbers
    if (base64Audio.startsWith('UklGR')) { // RIFF header for WAV
        mimeType = 'audio/wav';
    } else if (base64Audio.startsWith('SUQz')) { // ID3 header for MP3
        mimeType = 'audio/mpeg';
    }

    const audioSrc = `data:${mimeType};base64,${base64Audio}`;
    
    setAudioState('playing');
    audioRef.current.src = audioSrc;
    audioRef.current.play().catch(error => {
      console.error("Error playing audio:", error);
      setAudioState('idle'); // Reset on error
    });
  };


  const getButtonClass = (option: string) => {
    const correctAnswer = currentItem.transliteration;
    if (selectedAnswer) {
      if (option === correctAnswer) {
        return 'bg-green-500 hover:bg-green-500 text-white';
      }
      if (option === selectedAnswer) {
        return 'bg-red-500 hover:bg-red-500 text-white';
      }
      return 'bg-gray-300 text-gray-500 cursor-not-allowed';
    }
    return 'bg-white hover:bg-yellow-100 text-blue-800';
  };
  
  const promptText = language === 'ar' ? currentItem.arabic : currentItem.english;
  const promptFont = language === 'ar' ? "font-['Cairo']" : '';

  return (
    <div className="w-full max-w-4xl mx-auto">
      <audio ref={audioRef} onEnded={() => setAudioState('idle')} hidden />
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-10">
        <div className="relative mb-6">
          <p className="text-xl font-bold text-gray-600">{category.name[language]}</p>
          <button onClick={onBackToMenu} className="absolute top-0 rtl:left-0 ltr:right-0 text-gray-500 hover:text-blue-500 transition-colors">
            {UI_TEXT[language].backToMenu}
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center p-4">
              <img src={currentItem.imageData} alt={currentItem.english} className="w-full h-full object-contain" />
          </div>

          <div className="flex flex-col space-y-4">
            <div className={`text-center mb-4 text-4xl font-bold text-blue-900 ${promptFont}`}>
              {promptText}
            </div>
            {shuffledOptions.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                disabled={!!selectedAnswer}
                className={`w-full text-2xl font-bold p-4 rounded-xl shadow-md transition-all duration-300 ${getButtonClass(option)}`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {selectedAnswer && (
          <div className="mt-10 text-center animate-fade-in-up">
            <h3 className="text-3xl font-bold">
              {isCorrect ? `🎉 ${UI_TEXT[language].correct}` : `😢 ${UI_TEXT[language].wrong}`}
            </h3>
            <div className="bg-blue-100 rounded-2xl p-6 mt-4 grid grid-cols-1 gap-y-3 text-center">
              <div className="text-2xl font-bold text-blue-800">{currentItem.english}</div>
              <div className="flex justify-center items-center gap-4">
                <h4 className="text-6xl font-bold text-blue-600 font-['Cairo']">{currentItem.arabic}</h4>
                <button
                  onClick={playAudio}
                  disabled={!currentItem.audioData || audioState !== 'idle'}
                  className="p-2 rounded-full hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition relative flex items-center justify-center w-12 h-12 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Play pronunciation"
                >
                  <SoundIcon className="w-8 h-8 text-blue-500" />
                </button>
              </div>
              <div className="text-2xl text-gray-600 italic">{currentItem.transliteration}</div>
            </div>
            <button onClick={handleNext} className="mt-8 bg-yellow-400 hover:bg-yellow-500 text-white font-bold text-2xl py-3 px-10 rounded-full shadow-lg transition-transform transform hover:scale-105">
                {UI_TEXT[language].next}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameScreen;