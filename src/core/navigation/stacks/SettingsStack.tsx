import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SettingsScreen from "../../../features/settings/screens/SettingsScreen";
import ProfileScreen from "../../../features/settings/screens/ProfileScreen";
import AppHeader from "../../../components/common/AppHeader";
import { useAppTheme } from "../../theme/useAppTheme";

const Stack = createNativeStackNavigator();

export function SettingsStack() {
  const { colors } = useAppTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SettingsHome"
        component={SettingsScreen}
        options={{
          header: () => <AppHeader title="Settings" />,
        }}
      />

      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.onPrimary,
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: 18,
          },
        }}
      />
    </Stack.Navigator>
  );
}