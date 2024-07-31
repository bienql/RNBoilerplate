import { getAppVersion } from 'app/services/firebase.service';
import { Alert, Platform } from 'react-native';
import { getVersion } from 'react-native-device-info';
import semver from 'semver';
import { openURLByBrowser } from './openURLByBrowser';

const formatSemanticVersion = (version: string = '0.0.0') => {
  if (version?.split('.').length === 2) {
    return version + '.0';
  }

  return version;
};

const checkForUpdate = (
  currentLiveVersion: string,
  minAcceptedVersion: string,
  updateLink: string,
) => {
  const appVersion = formatSemanticVersion(getVersion());

  // Force update
  if (semver.lt(appVersion, formatSemanticVersion(minAcceptedVersion))) {
    Alert.alert(
      'Software Update',
      'There is a new software update for this application that will enhance your online experience.',
      [
        {
          text: 'Update',
          onPress: () => {
            openURLByBrowser(updateLink);
          },
        },
      ],
      {
        cancelable: false,
      },
    );
  }

  // Optional Update
  else if (semver.lt(appVersion, formatSemanticVersion(currentLiveVersion))) {
    Alert.alert(
      'Software Update',
      'There is a new software update for this application that will enhance your online experience.',
      [
        {
          text: 'Update',
          onPress: () => {
            openURLByBrowser(updateLink);
          },
        },
        {
          text: 'Cancel',
        },
      ],
      { cancelable: true },
    );
  }
};

export const checkAppVersion = async () => {
  const appVersions = await getAppVersion();
  const isAndroid = Platform.OS === 'android';
  const updateLink = isAndroid ? appVersions.androidUpdateLink : appVersions.iosUpdateLink;
  const currentLiveVersion = isAndroid
    ? appVersions.androidLiveVersion
    : appVersions.iosLiveVersion;
  const minAcceptedVersion = isAndroid ? appVersions.androidMinVersion : appVersions.iosMinVersion;
  checkForUpdate(currentLiveVersion, minAcceptedVersion, updateLink);
};
