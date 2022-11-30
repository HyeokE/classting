import 'styled-components';
import { assetColor } from './assetColor';
import { fontSize } from './fontSize';
import { windowSize } from './windowSize';

declare module 'styled-components' {
  export interface DefaultTheme {
    windowSizes: typeof windowSize;
    fontSizes: typeof fontSize;
    colors: typeof assetColor;
  }
}
