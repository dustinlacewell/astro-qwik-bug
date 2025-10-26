import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { useStrudel } from '../utils/strudel';

export const ComponentA = component$(() => {
  const result = useSignal<any>(null);
  
  useVisibleTask$(() => {
    result.value = useStrudel();
  });
  
  return (
    <div style={{ padding: '20px', border: '2px solid blue', margin: '10px' }}>
      <h2>Component A</h2>
      <p>Calls useStrudel()</p>
      <pre>Result: {result.value ? 'loaded' : 'loading...'}</pre>
    </div>
  );
});
