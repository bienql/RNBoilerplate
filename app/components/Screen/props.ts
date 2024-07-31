import React from 'react';
import { ViewStyle } from 'react-native';
import { HeaderLeftValue } from '../Header/props';

export interface Props {
  /**
   * Display loading status. Default to false.
   */
  isLoading?: boolean;

  /**
   * Text display when loading.
   */
  loadingText?: string;

  /**
   * Show header or not. Default to true.
   */
  headerShown?: boolean;

  /**
   * Custom header.
   */
  header?: React.ReactElement;

  /**
   * Using default header with custom title.
   */
  headerTitle?: string;

  /**
   * Using default header with custom left.
   */
  headerLeft?: HeaderLeftValue;

  /**
   * Children components.
   */
  children: React.ReactElement | React.ReactElement[];

  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle;

  /**
   * One of the different types of presets.
   */
  type?: 'fixed' | 'scroll';

  /**
   * An optional background color
   */
  backgroundColor?: string;

  /**
   * An optional status bar setting. Defaults to light-content.
   */
  statusBar?: 'light-content' | 'dark-content';

  /**
   * Should we wrap in SafeAreaView.
   */
  isSafeArea?: boolean;

  /**
   * On back button press if left components is not changed
   */
  onBackButtonPress?: () => void;

  /**
   * Enable refresh control on scroll screen
   */
  enableRefreshControl?: boolean;

  /**
   * refresh control isRefreshing state
   */
  refreshing?: boolean;

  /**
   * run when refreshing
   */
  onRefresh?: () => void;
}
