import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { useStrudel } from '../utils/strudel';

export const ComponentB = component$(() => {
  const result = useSignal<any>(null);
  
  useVisibleTask$(() => {
    result.value = useStrudel();
  });
  
  return (
    <div style={{ padding: '20px', border: '2px solid red', margin: '10px' }}>
      <h2>Component B</h2>
      <p>Calls useStrudel()</p>
      <pre>Result: {result.value ? 'loaded' : 'loading...'}</pre>
    </div>
  );
});
