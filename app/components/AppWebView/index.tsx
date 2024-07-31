import React, { forwardRef } from 'react';
import WebView, { WebViewProps } from 'react-native-webview';
import {
  AndroidLayerType,
  ContentMode,
  OnShouldStartLoadWithRequest,
  WebViewSource,
} from 'react-native-webview/lib/WebViewTypes';
import { openURLByBrowser } from 'app/utils/openURLByBrowser';

export interface Props extends WebViewProps {
  androidLayerType?: AndroidLayerType;
  automaticallyAdjustContentInsets?: boolean;
  contentMode?: ContentMode;
  showsVerticalScrollIndicator?: boolean;
  onShouldStartLoadWithRequest?: OnShouldStartLoadWithRequest;
  source: WebViewSource;
}

const AppWebView: React.FC<Props> = forwardRef(
  (
    {
      androidLayerType = 'software',
      automaticallyAdjustContentInsets = false,
      contentMode = 'desktop',
      showsVerticalScrollIndicator = false,
      onShouldStartLoadWithRequest,
      source,
      ...rest
    },
    ref,
  ) => {
    return (
      <WebView
        ref={ref}
        source={source}
        androidLayerType={androidLayerType}
        automaticallyAdjustContentInsets={automaticallyAdjustContentInsets}
        contentMode={contentMode}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        onShouldStartLoadWithRequest={(request) => {
          if (onShouldStartLoadWithRequest) {
            return onShouldStartLoadWithRequest(request);
          }

          // If user change request, open in a browser (except google recaptcha)
          if (
            request.url !== source.uri &&
            !request.url.startsWith('https://www.google.com/recaptcha') &&
            !request.url.startsWith('about:blank')
          ) {
            openURLByBrowser(request.url);
            return false;
          }

          return true;
        }}
        {...rest}
      />
    );
  },
);

export default AppWebView;
