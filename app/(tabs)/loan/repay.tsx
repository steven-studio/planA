import { useRouter } from 'expo-router';
import React, { useState } from "react";
import { Alert, Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

const Navbar = require('../../../components/Navbar').default;

export default function RepayLoanScreen() {
	const router = useRouter();
	const [amount, setAmount] = useState('');

	const handleLogout = () => {
		Alert.alert(
			'Logout',
			'Are you sure you want to logout?',
			[
				{
					text: 'Cancel',
					style: 'cancel'
				},
				{
					text: 'Logout',
					style: 'destructive',
					onPress: () => {
						router.replace('/(auth)/login');
					}
				}
			]
		);
	};

	return (
		<SafeAreaView className="flex-1 bg-white">
			<ScrollView className="flex-1 bg-white">
				{/* Header with Back Button */}
				<View className="flex-row items-center mb-6 mx-6 mt-4 py-8">
					<TouchableOpacity
						className="mr-4"
						onPress={() => router.back()}>
						<Image
							source={require('../../../assets/images/icons/back.png')}
							resizeMode="contain"
							className="w-6 h-6"
						/>
					</TouchableOpacity>
					<Text className="text-slate-700 text-2xl font-bold">
						Loan Summary
					</Text>
				</View>

				{/* Current Loan Summary */}
				<View className="mx-6 mb-6">
					<View
						className="rounded-xl mb-6 p-4 relative"
						style={{
							backgroundColor: '#374061',
							borderRadius: 12,
							minHeight: 160
						}}>
						{/* Loan Card Background - Top Right Edge */}
						<View className="absolute top-2 right-2 w-16 h-16">
							<Image
								source={require('../../../assets/images/home/loan-card.png')}
								resizeMode="cover"
								className="w-full h-full rounded-xl"
							/>
						</View>

						{/* Header */}
						<Text className="text-white text-lg font-bold mb-2">
							{"Remained Loan"}
						</Text>

						{/* Content Row */}
						<View className="flex-row items-center justify-between">
							{/* Amount */}
							<View>
								<Text className="text-yellow-400 text-3xl font-bold mb-4">
									{"NT $ 10,000"}
								</Text>
								<Text className="text-white text-sm font-bold">
									{"Due Date: Oct 1, 2024"}
								</Text>
							</View>
						</View>
					</View>
				</View>

				{/* Loan Repayment Section */}
				<View className="mx-6 mb-6">
					<Text className="text-slate-700 text-xl font-bold mb-4">
						Loan Repayment
					</Text>

					{/* Payment Card */}
					<View className="flex-row items-center mb-4 px-4 py-3 bg-white rounded-lg border border-gray-200">
						<Image
							source={require('../../../assets/images/ui/mastercard.png')}
							resizeMode="contain"
							className="w-8 h-6 mr-3"
						/>
						<Text className="text-slate-700 text-base font-semibold flex-1">
							Mastercard
						</Text>
						<Text className="text-blue-600 text-sm font-medium">
							**** **** **** 1234
						</Text>
					</View>

					{/* Add New Card Button */}
					<TouchableOpacity
						className="flex-row items-center justify-center py-3 px-4 bg-gray-100 rounded-lg border border-gray-200 mb-6"
						onPress={() => alert('Add new card functionality')}>
						<Text className="text-slate-700 text-base font-medium mr-2">+</Text>
						<Text className="text-slate-700 text-base font-medium">
							Add New Card
						</Text>
					</TouchableOpacity>
					{/* Repayment Amount Section */}
					<View className="mb-6">
						<Text className="text-slate-700 text-xl font-bold mb-4">
							Repayment Amount
						</Text>
						<View>
							<Text className="text-gray-800 text-base font-semibold mb-3">
								Amount
							</Text>
							<TextInput
								placeholder="Enter amount"
								value={amount}
								onChangeText={setAmount}
								keyboardType="numeric"
								className="bg-white border border-slate-700 rounded-lg px-4 py-4 text-base text-gray-800"
								placeholderTextColor="#9CA3AF"
							/>
						</View>
					</View>

					{/* Confirm Payment Button */}
					<TouchableOpacity
						className="bg-slate-700 rounded-lg py-4 px-6 mt-4"
						onPress={() => alert('Payment Confirmed!')}>
						<Text className="text-white text-center text-lg font-semibold">
							Confirm Payment
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>

			{/* Bottom Navigation */}
			<Navbar onLogout={handleLogout} />
		</SafeAreaView>
	);
}