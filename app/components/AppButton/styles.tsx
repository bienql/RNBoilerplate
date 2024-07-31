import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

const BASE_CONTAINER = {
  padding: 11,
  borderRadius: 15,
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};

const BASE_TEXT = {
  fontSize: 12,
  lineHeight: 14,
  includeFontPadding: false,
  textAlignVertical: 'center',
  textAlign: 'center',
};

export const containerStyles = StyleSheet.create({
  /**
   * Primary button
   */
  primary: {
    ...BASE_CONTAINER,
  } as ViewStyle,

  /**
   * Secondary button
   */
  secondary: {
    ...BASE_CONTAINER,
    backgroundColor: '#fff',
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    // elevation: 2,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowRadius: 19,
  } as ViewStyle,

  /**
   * A button without extras
   */
  link: {
    ...BASE_CONTAINER,
  } as ViewStyle,

  /**
   * Gradient border button
   */
  gradientBorder: {
    ...BASE_CONTAINER,
    padding: 0,
  } as ViewStyle,

  /**
   * Hide background border of the gradient background
   */
  noBorder: {
    borderWidth: 0,
  },

  /**
   * Inner gradient border button
   */
  gradientBorderInner: {
    ...BASE_CONTAINER,
    borderWidth: 1,
    height: '100%',
  } as ViewStyle,

  /**
   * Transparent inner gradient border button
   * Use to hide premasked element
   */
  gradientBorderInnerTransparent: {
    opacity: 0,
  },
});

export const textStyles = StyleSheet.create({
  /**
   * Primary button text
   */
  primary: {
    ...BASE_TEXT,
    color: '#fff',
  } as TextStyle,

  /**
   * Secondary button text
   */
  secondary: {
    ...BASE_TEXT,
    color: '#626262',
  } as TextStyle,

  /**
   * A button text without extras
   */
  link: {
    ...BASE_TEXT,
  } as TextStyle,

  gradientBorder: {
    ...BASE_TEXT,
  } as TextStyle,
});
