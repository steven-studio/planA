import { useRouter } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function TermsConditionsScreen() {
	const router = useRouter();

	const handleBackPress = () => {
		router.back();
	};

	return (
		<SafeAreaView className="flex-1 bg-white">
			<ScrollView className="flex-1 bg-white">
				{/* Header with back button and centered title - Added extra top padding for all screen sizes */}
				<View className="flex-row items-center justify-center px-6 py-6 pt-12 mb-8 relative">
					<TouchableOpacity 
						onPress={handleBackPress}
						className="absolute left-6">
						<Image
							source={require('../../../assets/images/icons/back.png')}
							resizeMode="stretch"
							className="w-9 h-9"
						/>
					</TouchableOpacity>
					<Text className="text-slate-700 text-2xl font-bold">
						Terms & Conditions
					</Text>
				</View>

				{/* Content */}
				<View className="mx-6">
					<Text className="text-slate-700 text-lg font-bold mb-4">
						Terms of Service
					</Text>
					
					<Text className="text-slate-600 text-base mb-4 leading-6">
						Welcome to our loan risk assessment application. By using our services, you agree to comply with and be bound by the following terms and conditions.
					</Text>

					<Text className="text-slate-700 text-base font-bold mb-2">
						1. Acceptance of Terms
					</Text>
					<Text className="text-slate-600 text-base mb-4 leading-6">
						By accessing and using this application, you accept and agree to be bound by the terms and provision of this agreement.
					</Text>

					<Text className="text-slate-700 text-base font-bold mb-2">
						2. Use License
					</Text>
					<Text className="text-slate-600 text-base mb-4 leading-6">
						Permission is granted to temporarily download one copy of the materials on our application for personal, non-commercial transitory viewing only.
					</Text>

					<Text className="text-slate-700 text-base font-bold mb-2">
						3. Disclaimer
					</Text>
					<Text className="text-slate-600 text-base mb-4 leading-6">
						The materials on our application are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties.
					</Text>

					<Text className="text-slate-700 text-base font-bold mb-2">
						4. Limitations
					</Text>
					<Text className="text-slate-600 text-base mb-4 leading-6">
						In no event shall our company or its suppliers be liable for any damages arising out of the use or inability to use the materials on our application.
					</Text>

					<Text className="text-slate-700 text-base font-bold mb-2">
						5. Privacy Policy
					</Text>
					<Text className="text-slate-600 text-base mb-4 leading-6">
						Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our service.
					</Text>

					<Text className="text-slate-700 text-base font-bold mb-2">
						6. Governing Law
					</Text>
					<Text className="text-slate-600 text-base mb-6 leading-6">
						These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts.
					</Text>

					<Text className="text-slate-500 text-sm text-center">
						Last updated: January 2024
					</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
