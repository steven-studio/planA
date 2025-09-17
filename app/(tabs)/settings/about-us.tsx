import { useRouter } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function AboutUsScreen() {
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
							resizeMode="contain"
							className="w-9 h-9"
						/>
					</TouchableOpacity>
					<Text className="text-slate-700 text-2xl font-bold">
						About Us
					</Text>
				</View>

				{/* Content */}
				<View className="mx-6">
					<View className="items-center mb-6">
						<Image
							source={require('../../../assets/images/logo.png')}
							resizeMode="contain"
							className="w-32 h-32 mb-4"
						/>
						<Text className="text-slate-700 text-2xl font-bold mb-2">
							Loan Risk
						</Text>
						<Text className="text-slate-600 text-base text-center">
							Smart Loan Risk Assessment
						</Text>
					</View>

					<Text className="text-slate-700 text-lg font-bold mb-4">
						Our Mission
					</Text>
					<Text className="text-slate-600 text-base mb-6 leading-6">
						We are dedicated to providing innovative financial solutions that help individuals and businesses make informed decisions about loans and credit. Our advanced risk assessment technology ensures fair and accurate evaluations.
					</Text>

					<Text className="text-slate-700 text-lg font-bold mb-4">
						What We Do
					</Text>
					<Text className="text-slate-600 text-base mb-6 leading-6">
						Our platform uses cutting-edge algorithms and machine learning to assess loan risks, providing lenders with comprehensive insights and borrowers with transparent, fair evaluations of their creditworthiness.
					</Text>

					<Text className="text-slate-700 text-lg font-bold mb-4">
						Our Values
					</Text>
					<View className="mb-6">
						<Text className="text-slate-600 text-base mb-2 leading-6">
							• <Text className="font-bold">Transparency:</Text> We believe in clear, honest communication about our processes and decisions.
						</Text>
						<Text className="text-slate-600 text-base mb-2 leading-6">
							• <Text className="font-bold">Innovation:</Text> We continuously improve our technology to serve you better.
						</Text>
						<Text className="text-slate-600 text-base mb-2 leading-6">
							• <Text className="font-bold">Security:</Text> Your data and privacy are our top priorities.
						</Text>
						<Text className="text-slate-600 text-base leading-6">
							• <Text className="font-bold">Fairness:</Text> We strive to provide equal opportunities for all users.
						</Text>
					</View>

					<Text className="text-slate-700 text-lg font-bold mb-4">
						Contact Information
					</Text>
					<Text className="text-slate-600 text-base mb-2">
						Email: support@loanrisk.com
					</Text>
					<Text className="text-slate-600 text-base mb-2">
						Phone: +1 (555) 123-4567
					</Text>
					<Text className="text-slate-600 text-base mb-6">
						Address: 123 Financial Street, Tech City, TC 12345
					</Text>

					<Text className="text-slate-500 text-sm text-center">
						Version 1.0.0 • © 2024 Loan Risk. All rights reserved.
					</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
