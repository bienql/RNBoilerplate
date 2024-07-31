import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import Text from '../AppText';
import { containerStyles, textStyles } from './styles';
import { Props } from './props';

const Button: React.FC<Props> = (props) => {
  const {
    type = 'primary',
    icon,
    text,
    textType,
    width = 'auto',
    height = 'auto',
    style,
    containerStyle,
    textStyle,
    disabled,
    fadeWhenDisabled,
    ...rest
  } = props;

  let textMarginLeft = 0;
  let buttonUI = null;

  const disabledStyle = fadeWhenDisabled ? { opacity: 0.7 } : undefined;

  const hasIcon = icon !== undefined;
  const renderChildren = (textTypeProp: 'regular' | 'medium' | 'bold') => {
    textTypeProp = textType || textTypeProp;

    return (
      <>
        {hasIcon && icon}

        {text && (
          <Text
            type={textTypeProp}
            style={[textStyles[type], { marginLeft: textMarginLeft }, textStyle]}>
            {text}
          </Text>
        )}
      </>
    );
  };
  if (hasIcon) textMarginLeft = 7;

  if (type === 'primary') {
    buttonUI = (
      <LinearGradient
        colors={['#A90069', '#EC008C']}
        useAngle
        angle={69.12}
        locations={[0.0198, 0.7587]}
        style={[containerStyles[type], style, { width, height }]}>
        {renderChildren('bold')}
      </LinearGradient>
    );
  }

  if (type === 'secondary') {
    buttonUI = (
      <View style={[containerStyles[type], style, { width, height }]}>
        {renderChildren('regular')}
      </View>
    );
  }

  if (type === 'link') {
    buttonUI = (
      <MaskedView
        maskElement={
          <View style={[containerStyles[type], style, { width, height }]}>
            {renderChildren('regular')}
          </View>
        }>
        <LinearGradient
          colors={['#A90069', '#EC008C']}
          start={{ x: 0.25, y: 0.5 }}
          end={{ x: 0.75, y: 0.5 }}
          locations={[0.0198, 0.7587]}
          style={[containerStyles.link, { width, height }]}>
          <View style={{ width, height }} />
        </LinearGradient>
      </MaskedView>
    );
  }

  if (type === 'gradientBorder') {
    buttonUI = (
      <MaskedView
        androidRenderingMode="software"
        maskElement={
          <View style={[containerStyles.gradientBorderInner, style, { width, height }]}>
            {renderChildren('bold')}
          </View>
        }>
        <LinearGradient
          colors={['#A90069', '#EC008C']}
          start={{ x: 0.25, y: 0.5 }}
          end={{ x: 0.75, y: 0.5 }}
          locations={[0.0198, 0.7587]}
          style={[
            containerStyles.gradientBorder,
            style,
            containerStyles.noBorder,
            { width, height },
          ]}>
          <View
            style={[
              containerStyles.gradientBorderInner,
              style,
              { width, height },
              containerStyles.gradientBorderInnerTransparent,
            ]}>
            {renderChildren('bold')}
          </View>
        </LinearGradient>
      </MaskedView>
    );
  }

  return (
    <TouchableOpacity
      style={[{ width, height }, containerStyle, disabled && disabledStyle]}
      disabled={disabled}
      {...rest}>
      {buttonUI}
    </TouchableOpacity>
  );
};

export default Button;
