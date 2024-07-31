import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import AppText from 'app/components/AppText';
import { selectAccessToken } from 'app/store/auth.slice';
import React from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { SCREEN } from '../screenNames';
import styles from './styles';

const DrawerContent = ({ navigation }: DrawerContentComponentProps) => {
  const accessToken = useSelector(selectAccessToken);
  const isLogin = accessToken !== '';

  const navigate = (screenName: string, params?: any) => {
    navigation.navigate(screenName, params);
    navigation.closeDrawer();
  };

  return (
    <>
      <DrawerContentScrollView>
        <SafeAreaView>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => navigate(SCREEN.HOME)}>
              <View style={styles.item}>
                <AppText text="Home" size={12} type={'medium'} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => navigate(SCREEN.HOME_TAB, { screen: SCREEN.EX_IMAGE })}>
              <View style={styles.item}>
                <AppText text="Image example" size={12} type={'medium'} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.container}>
            <TouchableOpacity onPress={() => navigate(SCREEN.EX_WEBVIEW)}>
              <View style={styles.item}>
                <AppText text="Webview example" size={12} type={'medium'} />
              </View>
            </TouchableOpacity>
          </View>

          {isLogin && (
            <View style={[styles.logOut]}>
              <View style={styles.divider} />

              <View style={styles.item}>
                <AppText text="Log out" size={16} type={'bold'} />
              </View>
            </View>
          )}
        </SafeAreaView>
      </DrawerContentScrollView>
    </>
  );
};

export default DrawerContent;
