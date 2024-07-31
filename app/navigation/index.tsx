import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExAPI from 'app/screens/ExAPI';
import ExImage from 'app/screens/ExImage';
import ExWebview from 'app/screens/ExWebView';
import Login from 'app/screens/Login';
import { checkAppVersion } from 'app/utils/checkForUpdate';
import React, { useEffect, useRef } from 'react';
import { AppState } from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import HomeDrawer from './home-drawer';
import { navigationRef } from './rootNavigation';
import { SCREEN } from './screenNames';

const Stack = createNativeStackNavigator();
interface NavigationProps {
  initialRouteName: string;
  initialRouteId: string;
}
const Navigation: React.FC<NavigationProps> = ({ initialRouteName }) => {
  const appState = useRef(AppState.currentState);

  // Check app version when app boot or change state
  useEffect(() => {
    checkAppVersion();

    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
        checkAppVersion();
      }

      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const onNavigationReady = async () => {
    // Slowdown hide splash screen 1 second
    setTimeout(() => {
      RNBootSplash.hide({ fade: true });
    }, 1000);
  };

  return (
    <NavigationContainer ref={navigationRef} onReady={onNavigationReady}>
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={SCREEN.HOME_DRAWER} component={HomeDrawer} />
        <Stack.Screen name={SCREEN.EX_API} component={ExAPI} />
        <Stack.Screen name={SCREEN.EX_IMAGE} component={ExImage} />
        <Stack.Screen name={SCREEN.EX_WEBVIEW} component={ExWebview} />
        <Stack.Screen name={SCREEN.LOGIN} component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
