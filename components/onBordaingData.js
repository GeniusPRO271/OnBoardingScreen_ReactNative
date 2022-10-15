import {Dimensions} from 'react-native';
import {
  Image_Slide0,
  Image_Slide1,
  Image_Slide2,
  Image_Slide3,
} from '../assets';

export const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: '#3A3042',
  secondary: '#FF784F',
  tertiary: '#FEF0E8',
};

export const slides = [
  {
    id: 0,
    image: Image_Slide0,
    title: 'SEARCH AROUND',
    subtitle:
      'Etiam interdum nisi ac nibh ornare lacinia. Proin aliquet eget turpis in bibendum',
  },
  {
    id: 1,
    image: Image_Slide1,
    title: 'GO TO EVENTS',
    subtitle:
      'Etiam interdum nisi ac nibh ornare lacinia. Proin aliquet eget turpis in bibendum',
  },
  {
    id: 2,
    image: Image_Slide2,
    title: 'CREATE PARTIES',
    subtitle:
      'Etiam interdum nisi ac nibh ornare lacinia. Proin aliquet eget turpis in bibendum',
  },
  {
    id: 3,
    image: Image_Slide3,
    title: 'START NOW',
    subtitle:
      'Etiam interdum nisi ac nibh ornare lacinia. Proin aliquet eget turpis in bibendum',
  },
];
