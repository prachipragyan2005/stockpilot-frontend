import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DashboardScreen from "../../../features/dashboard/screens/DashboardScreen";

const Stack = createNativeStackNavigator();

export function DashboardStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="DashboardHome"
        component={DashboardScreen}
      />
    </Stack.Navigator>
  );
}