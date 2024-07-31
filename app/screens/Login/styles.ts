import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  textHeader: {
    marginTop: 20,
  },
  selectInput: {
    marginRight: 15,
    width: 67,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    justifyContent: 'center',
  },
  selectInputPicker: {
    marginRight: 15,
    width: 64,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 17,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#626262',
    // marginBottom: 19,
  },
  phoneNumContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    marginVertical: 20,
  },
  textPasswordBox: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 40,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconRight: {
    position: 'absolute',
    right: 12,
    color: '#626262',
  },
  textHint: {
    fontSize: 12,
  },
  buttonContainer: {
    marginTop: 20,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  lineWrap: {
    marginVertical: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lineItem: {
    backgroundColor: '#E0E0E0',
    height: 2,
    flex: 1,
  },
  iconModal: {
    resizeMode: 'contain',
  },
  buttonDropdown: {
    backgroundColor: '#FFFFFF',
    height: 40,
    width: 75,
    borderRadius: 10,
  },
  buttonTextDropdown: { fontSize: 14, color: '#626262' },
  dropdown: {
    marginTop: -10,
    borderRadius: 10,
    width: 75,
    height: 40,
    flex: 1,
    textAlign: 'center',
  },
  dropdownRow: { height: 40 },
});

export default styles;
