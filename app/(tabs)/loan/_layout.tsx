import { Stack } from 'expo-router';

export default function LoanLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="apply" />
      <Stack.Screen name="repay" />
    </Stack>
  );
}
