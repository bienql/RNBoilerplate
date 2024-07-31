/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './app/Entrypoint';
import {name as appName} from './app.json';

import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

// patch local compare crashing: https://github.com/facebook/react-native/issues/32174
function patchLocalCompare() {
  const originalLocalCompare = String.prototype.localeCompare;
  const compareStrings = (a, b, locales, options) => {
    if (a === b) {
      return 0;
    } else if (a === '') {
      return -1;
    } else if (b === '') {
      return 1;
    } else {
      return originalLocalCompare.call(a, b, locales, options);
    }
  };

  // eslint-disable-next-line no-extend-native
  String.prototype.localeCompare = function (other, locales, options) {
    return compareStrings(this.toString(), other, locales, options);
  };
}

patchLocalCompare();

AppRegistry.registerComponent(appName, () => App);
