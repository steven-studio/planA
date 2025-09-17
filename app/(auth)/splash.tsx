import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Image, SafeAreaView, ScrollView, View } from 'react-native';

const SplashScreen: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      // Navigate to onboarding screen
      router.replace('/(auth)/onboarding');
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <SafeAreaView className="flex-1 bg-blue-900">
      <StatusBar style="light" />
      <ScrollView className="flex-1">
        <View className="flex-row mb-80">
         
        </View>
        <View className="items-center">
          <Image
            source={require('../../assets/images/logo.png')}
            resizeMode="contain"
            className="w-60 h-60 mb-96"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SplashScreen;