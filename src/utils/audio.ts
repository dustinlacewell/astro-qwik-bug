// Second utility file that NO LONGER imports from @strudel packages
// Instead, it uses the wrapper function from strudel.ts
import { getStrudelAudioContext } from './strudel';

export function setupAudio() {
  const ctx = getStrudelAudioContext();
  return { audioContext: ctx };
}
