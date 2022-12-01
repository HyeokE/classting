import React, { ReactElement } from 'react';

import { useAtomsDevtools } from 'jotai/devtools';

const isDevelopment = process.env.NODE_ENV === 'development';
export const AtomDevtools: React.FC<{
  children: ReactElement;
}> = ({ children }) => {
  isDevelopment && useAtomsDevtools('atomDevtools', { enabled: isDevelopment });
  return children;
};
