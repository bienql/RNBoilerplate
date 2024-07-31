import { Screen } from 'app/components/Screen';
import React from 'react';
import { Text, View } from 'react-native';

const ExImage: React.FC = () => {
  return (
    <Screen headerLeft={'drawer'}>
      <View>
        <Text>Image</Text>
      </View>
    </Screen>
  );
};

export default ExImage;
