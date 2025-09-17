import { Stack } from 'expo-router';

export default function HelpLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="chat" />
      <Stack.Screen name="feedback" />
      <Stack.Screen name="how-to-use" />
      <Stack.Screen name="faq" />
    </Stack>
  );
}
