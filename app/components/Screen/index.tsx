import React from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  RefreshControl,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Props } from './props';
import { styles, presetStyles } from './styles';
import Header from '../Header';
import AppText from '../AppText';
import { color, globalStyles } from 'app/theme';

const isIos = Platform.OS === 'ios';

/**
 * The starting component on every screen in the app.
 */
export function Screen({
  type = 'scroll',
  style = {},
  backgroundColor = '#fff',
  statusBar = 'dark-content',
  headerShown = true,
  headerTitle,
  headerLeft = 'back',
  header,
  isLoading = false,
  loadingText,
  isSafeArea = false,
  children,
  enableRefreshControl,
  refreshing,
  onRefresh,
}: Props) {
  const insets = useSafeAreaInsets();
  const isScrolling = type === 'scroll';
  const preset = isScrolling ? presetStyles.scroll : presetStyles.fixed;
  const backgroundStyle = backgroundColor ? { backgroundColor: backgroundColor } : {};
  const insetStyle = { paddingTop: !isSafeArea ? 5 : insets.top };
  const Container = isSafeArea ? View : SafeAreaView;
  const containerStyle = { flex: 1, paddingTop: !isSafeArea ? 0 : insets.top };

  return (
    <KeyboardAvoidingView
      style={[preset.outer, backgroundStyle]}
      behavior={isIos ? 'padding' : undefined}
      keyboardVerticalOffset={0}>
      <StatusBar barStyle={statusBar} translucent animated />

      <Container style={containerStyle}>
        {headerShown && (header ? header : <Header title={headerTitle} left={headerLeft} />)}

        {isScrolling ? (
          <View
            style={[
              preset.outer,
              backgroundStyle,
              insetStyle,
              enableRefreshControl && { overflow: 'hidden' },
            ]}>
            <ScrollView
              nestedScrollEnabled
              refreshControl={
                enableRefreshControl ? (
                  <RefreshControl refreshing={!!refreshing} onRefresh={onRefresh} />
                ) : undefined
              }
              showsVerticalScrollIndicator={false}
              style={[preset.outer, backgroundStyle]}
              contentContainerStyle={[preset.inner, style, { flexGrow: 1 }]}>
              {children}
            </ScrollView>
          </View>
        ) : (
          <View style={[preset.inner, style, insetStyle]}>{children}</View>
        )}

        {isLoading && (
          <View style={styles.fullView}>
            <ActivityIndicator size={'large'} color={color.primary} />
            <AppText style={globalStyles.textCenter}>{loadingText}</AppText>
          </View>
        )}
      </Container>
    </KeyboardAvoidingView>
  );
}
