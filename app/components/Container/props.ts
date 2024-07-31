import React from 'react';
import { ViewStyle } from 'react-native';

export type HeaderLeftValue = 'back' | 'drawer' | React.ReactElement;

export interface Props {
  /**
   * Align items vertical. Default to top.
   */
  verticalAlign?: 'top' | 'center';

  /**
   * Children components.
   */
  children: React.ReactElement | React.ReactElement[];

  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle;
}
