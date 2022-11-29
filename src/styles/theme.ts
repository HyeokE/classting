import type { DefaultTheme } from 'styled-components';

import { assetColors } from './assetColors';
import { fontSize } from './fontSize';
import { windowSize } from './windowSize';

export const theme: DefaultTheme = {
  windowSize: windowSize,
  fontSize: fontSize,
  color: assetColors,
};
