import { useRouter } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function PrivacyPolicyScreen() {
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
						Privacy Policy
					</Text>
				</View>

				{/* Content */}
				<View className="mx-6">
					<Text className="text-slate-700 text-lg font-bold mb-4">
						Privacy Policy
					</Text>
					
					<Text className="text-slate-600 text-base mb-4 leading-6">
						This Privacy Policy describes how we collect, use, and protect your personal information when you use our loan risk assessment application.
					</Text>

					<Text className="text-slate-700 text-base font-bold mb-2">
						1. Information We Collect
					</Text>
					<Text className="text-slate-600 text-base mb-4 leading-6">
						We collect information you provide directly to us, such as when you create an account, apply for a loan, or contact us for support. This may include your name, email address, phone number, financial information, and other personal details.
					</Text>

					<Text className="text-slate-700 text-base font-bold mb-2">
						2. How We Use Your Information
					</Text>
					<Text className="text-slate-600 text-base mb-4 leading-6">
						We use the information we collect to provide, maintain, and improve our services, process loan applications, communicate with you, and comply with legal obligations.
					</Text>

					<Text className="text-slate-700 text-base font-bold mb-2">
						3. Information Sharing
					</Text>
					<Text className="text-slate-600 text-base mb-4 leading-6">
						We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.
					</Text>

					<Text className="text-slate-700 text-base font-bold mb-2">
						4. Data Security
					</Text>
					<Text className="text-slate-600 text-base mb-4 leading-6">
						We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
					</Text>

					<Text className="text-slate-700 text-base font-bold mb-2">
						5. Your Rights
					</Text>
					<Text className="text-slate-600 text-base mb-4 leading-6">
						You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us.
					</Text>

					<Text className="text-slate-700 text-base font-bold mb-2">
						6. Contact Us
					</Text>
					<Text className="text-slate-600 text-base mb-6 leading-6">
						If you have any questions about this Privacy Policy, please contact us at privacy@loanrisk.com or through our support channels.
					</Text>

					<Text className="text-slate-500 text-sm text-center">
						Last updated: January 2024
					</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
