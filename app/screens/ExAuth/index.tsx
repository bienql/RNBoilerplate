import { Screen } from 'app/components/Screen';
import React from 'react';
import { Text, View } from 'react-native';

const ExAuth: React.FC = () => {
  return (
    <Screen headerLeft={'drawer'}>
      <View>
        <Text>Need authorize</Text>
      </View>
    </Screen>
  );
};

export default ExAuth;
