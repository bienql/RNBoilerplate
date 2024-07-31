import { Dimensions, StyleSheet, ViewStyle } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const presetStyles = {
  /**
   * Scroll screen.
   */
  scroll: {
    outer: {
      flex: 1,
      height: '100%',
    } as ViewStyle,
    inner: {
      justifyContent: 'flex-start',
      alignItems: 'stretch',
    } as ViewStyle,
  },

  /**
   * No scroll screen
   */
  fixed: {
    outer: {
      flex: 1,
      height: '100%',
    } as ViewStyle,
    inner: {
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      height: '100%',
      width: '100%',
    } as ViewStyle,
  },
};

export const styles = StyleSheet.create({
  fullView: {
    position: 'absolute',
    width: width,
    height: height,
    zIndex: 99,
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
});
