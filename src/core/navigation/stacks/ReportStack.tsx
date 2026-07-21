import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ReportScreen from "../../../features/reports/screens/ReportScreen";
import TransactionHistoryScreen from "../../../features/reports/screens/TransactionHistoryScreen";
import AppHeader from "../../../components/common/AppHeader";
import { useAppTheme } from "../../theme/useAppTheme";

const Stack = createNativeStackNavigator();

export function ReportStack() {
  const { colors } = useAppTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ReportHome"
        component={ReportScreen}
        options={{
          header: () => <AppHeader title="Reports" />,
        }}
      />

      <Stack.Screen
        name="TransactionHistory"
        component={TransactionHistoryScreen}
        options={{
          title: "Transaction History",
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