import { useRouter } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function HowToUseScreen() {
	const router = useRouter();

	const handleBackPress = () => {
		router.back();
	};

	return (
		<SafeAreaView className="flex-1 bg-white">
			<ScrollView className="flex-1 bg-white">
				{/* Header with back button and centered title - Added extra top padding for all screen sizes */}
				<View className="flex-row items-center justify-between px-6 pt-12 pb-6 mb-8">
					<TouchableOpacity
						onPress={handleBackPress}
						className="w-9 h-9 items-center justify-center">
						<Image
							source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/X3KVUEZWgu/nonon3su_expires_30_days.png"}}
							resizeMode="stretch"
							className="w-9 h-9"
						/>
					</TouchableOpacity>
					<Text className="text-slate-700 text-2xl font-bold flex-1 text-center">
						How To Use
					</Text>
					<View className="w-9 h-9" />
				</View>

				{/* Content */}
				<View className="mx-6">
					{/* Introduction */}
					<View className="mb-8">
						<Text className="text-slate-700 text-xl font-bold mb-4">
							Welcome to Loan Risk
						</Text>
						<Text className="text-slate-600 text-base leading-6 mb-4">
							This guide will help you navigate through our app and make the most of our loan risk assessment features.
						</Text>
					</View>

					{/* Step-by-step Guide */}
					<View className="mb-8">
						<Text className="text-slate-700 text-xl font-bold mb-6">
							Getting Started
						</Text>

						{/* Step 1 */}
						<View className="flex-row mb-6">
							<View className="w-8 h-8 bg-blue-600 rounded-full items-center justify-center mr-4 mt-1">
								<Text className="text-white text-sm font-bold">1</Text>
							</View>
							<View className="flex-1">
								<Text className="text-slate-700 text-base font-bold mb-2">
									Create Your Profile
								</Text>
								<Text className="text-slate-600 text-sm leading-5 mb-3">
									Start by setting up your profile with accurate personal and financial information. This helps us provide better loan assessments.
								</Text>
								<TouchableOpacity 
									onPress={() => router.push('/(tabs)/profile/')}
									className="bg-blue-100 rounded-lg py-2 px-3 self-start">
									<Text className="text-blue-600 text-xs font-bold">Go to Profile</Text>
								</TouchableOpacity>
							</View>
						</View>

						{/* Step 2 */}
						<View className="flex-row mb-6">
							<View className="w-8 h-8 bg-blue-600 rounded-full items-center justify-center mr-4 mt-1">
								<Text className="text-white text-sm font-bold">2</Text>
							</View>
							<View className="flex-1">
								<Text className="text-slate-700 text-base font-bold mb-2">
									Explore Loan Options
								</Text>
								<Text className="text-slate-600 text-sm leading-5 mb-3">
									Browse different loan types and use our calculator to estimate monthly payments and interest rates.
								</Text>
								<TouchableOpacity 
									onPress={() => router.push('/(tabs)/loan/')}
									className="bg-green-100 rounded-lg py-2 px-3 self-start">
									<Text className="text-green-600 text-xs font-bold">View Loans</Text>
								</TouchableOpacity>
							</View>
						</View>

						{/* Step 3 */}
						<View className="flex-row mb-6">
							<View className="w-8 h-8 bg-blue-600 rounded-full items-center justify-center mr-4 mt-1">
								<Text className="text-white text-sm font-bold">3</Text>
							</View>
							<View className="flex-1">
								<Text className="text-slate-700 text-base font-bold mb-2">
									Apply for a Loan
								</Text>
								<Text className="text-slate-600 text-sm leading-5 mb-3">
									Fill out the loan application form with your desired amount and repayment terms. Our AI will assess your risk profile.
								</Text>
								<TouchableOpacity 
									onPress={() => router.push('/(tabs)/loan/apply')}
									className="bg-purple-100 rounded-lg py-2 px-3 self-start">
									<Text className="text-purple-600 text-xs font-bold">Apply Now</Text>
								</TouchableOpacity>
							</View>
						</View>

						{/* Step 4 */}
						<View className="flex-row mb-6">
							<View className="w-8 h-8 bg-blue-600 rounded-full items-center justify-center mr-4 mt-1">
								<Text className="text-white text-sm font-bold">4</Text>
							</View>
							<View className="flex-1">
								<Text className="text-slate-700 text-base font-bold mb-2">
									Track Your Application
								</Text>
								<Text className="text-slate-600 text-sm leading-5 mb-3">
									Monitor your application status and receive notifications about updates and decisions.
								</Text>
								<TouchableOpacity 
									onPress={() => router.push('/(tabs)/notifications')}
									className="bg-orange-100 rounded-lg py-2 px-3 self-start">
									<Text className="text-orange-600 text-xs font-bold">View Notifications</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>

					{/* Features Overview */}
					<View className="mb-8">
						<Text className="text-slate-700 text-xl font-bold mb-6">
							Key Features
						</Text>

						<View className="bg-gray-50 rounded-xl p-4 mb-4">
							<Text className="text-slate-700 text-base font-bold mb-2">
								🤖 AI Risk Assessment
							</Text>
							<Text className="text-slate-600 text-sm leading-5">
								Our advanced AI analyzes your financial profile to provide accurate risk assessments and personalized loan recommendations.
							</Text>
						</View>

						<View className="bg-gray-50 rounded-xl p-4 mb-4">
							<Text className="text-slate-700 text-base font-bold mb-2">
								📊 Real-time Calculations
							</Text>
							<Text className="text-slate-600 text-sm leading-5">
								Get instant calculations for monthly payments, interest rates, and total loan costs as you adjust loan parameters.
							</Text>
						</View>

						<View className="bg-gray-50 rounded-xl p-4 mb-4">
							<Text className="text-slate-700 text-base font-bold mb-2">
								🔔 Smart Notifications
							</Text>
							<Text className="text-slate-600 text-sm leading-5">
								Receive timely updates about your applications, payment reminders, and important account information.
							</Text>
						</View>

						<View className="bg-gray-50 rounded-xl p-4 mb-4">
							<Text className="text-slate-700 text-base font-bold mb-2">
								💳 Easy Repayment
							</Text>
							<Text className="text-slate-600 text-sm leading-5">
								Multiple payment options including automatic payments, bank transfers, and card payments for your convenience.
							</Text>
						</View>
					</View>

					{/* Tips */}
					<View className="mb-8">
						<Text className="text-slate-700 text-xl font-bold mb-6">
							Tips for Success
						</Text>

						<View className="border-l-4 border-blue-500 bg-blue-50 p-4 mb-4">
							<Text className="text-blue-700 text-sm font-bold mb-1">💡 Tip 1</Text>
							<Text className="text-blue-600 text-sm">
								Keep your profile information up to date for the most accurate risk assessments.
							</Text>
						</View>

						<View className="border-l-4 border-green-500 bg-green-50 p-4 mb-4">
							<Text className="text-green-700 text-sm font-bold mb-1">💡 Tip 2</Text>
							<Text className="text-green-600 text-sm">
								Start with smaller loan amounts to build your credit history with us.
							</Text>
						</View>

						<View className="border-l-4 border-purple-500 bg-purple-50 p-4 mb-4">
							<Text className="text-purple-700 text-sm font-bold mb-1">💡 Tip 3</Text>
							<Text className="text-purple-600 text-sm">
								Set up automatic payments to never miss a due date and improve your credit score.
							</Text>
						</View>
					</View>

					{/* Need Help */}
					<View className="bg-blue-50 rounded-xl p-6 mb-8">
						<Text className="text-blue-700 text-lg font-bold mb-3">
							Need More Help?
						</Text>
						<Text className="text-blue-600 text-sm mb-4">
							If you have any questions or need assistance, our support team is here to help!
						</Text>
						<TouchableOpacity
							onPress={() => router.push('/(tabs)/help/feedback')}
							className="bg-slate-700 rounded-xl py-3 px-4 items-center">
							<Text className="text-white text-sm font-bold">
								Contact Support
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
