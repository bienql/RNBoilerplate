import { ReactElement } from 'react';

export interface Props {
  type?: 'primary' | 'secondary';
  width?: number | string;
  height?: number | string;
  children: ReactElement;
}
