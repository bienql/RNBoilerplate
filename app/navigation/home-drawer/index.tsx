import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeTab from './home-tab';
import DrawerContent from './DrawerContent';
import ExImage from 'app/screens/ExImage';
import { SCREEN } from '../screenNames';
import ExAPI from 'app/screens/ExAPI';
import ExWebview from 'app/screens/ExWebView';

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        swipeEnabled: false,
        drawerType: 'front',
      }}
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name={SCREEN.HOME_TAB} component={HomeTab} />
      <Drawer.Screen name={SCREEN.EX_IMAGE} component={ExImage} />
      <Drawer.Screen name={SCREEN.EX_API} component={ExAPI} />
      <Drawer.Screen name={SCREEN.EX_WEBVIEW} component={ExWebview} />
    </Drawer.Navigator>
  );
};

export default HomeDrawer;
