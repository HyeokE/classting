import 'styled-components';
import { assetColors } from './assetColors';
import { fontSize } from './fontSize';
import { windowSize } from './windowSize';

declare module 'styled-components' {
  export interface DefaultTheme {
    windowSize: typeof windowSize;
    fontSize: typeof fontSize;
    color: typeof assetColors;
  }
}
