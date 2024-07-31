import { StyleSheet, ViewStyle } from 'react-native';

const CONTAINER = {
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
} as ViewStyle;

const styles = StyleSheet.create({
  container: {
    height: 44,
    marginTop: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    ...CONTAINER,
    width: 63,
  },
  middle: {
    ...CONTAINER,
    flex: 1,
  },
  right: {
    ...CONTAINER,
    width: 63,
  },
  backButton: {
    ...CONTAINER,
    width: '100%',
    backgroundColor: '#fff',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    zIndex: 100,
  },
  backIcon: {
    fontSize: 16,
    fontWeight: '900',
  },
  title: {
    color: '#626262',
    textAlign: 'center',
  },
});

export default styles;
