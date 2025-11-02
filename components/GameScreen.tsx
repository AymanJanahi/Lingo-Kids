import React, { useState, useEffect, useCallback, useRef } from 'react';
import { QuizItem, Language, Category } from '../types';
import { generateImage, getArabicSpeech } from '../services/geminiService';
import { UI_TEXT } from '../constants';

interface GameScreenProps {
  quizData: QuizItem[];
  language: Language;
  category: Category;
  onBackToMenu: () => void;
}

const SoundIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.33333 10H2V14H5.33333V10ZM20 12C20 16.4167 17.1667 20.1833 13 21.05V19.0167C16.0333 18.2 18 15.3667 18 12C18 8.63333 16.0333 5.8 13 4.98333V2.95C17.1667 3.81667 20 7.58333 20 12ZM13 1.05V0C7.76667 0.966667 4.16667 5.43333 4 10.5L6 10.7C6.15 6.61667 9.15 3.33333 13 2.96667L12.9167 1.05H13ZM7 8H9V16H7V8Z" transform="translate(1, 0)" />
        <path d="M13 9.36667V14.6333C11.3333 14.1833 10 12.7333 10 11C10 9.26667 11.3333 7.81667 13 7.36667L13 9.36667Z" transform="translate(1, 1)" />
    </svg>
);


const GameScreen: React.FC<GameScreenProps> = ({ quizData, language, category, onBackToMenu }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [imageLoading, setImageLoading] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);

  const audioCache = useRef<Record<string, { data: string, context?: AudioContext }>>({});
  const [audioLoading, setAudioLoading] = useState(false);

  const currentItem = quizData[currentIndex];

  const shuffleArray = useCallback(<T,>(array: T[]): T[] => {
    return [...array].sort(() => Math.random() - 0.5);
  }, []);

  useEffect(() => {
    setImageLoading(true);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setImageUrl('');

    const options = language === 'ar' ? currentItem.options.arabic : currentItem.options.english;
    setShuffledOptions(shuffleArray(options));

    generateImage(currentItem.imagePrompt).then((url) => {
      setImageUrl(url);
      setImageLoading(false);
    });
  }, [currentIndex, currentItem, language, shuffleArray]);

  const handleAnswer = (answer: string) => {
    if (selectedAnswer) return;

    const correctAnswer = language === 'ar' ? currentItem.arabic : currentItem.english;
    setSelectedAnswer(answer);
    setIsCorrect(answer === correctAnswer);
  };

  const handleNext = () => {
    if (currentIndex < quizData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onBackToMenu(); // or go to a results screen
    }
  };

  const playAudio = async () => {
    if (audioLoading) return;
    setAudioLoading(true);

    try {
      const arabicWord = currentItem.arabic;
      if (audioCache.current[arabicWord]?.data) {
        const {data, context} = audioCache.current[arabicWord];
        if(!context || context.state === 'closed') {
             audioCache.current[arabicWord].context = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
        }
        const audioContext = audioCache.current[arabicWord].context!;

        const decodedData = atob(data);
        const buffer = new Uint8Array(decodedData.length);
        for (let i = 0; i < decodedData.length; i++) {
            buffer[i] = decodedData.charCodeAt(i);
        }

        const dataInt16 = new Int16Array(buffer.buffer);
        const frameCount = dataInt16.length;
        const audioBuffer = audioContext.createBuffer(1, frameCount, 24000);
        const channelData = audioBuffer.getChannelData(0);
        for (let i = 0; i < frameCount; i++) {
            channelData[i] = dataInt16[i] / 32768.0;
        }

        const source = audioContext.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioContext.destination);
        source.start();
      } else {
        const base64Audio = await getArabicSpeech(arabicWord);
        const context = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
        audioCache.current[arabicWord] = { data: base64Audio, context };
        await playAudio(); // Re-call to play from cache
      }
    } catch (error) {
      console.error("Error playing audio:", error);
    } finally {
      setAudioLoading(false);
    }
  };

  const getButtonClass = (option: string) => {
    const correctAnswer = language === 'ar' ? currentItem.arabic : currentItem.english;
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

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-10">
        <div className="relative mb-6">
          <p className="text-xl font-bold text-gray-600">{category.name[language]}</p>
          <button onClick={onBackToMenu} className="absolute top-0 rtl:left-0 ltr:right-0 text-gray-500 hover:text-blue-500 transition-colors">
            {UI_TEXT[language].backToMenu}
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="aspect-square bg-gray-200 rounded-2xl flex items-center justify-center">
            {imageLoading ? (
               <div className="text-center text-gray-500">
                <div className="animate-spin text-4xl mb-2">🎨</div>
                {UI_TEXT[language].generatingImage}
               </div>
            ) : (
              <img src={imageUrl} alt={currentItem.english} className="w-full h-full object-contain rounded-2xl" />
            )}
          </div>

          <div className="flex flex-col space-y-4">
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
          <div className="mt-8 text-center animate-fade-in-up">
            <h3 className="text-3xl font-bold">
              {isCorrect ? `🎉 ${UI_TEXT[language].correct}` : `😢 ${UI_TEXT[language].wrong}`}
            </h3>
            <div className="bg-blue-100 rounded-xl p-4 mt-4 flex flex-col items-center">
                <div className="text-3xl font-bold text-blue-800">{currentItem.english}</div>
                <div className="flex items-center gap-4">
                    <div className="text-5xl font-bold text-blue-600 font-['Cairo']">{currentItem.arabic}</div>
                    <button onClick={playAudio} disabled={audioLoading} className="p-2 rounded-full hover:bg-blue-200 transition">
                       { audioLoading ? 
                         <div className="w-8 h-8 animate-spin rounded-full border-4 border-blue-200 border-t-blue-500"></div> :
                         <SoundIcon className="w-8 h-8 text-blue-500" />
                       }
                    </button>
                </div>
                <div className="text-xl text-gray-600">{currentItem.transliteration}</div>
            </div>
            <button onClick={handleNext} className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-white font-bold text-2xl py-3 px-10 rounded-full shadow-lg transition-transform transform hover:scale-105">
                {UI_TEXT[language].next}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameScreen;
