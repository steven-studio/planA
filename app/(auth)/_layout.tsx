import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

export default function AuthLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="splash" />
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="login" />
        <Stack.Screen name="register" />
        <Stack.Screen name="create-profile" />
        <Stack.Screen name="upload-camera" />
        <Stack.Screen name="upload-gallery" />
        <Stack.Screen name="otp" />
        <Stack.Screen name="forgot-password" />
        <Stack.Screen name="change-password" />
      </Stack>
    </>
  );
} 