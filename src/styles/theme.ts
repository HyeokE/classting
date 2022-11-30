import type { DefaultTheme } from 'styled-components';

import { assetColor } from './assetColor';
import { fontSize } from './fontSize';
import { windowSize } from './windowSize';

export const theme: DefaultTheme = {
  windowSizes: windowSize,
  fontSizes: fontSize,
  colors: assetColor,
};
