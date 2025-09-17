import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { otpStore } from './login';

const ForgotPasswordScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSendOtp = async () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email address');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    try {
      setLoading(true);
      
      // Generate OTP for password reset
      const otp = Math.floor(1000 + Math.random() * 9000).toString();
      
      // Store OTP in memory with email as key
      otpStore.set(email, {
        otp,
        createdAt: new Date(),
        attempts: 0,
        isPasswordReset: true
      });
      
      // Show OTP for development purposes
      console.log(`Password reset OTP for ${email}: ${otp}`);
      Alert.alert('Development Mode', `Your password reset OTP is: ${otp}`);
      
      // Navigate to OTP verification screen
      router.push({
        pathname: '/(auth)/otp',
        params: { 
          identifier: email,
          isPhone: 'false',
          isPasswordReset: 'true'
        }
      });
      
      setLoading(false);
    } catch (error) {
      Alert.alert('Error', 'Failed to send OTP. Please try again.');
      setLoading(false);
    }
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
                <Text className="text-3xl font-bold text-white mb-2">Forgot Password?</Text>
                <Text className="text-base text-white/80">Enter your email to reset your password</Text>
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

              <Text className="text-base font-medium text-gray-700 mb-2">Email Address</Text>
              <TextInput
                mode="outlined"
                placeholder="Enter your email address"
                value={email}
                onChangeText={setEmail}
                style={{ marginBottom: 24, backgroundColor: '#FFFFFF', height: 56 }}
                keyboardType="email-address"
                autoCapitalize="none"
                outlineColor="#E5E5E5"
                activeOutlineColor="#6366F1"
              />

              <Button
                mode="contained"
                onPress={handleSendOtp}
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
                Send OTP
              </Button>

              {/* Info Text */}
              <View className="bg-blue-50 rounded-xl p-4 mb-6">
                <Text className="text-blue-800 text-sm text-center">
                  We'll send a 4-digit verification code to your email address to reset your password.
                </Text>
              </View>

              {/* Footer */}
              <View className="flex-row justify-center mt-auto mb-6">
                <Text className="text-gray-600 text-base">Remember your password? </Text>
                <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
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

export default ForgotPasswordScreen;
