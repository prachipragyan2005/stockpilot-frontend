import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, HelperText, Text, TextInput } from 'react-native-paper';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { registerSchema, RegisterFormData } from '../validation/register.schema';
import { useRegister } from '../hooks/useRegister';
import { AuthStackParamList } from '../../../types/navigation';

type Props = NativeStackScreenProps<AuthStackParamList, 'Register'>;

export function RegisterScreen({ navigation }: Props) {
  const registerMutation = useRegister();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = ({ confirmPassword, ...payload }: RegisterFormData) => {
    registerMutation.mutate(payload);
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Create Account</Text>

      {(['name', 'email', 'password', 'confirmPassword'] as const).map((field) => (
        <Controller
          key={field}
          control={control}
          name={field}
          render={({ field: input }) => (
            <>
              <TextInput
                mode="outlined"
                label={
                  field === 'confirmPassword'
                    ? 'Confirm Password'
                    : field.charAt(0).toUpperCase() + field.slice(1)
                }
                value={input.value}
                onChangeText={input.onChange}
                secureTextEntry={field.includes('password')}
                autoCapitalize={field === 'email' ? 'none' : 'words'}
              />
              <HelperText type="error">
                {errors[field]?.message}
              </HelperText>
            </>
          )}
        />
      ))}

      <Button
        mode="contained"
        loading={registerMutation.isPending}
        onPress={handleSubmit(onSubmit)}
      >
        Register
      </Button>

      <Button
        mode="text"
        onPress={() => navigation.goBack()}
      >
        Already have an account?
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