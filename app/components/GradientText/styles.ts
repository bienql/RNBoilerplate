import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  text: {
    opacity: 0,
  },
  container: {
    // make gradient background only cover the text instead of being 100% width
    alignSelf: 'flex-start',
  },
});
