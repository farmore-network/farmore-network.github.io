import { StaticImageData } from 'next/image';
import Logo from './logo.png';

export type ImageDataType = {
  src: StaticImageData | string;
  alt: string;
};

export const ImageLogo: ImageDataType = {
  src: Logo,
  alt: 'Farmore Logo',
};