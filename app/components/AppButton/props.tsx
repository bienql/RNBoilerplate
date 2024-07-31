import { ReactElement } from 'react';
import { ViewStyle, TextStyle, TouchableOpacityProps } from 'react-native';

export interface Props extends TouchableOpacityProps {
  type?: 'primary' | 'secondary' | 'link' | 'gradientBorder';
  icon?: ReactElement;
  text?: String;
  textType?: 'regular' | 'medium' | 'bold';
  width?: number | string;
  height?: number | string;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  fadeWhenDisabled?: boolean;
}
