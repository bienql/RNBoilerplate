import React, { useCallback, useEffect } from 'react';
import { Dimensions, KeyboardAvoidingView, Platform, StatusBar, View } from 'react-native';
import Modal from 'react-native-modal';
import Text from '../AppText';
import Button from '../AppButton';
import { Props } from './props';
import styles from './styles';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight =
  Platform.OS === 'ios'
    ? Dimensions.get('window').height
    : require('react-native-extra-dimensions-android').get('REAL_WINDOW_HEIGHT');

const AppModal: React.FC<Props> = ({
  isVisible,
  image,
  title,
  description,
  okButtonTitle,
  cancelButtonTitle,
  onModalHide,
  onOkButtonPress,
  onCancelButtonPress,
  onBackdropPress,
  onBackButtonPress,
  onNegativeActionPress,
  defaultStatusBarStyle,
}) => {
  useEffect(() => {
    if (isVisible) StatusBar.setBarStyle('light-content', true);
    else if (defaultStatusBarStyle) StatusBar.setBarStyle(defaultStatusBarStyle, true);
  }, [defaultStatusBarStyle, isVisible]);

  return (
    <Modal
      onBackButtonPress={useCallback(() => {
        if (onBackButtonPress) onBackButtonPress();
        if (onNegativeActionPress) onNegativeActionPress();
      }, [onBackButtonPress, onNegativeActionPress])}
      style={styles.modal}
      isVisible={isVisible}
      deviceWidth={deviceWidth}
      deviceHeight={deviceHeight}
      onModalHide={onModalHide}
      statusBarTranslucent
      useNativeDriverForBackdrop
      onBackdropPress={useCallback(() => {
        if (onBackdropPress) onBackdropPress();
        if (onNegativeActionPress) onNegativeActionPress();
      }, [onBackdropPress, onNegativeActionPress])}>
      <KeyboardAvoidingView behavior="position" enabled>
        <View style={styles.modalBody}>
          {image}

          <Text type="bold" size={14} style={styles.modalTitle}>
            {title}
          </Text>

          {typeof description === 'string' ? (
            <Text size={14} style={styles.modalDescription}>
              {description}
            </Text>
          ) : (
            description
          )}

          {okButtonTitle && (
            <Button
              width="100%"
              height={34}
              textStyle={styles.textStyle}
              containerStyle={styles.modalButtonOk}
              text={okButtonTitle}
              onPress={onOkButtonPress}
            />
          )}

          {cancelButtonTitle && (
            <Button
              type="link"
              width="100%"
              height={34}
              textStyle={styles.textStyle}
              containerStyle={styles.modalButtonCancel}
              text={cancelButtonTitle}
              onPress={() => {
                if (onCancelButtonPress) onCancelButtonPress();
                if (onNegativeActionPress) onNegativeActionPress();
              }}
            />
          )}
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default AppModal;
