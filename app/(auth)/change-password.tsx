import { Image } from 'expo-image';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const ChangePasswordScreen: React.FC = () => {
  const { email } = useLocalSearchParams();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const handleChangePassword = async () => {
    if (!newPassword || !confirmPassword) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    if (newPassword.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters long');
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    try {
      setLoading(true);
      
      // Simulate API call to change password
      console.log('Changing password for:', email);
      console.log('New password:', newPassword);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      Alert.alert('Success', 'Password changed successfully!', [
        {
          text: 'OK',
          onPress: () => router.replace('/(auth)/login')
        }
      ]);
      
      setLoading(false);
    } catch (error) {
      Alert.alert('Error', 'Failed to change password. Please try again.');
      setLoading(false);
    }
  };

  const toggleShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View className="flex-1">
            {/* Auth Background Image */}
            <View className="relative h-72">
              <Image
                source={require('../../assets/images/auth/bg.png')}
                className="w-full h-full"
                contentFit="cover"
                style={{ width: '100%', height: '100%' }}
              />
              <View className="absolute inset-0 bg-black/20" />
              <View className="absolute bottom-8 left-6 right-6">
                <Text className="text-3xl font-bold text-white mb-2">Reset Password</Text>
                <Text className="text-base text-white/80">Please enter your new password</Text>
              </View>
            </View>
            
            {/* Form Section */}
            <View className="px-6 py-8 bg-white rounded-t-3xl -mt-6 relative z-10 flex-1">
              {/* Back Button */}
              <TouchableOpacity
                className="mb-6"
                onPress={() => router.back()}
              >
                <Text className="text-base text-gray-600 font-medium">← Back</Text>
              </TouchableOpacity>

              <Text className="text-base font-medium text-gray-700 mb-2">New Password</Text>
              <TextInput
                mode="outlined"
                placeholder="Enter new password"
                value={newPassword}
                onChangeText={setNewPassword}
                style={{ marginBottom: 16, backgroundColor: '#FFFFFF', height: 56 }}
                secureTextEntry={!showNewPassword}
                outlineColor="#E5E5E5"
                activeOutlineColor="#6366F1"
                right={
                  <TextInput.Icon
                    icon={showNewPassword ? "eye-off" : "eye"}
                    onPress={toggleShowNewPassword}
                    color="#9CA4AB"
                  />
                }
              />

              <Text className="text-base font-medium text-gray-700 mb-2">Confirm New Password</Text>
              <TextInput
                mode="outlined"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                style={{ marginBottom: 24, backgroundColor: '#FFFFFF', height: 56 }}
                secureTextEntry={!showConfirmPassword}
                outlineColor="#E5E5E5"
                activeOutlineColor="#6366F1"
                right={
                  <TextInput.Icon
                    icon={showConfirmPassword ? "eye-off" : "eye"}
                    onPress={toggleShowConfirmPassword}
                    color="#9CA4AB"
                  />
                }
              />

              <Button
                mode="contained"
                onPress={handleChangePassword}
                style={{
                  marginTop: 8,
                  backgroundColor: '#1E40AF',
                  borderRadius: 12,
                  height: 56,
                  marginBottom: 24
                }}
                contentStyle={{ height: 56 }}
                loading={loading}
                disabled={loading}
                labelStyle={{ fontSize: 16, fontWeight: '600', color: '#FFFFFF' }}
              >
                Change Password
              </Button>

              {/* Password Requirements */}
              <View className="bg-gray-50 rounded-xl p-4 mb-6">
                <Text className="text-gray-700 font-medium mb-2">Password Requirements:</Text>
                <Text className="text-gray-600 text-sm">• At least 6 characters long</Text>
                <Text className="text-gray-600 text-sm">• Must contain letters and numbers</Text>
                <Text className="text-gray-600 text-sm">• Avoid common passwords</Text>
              </View>

              {/* Footer */}
              <View className="flex-row justify-center mt-auto mb-6">
                <Text className="text-gray-600 text-base">Remember your password? </Text>
                <TouchableOpacity onPress={() => router.replace('/(auth)/login')}>
                  <Text className="text-blue-800 font-semibold text-base">Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChangePasswordScreen;
