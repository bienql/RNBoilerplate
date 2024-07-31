import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SCREEN } from 'app/navigation/screenNames';
import ExImage from 'app/screens/ExImage';
import Home from 'app/screens/Home';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const HomeTab: React.FC = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,

          tabBarLabelStyle: {
            paddingBottom: 2,
          },

          tabBarIcon: ({ color, size }) => {
            let iconName = '';

            switch (route.name) {
              case SCREEN.HOME:
                iconName = 'home';
                break;
              case SCREEN.EX_IMAGE:
                iconName = 'image';
                break;
              default:
                return null;
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name={SCREEN.HOME} component={Home} />
        <Tab.Screen name={SCREEN.EX_IMAGE} component={ExImage} />
      </Tab.Navigator>
    </>
  );
};

export default HomeTab;
