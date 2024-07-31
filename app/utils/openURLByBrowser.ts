import { Linking } from 'react-native';

export const openURLByBrowser = async (url: string) => {
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    await Linking.openURL(url);
  }
};
