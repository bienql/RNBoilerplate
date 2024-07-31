import MaskedView from '@react-native-masked-view/masked-view';
import React, { useEffect, useState } from 'react';
import { Platform, StyleProp, TextStyle, ViewStyle } from 'react-native';
import LinearGradient, { LinearGradientProps } from 'react-native-linear-gradient';
import Text, { Props as TextProps } from '../AppText';
import { styles } from './styles';

interface Props extends TextProps, LinearGradientProps {
  style?: StyleProp<TextStyle>;
  containerStyle?: ViewStyle;
  fixTextCutOff?: boolean; // if the text is cut off, try setting this prop to 'true'. But with this prop, the text's gradient may be slightly off
}

const GradientText: React.FC<Props> = (props) => {
  const { style, containerStyle, children, text, ...rest } = props;
  const [lastChildren, setLastChilren] = useState<any>();

  useEffect(() => {
    if (Platform.OS === 'android' && Platform.Version <= 25)
      if (children !== lastChildren) {
        setLastChilren(children);
      }
  }, [children, lastChildren]);

  return (
    <MaskedView
      key={(children !== lastChildren) + (text || '')} // updating key to prevent text not updating on older android (API <= 25)
      style={containerStyle}
      maskElement={<Text {...rest} text={text} children={children} style={[style]} />}
      androidRenderingMode="software">
      <LinearGradient {...rest} style={!props.fixTextCutOff && styles.container}>
        <Text text={text} children={children} {...rest} style={[style, styles.text]} />
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
