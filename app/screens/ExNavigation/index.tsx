import { RouteProp } from '@react-navigation/native';
import { Screen } from 'app/components/Screen';
import React from 'react';
import { Text, View } from 'react-native';

interface Props {
  route: RouteProp<{ params: { id: number } }, 'params'>;
}

const ExNavigation: React.FC<Props> = ({ route }) => {
  console.log('--- ID ---', route.params?.id);

  return (
    <Screen>
      <View>
        <Text>Navigate</Text>
      </View>
    </Screen>
  );
};

export default ExNavigation;
