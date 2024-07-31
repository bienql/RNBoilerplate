import Container from 'app/components/Container';
import { Screen } from 'app/components/Screen';
import React from 'react';
import { Text } from 'react-native';
import Config from 'react-native-config';

const Home: React.FC = () => {
  return (
    <Screen headerLeft="drawer">
      <Container>
        <Text>Home</Text>
        <Text>{Config.API_URL}</Text>
      </Container>
    </Screen>
  );
};

export default Home;
