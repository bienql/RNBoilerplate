import React from 'react';
import { View, ViewStyle } from 'react-native';
import { Props } from './props';
import styles from './styles';

const Container: React.FC<Props> = ({ verticalAlign, children, style }) => {
  const justifyContent: ViewStyle = verticalAlign ? { justifyContent: 'center' } : {};
  return <View style={[styles.container, justifyContent, style]}>{children}</View>;
};

export default Container;
