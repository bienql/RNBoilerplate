import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 5,
  },
  borderRadius5: {
    borderRadius: 5,
  },
  colorWhite: {
    color: '#FFFFFF',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 5,
  },
  itemIconDisabled: {
    marginRight: 14,
    opacity: 0.4,
  },
  itemIcon: {
    marginRight: 14,
  },
  textDisabled: {
    color: '#E0E0E0',
  },
  label: {
    color: '#626262',
    paddingLeft: 0,
    marginLeft: 0,
    backgroundColor: 'red',
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 15,
  },
  myProfileView: {
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 40,
  },
  imageProfile: {
    marginRight: 10,
  },
  myProfileLink: {
    flexDirection: 'row',
    paddingTop: 4,
    alignItems: 'center',
  },
  iconNextRight: {
    marginLeft: 9,
  },
  myProfileViewLeft: {
    flex: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  turnOff: {
    flex: 1,
    alignItems: 'center',
  },
  joinNow: {
    flex: 5,
  },
  subJoinNow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
  },
  loginText: {
    color: '#EC008C',
  },
  messageNumber: {
    flex: 1,
    borderRadius: 14,
  },
  haveMessage: {
    flex: 4,
  },
  messageNumberText: {
    lineHeight: 15,
    fontWeight: '400',
    paddingVertical: 1,
    paddingHorizontal: 11,
    left: 0,
    alignItems: 'center',
    textAlign: 'center',
    color: 'red',
  },
  logOut: {
    marginTop: 40,
    paddingHorizontal: 25,
  },
  notificationUnread: {
    height: 6,
    width: 6,
    borderRadius: 50,
    backgroundColor: 'red',
    position: 'absolute',
    top: '8%',
    right: '50%',
  },
});

export default styles;
