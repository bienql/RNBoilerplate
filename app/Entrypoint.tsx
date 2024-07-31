import React, { useEffect, useState } from 'react';
import Navigation from './navigation';
import { store } from 'app/store';
import { Provider, useDispatch } from 'react-redux';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import dynamicLinks, { FirebaseDynamicLinksTypes } from '@react-native-firebase/dynamic-links';
import messaging from '@react-native-firebase/messaging';
import { navigate } from './navigation/rootNavigation';
import {
  getScreenToNavigateDynamicLinks,
  getScreenToNavigateNotification,
  getDataFromDynamicLinks,
} from './utils/checkScreenToNavigate';
import { STORAGE } from './utils/storage';
import { ACCESS_TOKEN_KEY } from './config/storage_key';
import { setAccessToken } from './store/auth.slice';
import { SCREEN } from './navigation/screenNames';

const BootScreen: React.FC = () => {
  const [isLoading, setLoading] = useState(true);
  const [initialRouteName, setInitialRouteName] = useState(SCREEN.HOME_DRAWER);
  const [initialRouteId, setInitialRouteId] = useState<any>(null);
  const dispatch = useDispatch();

  // Handle push notifications & dynamic links when app in quit state
  useEffect(() => {
    const init = async () => {
      // Request permission to receive push notification on iOS
      const requestNotificationPermission = async () => {
        const authorizationStatus = await messaging().requestPermission();
        console.log('Notification authorization status', authorizationStatus);
      };
      await requestNotificationPermission();

      // Get access token from storage
      const token = await STORAGE.getData(ACCESS_TOKEN_KEY);

      const handleNotificationBackground = messaging()
        .getInitialNotification()
        .then((remoteMessage) => {
          if (remoteMessage) {
            const category = remoteMessage?.data?.category;
            const id = remoteMessage?.data?.ID || null;
            let destinationScreen = getScreenToNavigateNotification(category, id);

            if (id !== null) {
              setInitialRouteId(id);
            }
            setInitialRouteName(destinationScreen);
          }
        })
        .catch((err) => console.log(err));

      const handleDynamicLinkBackground = dynamicLinks()
        .getInitialLink()
        .then((link) => {
          const { id, category } = getDataFromDynamicLinks(link?.url);
          const screen = getScreenToNavigateDynamicLinks(category);

          if (id !== null) {
            setInitialRouteId(id);
          }
          setInitialRouteName(screen);
        })
        .catch((err) => console.log(err));

      return Promise.all([
        dispatch(setAccessToken(token)),
        handleNotificationBackground,
        handleDynamicLinkBackground,
      ]);
    };

    // Render navigation
    init().finally(() => {
      setLoading(false);
    });
  }, [dispatch]);

  // Handle notification pressed when app in foreground
  useEffect(() => {
    messaging().onNotificationOpenedApp((remoteMessage) => {
      if (remoteMessage) {
        const category = remoteMessage?.data?.category;
        const id = remoteMessage?.data?.ID || null;

        const screen = getScreenToNavigateNotification(category, id);

        if (id != null) {
          navigate(screen, { id });
        } else {
          navigate(screen);
        }
      }
    });

    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      console.log('--- on Message', remoteMessage);
    });

    return unsubscribe;
  }, []);

  // Handle dynamic links when app in foreground
  useEffect(() => {
    const unsubscribe = dynamicLinks().onLink((link: FirebaseDynamicLinksTypes.DynamicLink) => {
      const { id, category } = getDataFromDynamicLinks(link?.url);
      const screen = getScreenToNavigateDynamicLinks(category);

      navigate(screen, { id });
    });

    // When the component is unmounted, remove the listener
    return () => unsubscribe();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Navigation initialRouteName={initialRouteName} initialRouteId={initialRouteId} />
    </SafeAreaProvider>
  );
};

const EntryPoint: React.FC = () => {
  return (
    <Provider store={store}>
      <BootScreen />
    </Provider>
  );
};

export default EntryPoint;
