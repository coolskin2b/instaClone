import {TextStyle} from 'react-native';

const sizes = {
  xs: 10,
  sm: 12,
  default: 14,
  lg: 16,
  xl: 18,
  xlg: 20,
  xxl: 22,
};

const weight: {[Key: string]: TextStyle['fontWeight']} = {
  full: 900,
  semi: 600,
  thin: 400,
  bold: 'bold',
  normal: 'normal',
};
export default {sizes, weight};
