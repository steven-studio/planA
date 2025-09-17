import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Alert } from 'react-native';

const Navbar = require('../../components/Navbar').default;

export default function ExploreScreen() {
  const router = useRouter();

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: () => {
            router.replace('/(auth)/login');
          }
        }
      ]
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        <View className="px-6 py-8">
          <Text className="text-3xl font-bold text-gray-900 mb-4">
            Explore
          </Text>
          <Text className="text-base text-gray-600 mb-6">
            This is an example page showing how to use the navbar component.
          </Text>
          
          <View className="bg-blue-50 rounded-xl p-4 mb-6">
            <Text className="text-blue-800 font-semibold mb-2">
              How to use the Navbar:
            </Text>
            <Text className="text-blue-700 text-sm">
              1. Import the Navbar component{'\n'}
              2. Add it at the bottom of your screen{'\n'}
              3. Pass the handleLogout function as a prop{'\n'}
              4. The navbar will automatically highlight the current screen
            </Text>
          </View>

          <View className="bg-gray-50 rounded-xl p-4">
            <Text className="text-gray-800 font-semibold mb-2">
              Available Navigation:
            </Text>
            <Text className="text-gray-600 text-sm">
              • Home - Navigate to home screen{'\n'}
              • Finance ($) - Coming soon{'\n'}
              • Chat (💬) - Coming soon{'\n'}
              • Profile (👤) - Logout functionality
            </Text>
          </View>
        </View>
      </ScrollView>
      
      {/* Bottom Navigation */}
      <Navbar onLogout={handleLogout} />
    </SafeAreaView>
  );
}
