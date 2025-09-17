import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

// For development only - OTP storage
export const otpStore = new Map();

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email');
      return;
    }

    if (!password) {
      Alert.alert('Error', 'Please enter your password');
      return;
    }

    try {
      setLoading(true);

      // For development, check if it's a test account
      if (email === 'test@example.com' && password === 'password') {
        // Direct login
        router.replace('/(tabs)');
        setLoading(false);
        return;
      }

      // Generate OTP for email verification
      const otp = Math.floor(1000 + Math.random() * 9000).toString();

      // Store OTP in memory
      otpStore.set(email, {
        otp,
        createdAt: new Date(),
        attempts: 0
      });

      // Show OTP for development purposes
      console.log(`OTP for ${email}: ${otp}`);
      Alert.alert('Development Mode', `Your OTP is: ${otp}`);

      // Navigate to OTP verification screen
      router.push({
        pathname: '/(auth)/otp',
        params: {
          identifier: email,
          isPhone: 'false'
        }
      });

      setLoading(false);
    } catch (error) {
      Alert.alert('Login Failed', 'Failed to login. Please try again.');
      setLoading(false);
    }
  };

  // Handle Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      // For development purposes, show a dialog
      Alert.alert(
        'Google Sign-In',
        'This is a development placeholder for Google Sign-In',
        [
          {
            text: 'Cancel',
            style: 'cancel'
          },
          {
            text: 'Sign In',
            onPress: () => {
              // Simulate loading state
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
                // Simulate a successful Google sign-in
                const mockGoogleUser = {
                  email: 'google.user@example.com',
                  name: 'Google User',
                  id: '123456789'
                };
                console.log("Google sign-in success:", mockGoogleUser);
                router.replace('/(tabs)');
              }, 1500);
            }
          }
        ]
      );
    } catch (error: any) {
      console.log("Google sign in error:", error);
      Alert.alert('Google Sign-In Failed', 'Please try again.');
    }
  };

  // Handle Apple Sign-In
  const handleAppleSignIn = async () => {
    try {
      // In a real implementation, you would use AppleAuthentication here
      // For now, we'll show a development authentication dialog
      Alert.alert(
        'Apple Sign-In',
        'This is a development placeholder for Apple Sign-In',
        [
          {
            text: 'Cancel',
            style: 'cancel'
          },
          {
            text: 'Sign In',
            onPress: () => {
              // Simulate loading state
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
                router.replace('/(tabs)');
              }, 1500);
            }
          }
        ]
      );
    } catch (error: any) {
      console.log("Apple sign in error:", error);
      Alert.alert('Apple Sign-In Failed', 'Please try again.');
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
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
                <Text className="text-3xl font-bold text-white mb-2">Welcome Back</Text>
                <Text className="text-base text-white/80">Enter your email and password to login</Text>
              </View>
            </View>
            
            {/* Form Section */}
            <View className="px-6 py-8 bg-white rounded-t-3xl -mt-6 relative z-10 flex-1">
              <Text className="text-base font-medium text-gray-700 mb-2">Email</Text>
              <TextInput
                mode="outlined"
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                style={{ marginBottom: 16, backgroundColor: '#FFFFFF', height: 56 }}
                keyboardType="email-address"
                autoCapitalize="none"
                outlineColor="#E5E5E5"
                activeOutlineColor="#6366F1"
              />

              <Text className="text-base font-medium text-gray-700 mb-2">Password</Text>
              <TextInput
                mode="outlined"
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                style={{ marginBottom: 16, backgroundColor: '#FFFFFF', height: 56 }}
                secureTextEntry={!showPassword}
                outlineColor="#E5E5E5"
                activeOutlineColor="#6366F1"
                right={
                  <TextInput.Icon
                    icon={showPassword ? "eye-off" : "eye"}
                    onPress={toggleShowPassword}
                    color="#9CA4AB"
                  />
                }
              />
              
              <TouchableOpacity
                className="self-end mb-5"
                onPress={() => router.push('/(auth)/forgot-password')}
              >
                <Text className="text-blue-600 text-sm font-medium">Forgot Password?</Text>
              </TouchableOpacity>

              <Button
                mode="contained"
                onPress={handleLogin}
                style={{
                  marginTop: 8,
                  backgroundColor: '#1E40AF',
                  borderRadius: 12,
                  height: 56
                }}
                contentStyle={{ height: 56 }}
                loading={loading}
                disabled={loading}
                labelStyle={{ fontSize: 16, fontWeight: '600', color: '#FFFFFF' }}
              >
                Login
              </Button>

              {/* Divider */}
              <View className="flex-row items-center my-6">
                <View className="flex-1 h-px bg-gray-200" />
                <Text className="mx-4 text-gray-500 text-sm">or continue with</Text>
                <View className="flex-1 h-px bg-gray-200" />
              </View>

              {/* Social Login Buttons */}
              <View className="flex-row justify-between mb-6 space-x-3">
                <TouchableOpacity
                  className="flex-1 flex-row items-center justify-center h-14 rounded-xl bg-white border border-gray-200 mx-1"
                  onPress={handleGoogleSignIn}
                  style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 1 }}
                >
                  <Image
                    source={require('../../assets/images/google.png')}
                    style={{ width: 24, height: 24, marginRight: 12 }}
                    contentFit="contain"
                  />
                  <Text className="text-gray-700 font-medium text-base">Google</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="flex-1 flex-row items-center justify-center h-14 rounded-xl bg-white border border-gray-200 mx-1"
                  onPress={handleAppleSignIn}
                  style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 1 }}
                >
                  <Image
                    source={require('../../assets/images/apple.png')}
                    style={{ width: 24, height: 24, marginRight: 12 }}
                    contentFit="contain"
                  />
                  <Text className="text-gray-700 font-medium text-base">Apple</Text>
                </TouchableOpacity>
              </View>

              {/* Footer */}
              <View className="flex-row justify-center mt-auto mb-6">
                <Text className="text-gray-600 text-base">Don't have an account? </Text>
                <TouchableOpacity onPress={() => router.push('/(auth)/register')}>
                  <Text className="text-blue-800 font-semibold text-base">Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};



export default LoginScreen; 