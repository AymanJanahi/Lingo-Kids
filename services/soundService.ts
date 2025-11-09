// A simple service to play short sound effects.
import { DUMMY_AUDIO } from '../data/_helpers';

const playAudio = (base64Audio: string) => {
  // Create a new Audio object for each playback to allow for overlapping sounds.
  const audio = new Audio(base64Audio);
  audio.play().catch(e => console.error("Error playing sound:", e));
};

// Use a silent placeholder audio to prevent errors.
// The user can add real sounds later.
const DUMMY_SOUND_URL = `data:audio/wav;base64,${DUMMY_AUDIO}`;

const correctSound = DUMMY_SOUND_URL;
const clickSound = DUMMY_SOUND_URL;
const incorrectSound = DUMMY_SOUND_URL;

export const soundService = {
  playCorrect: () => playAudio(correctSound),
  playIncorrect: () => playAudio(incorrectSound),
  playClick: () => playAudio(clickSound),
};
