import { Stack } from 'expo-router';
import React from 'react';

export default function SettingsLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="change-password" />
      <Stack.Screen name="terms-conditions" />
      <Stack.Screen name="privacy-policy" />
      <Stack.Screen name="about-us" />
    </Stack>
  );
}
