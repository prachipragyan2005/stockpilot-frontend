import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthNavigator } from './AuthNavigator';
import { MainNavigator } from './MainNavigator';
import { useAppSelector } from '../../hooks/useAppSelector';
import { AppNavigator } from './AppNavigator';

export function RootNavigator() {
  const isAuthenticated = useAppSelector(
    (state) => state.auth.isAuthenticated,
  );

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <AppNavigator />
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
}