import { StyleSheet } from 'react-native';

const stylesModal = StyleSheet.create({
  modal: {
    margin: 0,
    flex: 1,
    justifyContent: 'flex-end',
    height: '100%',
  },
  borderRed: {
    borderWidth: 1,
    borderColor: 'red',
  },
  modalBody: {
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  modalTitle: {
    lineHeight: 21,
    textAlign: 'center',
    paddingVertical: 15,
    paddingHorizontal: 60,
  },
  modalDescription: {
    lineHeight: 21,
    textAlign: 'center',
    paddingHorizontal: 15,
  },
  modalButtonOk: {
    marginTop: 20,
  },
  modalButtonCancel: {
    marginTop: 10,
  },
  textStyle: {
    height: 34,
    lineHeight: 34,
  },
});

export default stylesModal;
