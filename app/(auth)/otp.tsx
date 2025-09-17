import { Image } from 'expo-image';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, Animated, KeyboardAvoidingView, Platform, TextInput as RNTextInput, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-paper';
import Svg, { Circle } from 'react-native-svg';
import { otpStore } from './login';

const TIMER_DURATION = 30; // seconds
const CIRCLE_LENGTH = 250; // Circumference of the circle
const CIRCLE_RADIUS = CIRCLE_LENGTH / (2 * Math.PI);

const OTPScreen: React.FC = () => {
  const { identifier, isPhone, isRegistration, isPasswordReset } = useLocalSearchParams();
  const [otp, setOtp] = useState(['', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(TIMER_DURATION);
  const router = useRouter();
  
  // Animation values for the circular timer
  const animatedValue = useRef(new Animated.Value(0)).current;
  const circleRef = useRef<Circle>(null);
  
  const inputRefs = [
    useRef<RNTextInput>(null),
    useRef<RNTextInput>(null),
    useRef<RNTextInput>(null),
    useRef<RNTextInput>(null),
  ];

  useEffect(() => {
    // Auto-focus first input
    inputRefs[0].current?.focus();
    
    // Start timer animation
    startTimer();
    
    return () => {
      animatedValue.stopAnimation();
    };
  }, []);
  
  const startTimer = () => {
    // Reset timer
    setTimer(TIMER_DURATION);
    
    // Start animation
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: TIMER_DURATION * 1000,
      useNativeDriver: true,
    }).start();
    
    // Start countdown timer
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
    
    return () => clearInterval(interval);
  };

  const handleOtpChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    
    // Auto-focus next input
    if (text && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    // Move to previous input on backspace
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handleVerifyOtp = async () => {
    const otpValue = otp.join('');
    
    if (otpValue.length !== 4) {
      Alert.alert('Error', 'Please enter a valid OTP');
      return;
    }

    try {
      setLoading(true);
      
      // Check OTP from local store
      const id = identifier as string;
      const storedData = otpStore.get(id);
      
      if (storedData && storedData.otp === otpValue) {
        // OTP is valid
        otpStore.delete(id);

        if (isPasswordReset === 'true') {
          // Password reset flow
          router.push({
            pathname: '/(auth)/change-password',
            params: { email: id }
          });
        } else if (isRegistration === 'true') {
          // Registration flow - would create user account in real app
          Alert.alert('Success', 'Account created successfully!', [
            { text: 'OK', onPress: () => router.replace('/(tabs)') }
          ]);
        } else {
          // Login flow
          router.replace('/(tabs)');
        }
      } else {
        // Invalid OTP
        Alert.alert('Verification Failed', 'Invalid OTP. Please try again.');
      }
      
      setLoading(false);
    } catch (error) {
      Alert.alert('Verification Failed', 'Invalid OTP. Please try again.');
      setLoading(false);
    }
  };

  const handleResendOtp = () => {
    if (timer > 0) return;
    
    // Generate new OTP
    const id = identifier as string;
    const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
    
    // Store new OTP
    const existingData = otpStore.get(id);
    otpStore.set(id, {
      ...existingData,
      otp: newOtp,
      createdAt: new Date(),
      attempts: 0
    });
    
    // Show OTP for development
    console.log(`New OTP for ${id}: ${newOtp}`);
    Alert.alert('Development Mode', `Your new OTP is: ${newOtp}`);
    
    // Reset and start timer animation
    animatedValue.setValue(0);
    startTimer();
  };

  // Calculate the stroke dash offset for the circle
  const strokeDashoffset = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, CIRCLE_LENGTH],
    extrapolate: 'clamp',
  });

  // Get display text for verification method
  const getVerificationMethodText = () => {
    if (isPhone === 'true') {
      return `Enter the 4-digit code sent to ${identifier}`;
    } else {
      return `Enter the 4-digit code sent to your email`;
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
                <Text className="text-3xl font-bold text-white mb-2">OTP Verification</Text>
                <Text className="text-base text-white/80">{getVerificationMethodText()}</Text>
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

              {/* OTP Input Section */}
              <View className="flex-row justify-between mb-10">
                {otp.map((digit, index) => (
                  <View key={index} className="w-16 h-16 rounded-xl bg-gray-50 border border-gray-200 justify-center items-center">
                    <RNTextInput
                      ref={inputRefs[index]}
                      className="w-full h-full text-center text-2xl font-bold text-gray-900"
                      value={digit}
                      onChangeText={(text) => handleOtpChange(text, index)}
                      onKeyPress={(e) => handleKeyPress(e, index)}
                      keyboardType="number-pad"
                      maxLength={1}
                    />
                  </View>
                ))}
              </View>

              <Button
                mode="contained"
                onPress={handleVerifyOtp}
                style={{
                  backgroundColor: '#1E40AF',
                  borderRadius: 12,
                  height: 56,
                  marginBottom: 40
                }}
                contentStyle={{ height: 56 }}
                loading={loading}
                disabled={loading}
                labelStyle={{ fontSize: 16, fontWeight: 'bold' }}
              >
                Verify OTP
              </Button>

              {/* Circular Timer */}
              <View className="items-center justify-center mb-8">
                <Svg width={120} height={120} viewBox={`0 0 ${120} ${120}`}>
                  {/* Background Circle */}
                  <Circle
                    cx={60}
                    cy={60}
                    r={CIRCLE_RADIUS}
                    stroke="#E5E5E5"
                    strokeWidth={8}
                    fill="none"
                  />
                  {/* Animated Circle */}
                  <AnimatedCircle
                    ref={circleRef}
                    cx={60}
                    cy={60}
                    r={CIRCLE_RADIUS}
                    stroke="#1E40AF"
                    strokeWidth={8}
                    fill="none"
                    strokeDasharray={CIRCLE_LENGTH}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                  />
                </Svg>
                <View className="absolute justify-center items-center">
                  <Text className="text-4xl font-bold text-gray-900">{timer}</Text>
                  <Text className="text-xs text-gray-500">seconds</Text>
                </View>
              </View>

              <View className="flex-row justify-center">
                <Text className="text-gray-600 text-base">Didn't receive the code? </Text>
                <TouchableOpacity
                  onPress={handleResendOtp}
                  disabled={timer > 0}
                >
                  <Text className={timer > 0 ? "text-gray-400 text-base" : "text-blue-700 font-bold text-base"}>
                    Resend
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

// Create an animated circle component
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default OTPScreen;