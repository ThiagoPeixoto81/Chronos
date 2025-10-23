// src/hooks/useAlarm.ts
import { useAudioPlayer } from 'expo-audio';

export default function useBell(audioFile: any = require('../assets/sounds/bell.mp3')) {
  // crie o player com o arquivo
  const player = useAudioPlayer(audioFile);

  async function playAlarm() {
    // reposiciona para o início antes de tocar
    await player.seekTo(0);
    await player.play();
  }

  async function stopAlarm() {
    await player.pause();
    // opcional: você pode reposicionar ou não
    await player.seekTo(0);
  }

  return { playAlarm, stopAlarm };
}
