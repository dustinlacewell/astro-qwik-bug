import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { setupAudio } from '../utils/audio';

export const ComponentB = component$(() => {
  const result = useSignal<any>(null);
  
  useVisibleTask$(() => {
    // Only run client-side
    result.value = setupAudio();
  });
  
  return (
    <div style={{ padding: '20px', border: '2px solid red', margin: '10px' }}>
      <h2>Component B</h2>
      <p>Uses setupAudio() from separate utils/audio.ts that ALSO imports from @strudel</p>
      <pre>AudioContext: {result.value ? typeof result.value.audioContext : 'loading...'}</pre>
    </div>
  );
});
