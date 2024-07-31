import firestore from '@react-native-firebase/firestore';
import { AppVersion } from 'app/models/query.model';

export const getAppVersion = async (): Promise<AppVersion> => {
  try {
    const appVersion = await firestore()
      .collection('app')
      .doc('1')
      .get()
      .then((documentSnapshot) => {
        if (documentSnapshot.exists) {
          return documentSnapshot.data();
        }

        return {};
      });

    return appVersion as AppVersion;
  } catch (err) {
    console.log(err);
    return {} as AppVersion;
  }
};
