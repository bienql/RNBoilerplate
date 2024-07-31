import { goBack, openDrawer } from 'app/navigation/rootNavigation';
import { color } from 'app/theme';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Text from '../AppText';
import { Props } from './props';
import styles from './styles';

const Header: React.FC<Props> = ({
  title,
  left,
  middle,
  right,
  onBackButtonPress = () => goBack(),
}) => {
  let leftComponent = null;

  if (left === 'back') {
    leftComponent = (
      <TouchableOpacity style={[styles.backButton]} onPress={onBackButtonPress}>
        <Icon name="chevron-left" size={30} color={color.primary} />
      </TouchableOpacity>
    );
  } else if (left === 'drawer') {
    leftComponent = (
      <TouchableOpacity style={[styles.backButton]} onPress={openDrawer}>
        <Icon name="bars" size={30} color={color.primary} />
      </TouchableOpacity>
    );
  } else {
    leftComponent = left;
  }

  return (
    <View style={styles.container}>
      <View style={styles.left}>{leftComponent}</View>

      <View style={styles.middle}>
        {middle ? (
          middle
        ) : (
          <Text text={title} type="bold" size={16} lineHeight={21} style={styles.title} />
        )}
      </View>

      <View style={styles.right}>{right}</View>
    </View>
  );
};

export default Header;
