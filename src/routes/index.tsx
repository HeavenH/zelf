import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackRoutes from './stackRoutes';

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
};

export default Routes;
