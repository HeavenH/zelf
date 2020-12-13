import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import News from '../screens/Home';

const Stack = createStackNavigator();

const StackRoutes: React.FC = () => {
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        transitionSpec: {
          open: config,
          close: config,
        },
      }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="news" component={News} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
