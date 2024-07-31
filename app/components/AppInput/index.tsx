import React, { forwardRef } from 'react';
import { TextInput } from 'react-native';
import { styles } from './styles';
import { Props } from './props';

const Input: React.FC<Props> = (props, ref) => {
  const { style, ...rest } = props;

  return <TextInput ref={ref} style={[styles.input, style]} {...rest} />;
};

export default forwardRef(Input);
