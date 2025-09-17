import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function FAQScreen() {
	const router = useRouter();
	const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

	const handleBackPress = () => {
		router.back();
	};

	const toggleFAQ = (index: number) => {
		setExpandedFAQ(expandedFAQ === index ? null : index);
	};

	const faqs = [
		{
			question: "How do I apply for a loan?",
			answer: "Navigate to the Loan section from the bottom navigation, fill out the application form with your personal and financial details, select your desired loan amount and repayment terms, then submit. You'll receive a decision within 24 hours."
		},
		{
			question: "What documents do I need?",
			answer: "You'll need a valid government-issued ID, proof of income (pay stubs or bank statements), employment verification, and bank account information. Additional documents may be required based on your loan amount."
		},
		{
			question: "How is my loan risk assessed?",
			answer: "We use advanced AI algorithms to analyze your credit history, income stability, debt-to-income ratio, employment history, and other financial factors to determine your loan eligibility and interest rates."
		},
		{
			question: "How can I repay my loan?",
			answer: "You can repay through the app using bank transfer, debit card, or set up automatic payments. Go to the Loan section and select 'Repay Loan' to see all available payment options."
		},
		{
			question: "What are the interest rates?",
			answer: "Interest rates vary based on your risk assessment, loan amount, and repayment term. Rates typically range from 5% to 25% APR. You'll see your personalized rate before accepting any loan offer."
		},
		{
			question: "How long does approval take?",
			answer: "Most applications are processed within 24 hours. Simple applications may be approved instantly, while more complex cases might take up to 48 hours for manual review."
		},
		{
			question: "Can I pay off my loan early?",
			answer: "Yes, you can pay off your loan early without any prepayment penalties. Early repayment can help you save on interest charges."
		},
		{
			question: "What if I miss a payment?",
			answer: "If you miss a payment, you'll be charged a late fee and it may affect your credit score. Contact our support team immediately if you're having trouble making payments to discuss options."
		},
		{
			question: "How do I update my profile information?",
			answer: "Go to the Profile section from the bottom navigation, tap 'Edit Profile', update your information, and save changes. Keep your information current for the best loan offers."
		},
		{
			question: "Is my personal information secure?",
			answer: "Yes, we use bank-level encryption and security measures to protect your personal and financial information. We never share your data with third parties without your consent."
		}
	];

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
						Frequently Asked Questions
					</Text>
					<View className="w-9 h-9" />
				</View>

				{/* Content */}
				<View className="mx-6 mb-8">
					<Text className="text-slate-600 text-base leading-6 mb-6">
						Find answers to the most common questions about our loan services and app features.
					</Text>

					{/* FAQ List */}
					{faqs.map((faq, index) => (
						<View key={index} className="mb-4">
							<TouchableOpacity
								onPress={() => toggleFAQ(index)}
								className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
								<View className="flex-row items-center justify-between">
									<Text className="text-slate-700 text-base font-bold flex-1 pr-4">
										{faq.question}
									</Text>
									<View className={`transform ${expandedFAQ === index ? 'rotate-180' : 'rotate-0'}`}>
										<Text className="text-blue-600 text-xl font-bold">
											{expandedFAQ === index ? '−' : '+'}
										</Text>
									</View>
								</View>
								{expandedFAQ === index && (
									<View className="mt-3 pt-3 border-t border-gray-100">
										<Text className="text-slate-600 text-sm leading-6">
											{faq.answer}
										</Text>
									</View>
								)}
							</TouchableOpacity>
						</View>
					))}

					{/* Still Need Help Section */}
					<View className="bg-blue-50 rounded-xl p-6 mt-8">
						<Text className="text-blue-700 text-lg font-bold mb-3">
							Still Need Help?
						</Text>
						<Text className="text-blue-600 text-sm mb-4">
							Can't find what you're looking for? Our support team is here to help!
						</Text>
						<TouchableOpacity 
							onPress={() => router.push('/(tabs)/help/feedback')}
							className="bg-blue-600 rounded-xl py-3 px-4 items-center">
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
