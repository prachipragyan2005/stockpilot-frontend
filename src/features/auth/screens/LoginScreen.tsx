import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, HelperText, Text, TextInput } from 'react-native-paper';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { useLogin } from '../hooks/useLogin';
import { loginSchema, LoginFormData } from '../validation/login.schema';
import { AuthStackParamList } from '../../../types/navigation';

type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

export function LoginScreen({ navigation }: Props) {
  const loginMutation = useLogin();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: LoginFormData) => {
    loginMutation.mutate(data);
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">
        Welcome Back
      </Text>

      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <>
            <TextInput
              mode="outlined"
              label="Email"
              value={field.value}
              onChangeText={field.onChange}
              autoCapitalize="none"
            />
            <HelperText type="error">
              {errors.email?.message}
            </HelperText>
          </>
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <>
            <TextInput
              mode="outlined"
              label="Password"
              secureTextEntry
              value={field.value}
              onChangeText={field.onChange}
            />
            <HelperText type="error">
              {errors.password?.message}
            </HelperText>
          </>
        )}
      />

      <Button
        mode="contained"
        loading={loginMutation.isPending}
        onPress={handleSubmit(onSubmit)}
      >
        Login
      </Button>

      <Button
        mode="text"
        onPress={() => navigation.navigate('Register')}
      >
        Create Account
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    gap: 16,
  },
});