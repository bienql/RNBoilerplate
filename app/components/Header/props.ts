import React from 'react';

export type HeaderLeftValue = 'back' | 'drawer' | React.ReactElement;

export interface Props {
  /**
   * Header title.
   */
  title?: string;

  /**
   * Left components.
   * Using 'back' value will display back button.
   * Using 'drawer' value will display hamburger button.
   * Using ReactElement for custom display.
   */
  left?: HeaderLeftValue;

  /**
   * Middle component if dont' use title.
   */
  middle?: React.ReactElement;

  /**
   * Right component.
   */
  right?: React.ReactElement;

  /**
   * On back button press if left components is not changed.
   */
  onBackButtonPress?: () => void;

  /**
   * Set back button clickable when loading or not.
   */
  backButtonClickableWhenLoading?: boolean;
}
