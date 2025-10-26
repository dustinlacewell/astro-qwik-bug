import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { createStrudel } from '../utils/strudel';

export const ComponentA = component$(() => {
  const result = useSignal<any>(null);
  
  useVisibleTask$(() => {
    // Only run client-side
    result.value = createStrudel();
  });
  
  return (
    <div style={{ padding: '20px', border: '2px solid blue', margin: '10px' }}>
      <h2>Component A</h2>
      <p>Uses createStrudel() from utils</p>
      <pre>Pattern: {result.value ? typeof result.value.pattern : 'loading...'}</pre>
    </div>
  );
});
