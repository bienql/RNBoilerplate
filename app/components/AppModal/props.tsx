import { ReactElement } from 'react';

export interface Props {
  isVisible: boolean;
  image: ReactElement;
  title: string;
  description: string | ReactElement;
  okButtonTitle: string;
  cancelButtonTitle?: string;
  onModalHide?: () => void;
  onOkButtonPress: () => void;
  onCancelButtonPress?: () => void;
  onBackdropPress?: () => void;
  onBackButtonPress?: () => void;
  onNegativeActionPress?: () => void; // onCancelButtonPress, onBackdropPress and onBackButtonPress combine into 1
  defaultStatusBarStyle?: 'light-content' | 'dark-content' | 'default';
}
