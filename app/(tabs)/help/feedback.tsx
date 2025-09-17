import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function HelpFeedbackScreen() {
	const router = useRouter();
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [email, setEmail] = useState('');

	const handleBackPress = () => {
		router.back();
	};

	const handleSubmitFeedback = () => {
		if (!subject || !message || !email) {
			Alert.alert('Error', 'Please fill in all fields');
			return;
		}

		// Simulate feedback submission
		Alert.alert('Success', 'Your feedback has been submitted successfully! We will get back to you soon.', [
			{ text: 'OK', onPress: () => router.back() }
		]);
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
						Help & Feedback
					</Text>
					<View className="w-9 h-9" />
				</View>
				{/* Content */}
				<View className="mx-6">
					{/* Quick Help Section */}
					<View className="mb-8">
						<Text className="text-slate-700 text-xl font-bold mb-4">
							Quick Help
						</Text>

						<View className="mb-4">
							<TouchableOpacity
								onPress={() => router.push('/(tabs)/help/faq')}
								className="bg-gray-50 rounded-xl p-4 mb-3 border border-gray-200">
								<View className="flex-row items-center justify-between">
									<View className="flex-1">
										<Text className="text-slate-700 text-base font-bold mb-2">
											📋 Frequently Asked Questions
										</Text>
										<Text className="text-slate-600 text-sm leading-5">
											Find answers to common questions about loans, applications, and payments.
										</Text>
									</View>
									<Text className="text-blue-600 text-xl font-bold ml-3">
										→
									</Text>
								</View>
							</TouchableOpacity>

							<TouchableOpacity
								onPress={() => router.push('/(tabs)/help/how-to-use')}
								className="bg-gray-50 rounded-xl p-4 mb-3 border border-gray-200">
								<View className="flex-row items-center justify-between">
									<View className="flex-1">
										<Text className="text-slate-700 text-base font-bold mb-2">
											📖 How To Use Guide
										</Text>
										<Text className="text-slate-600 text-sm leading-5">
											Step-by-step guide to get started with our loan services.
										</Text>
									</View>
									<Text className="text-blue-600 text-xl font-bold ml-3">
										→
									</Text>
								</View>
							</TouchableOpacity>
						</View>
					</View>
					{/* Contact Section */}
					<View className="mb-8">
						<Text className="text-slate-700 text-xl font-bold mb-4">
							Contact Support
						</Text>

						<View className="bg-blue-50 rounded-xl p-4 mb-4">
							<Text className="text-blue-700 text-base font-bold mb-2">
								📞 Phone Support
							</Text>
							<Text className="text-blue-600 text-sm mb-1">
								+1 (555) 123-4567
							</Text>
							<Text className="text-blue-600 text-xs">
								Monday - Friday: 9:00 AM - 6:00 PM
							</Text>
						</View>

						<View className="bg-green-50 rounded-xl p-4 mb-4">
							<Text className="text-green-700 text-base font-bold mb-2">
								📧 Email Support
							</Text>
							<Text className="text-green-600 text-sm">
								support@loanrisk.com
							</Text>
						</View>

						<View className="bg-purple-50 rounded-xl p-4 mb-6">
							<Text className="text-purple-700 text-base font-bold mb-2">
								💬 Live Chat
							</Text>
							<Text className="text-purple-600 text-sm mb-3">
								Get instant help from our support team
							</Text>
							<TouchableOpacity
								onPress={() => router.push('/(tabs)/help/chat')}
								className="bg-slate-700 rounded-xl py-2 px-4 self-start">
								<Text className="text-white text-sm font-bold">
									Start Chat
								</Text>
							</TouchableOpacity>
						</View>
					</View>

					{/* Feedback Form */}
					<View className="mb-8">
						<Text className="text-slate-700 text-xl font-bold mb-4">
							Send Feedback
						</Text>

						<View className="mb-4">
							<Text className="text-slate-700 text-base font-bold mb-2">
								Your Email
							</Text>
							<TextInput
								value={email}
								onChangeText={setEmail}
								placeholder="Enter your email address"
								keyboardType="email-address"
								className="bg-white border border-gray-300 rounded-xl p-4 text-slate-700"
							/>
						</View>

						<View className="mb-4">
							<Text className="text-slate-700 text-base font-bold mb-2">
								Subject
							</Text>
							<TextInput
								value={subject}
								onChangeText={setSubject}
								placeholder="What is your feedback about?"
								className="bg-white border border-gray-300 rounded-xl p-4 text-slate-700"
							/>
						</View>

						<View className="mb-6">
							<Text className="text-slate-700 text-base font-bold mb-2">
								Message
							</Text>
							<TextInput
								value={message}
								onChangeText={setMessage}
								placeholder="Tell us about your experience or suggestions..."
								multiline
								numberOfLines={4}
								textAlignVertical="top"
								className="bg-white border border-gray-300 rounded-xl p-4 text-slate-700 h-24"
							/>
						</View>

						<TouchableOpacity
							onPress={handleSubmitFeedback}
							className="bg-slate-700 rounded-xl py-4 items-center">
							<Text className="text-white text-lg font-bold">
								Submit Feedback
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}