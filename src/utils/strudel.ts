// Utility that imports from @strudel packages
import { silence, evalScope } from '@strudel/core';
import { getAudioContext, webaudioOutput } from '@strudel/webaudio';

// NO re-exports - only wrapper functions
export function createStrudel() {
  const pattern = silence;
  const ctx = getAudioContext();
  return { pattern, ctx };
}

export function getStrudelAudioContext() {
  return getAudioContext();
}

