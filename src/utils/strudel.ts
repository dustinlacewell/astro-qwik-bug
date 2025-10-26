// Utility that imports from @strudel packages
import { silence } from '@strudel/core';

export function useStrudel() {
  const pattern = silence;
  return { pattern };
}

