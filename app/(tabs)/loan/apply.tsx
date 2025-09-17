import { useRouter } from 'expo-router';
import React, { useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

const Navbar = require('../../../components/Navbar').default;

export default function ApplyLoanScreen() {
	const router = useRouter();
	const [loanAmount, setLoanAmount] = useState('10000');
	const [sliderValue, setSliderValue] = useState(10000);
	const [selectedTerm, setSelectedTerm] = useState(12);
	const [showDropdown, setShowDropdown] = useState(false);

	const termOptions = [3, 6, 12, 18, 24];

	const handleBackPress = () => {
		router.back();
	};

	const handleLogout = () => {
		router.replace('/(auth)/login');
	};

	const handleLoanApplication = () => {
		// Simulate loan application process
		const loanData = {
			amount: sliderValue.toLocaleString(),
			term: selectedTerm,
			monthlyPayment: calculateMonthlyPayment(),
			interestRate: calculateInterestRate()
		};

		// Simulate processing time
		setTimeout(() => {
			// Randomly approve or reject for demo purposes
			const isApproved = Math.random() > 0.3; // 70% approval rate

			if (isApproved) {
				// Send approval notification
				const notificationService = require('../../../services/notificationService').default;
				notificationService.sendLoanNotification('loan_approved', { amount: loanData.amount });

				alert(`Loan Approved! Your loan of $${loanData.amount} has been approved. You'll receive a notification shortly.`);
			} else {
				// Send rejection notification
				const notificationService = require('../../../services/notificationService').default;
				notificationService.sendLoanNotification('loan_rejected');

				alert('Loan application was not approved. You\'ll receive a notification with more details.');
			}
		}, 2000);

		alert('Processing your loan application...');
	};

	const calculateInterestRate = (): number => {
		// Simple interest rate calculation based on amount and term
		const baseRate = 8.5;
		const amountFactor = sliderValue > 50000 ? 1.5 : sliderValue > 20000 ? 1.2 : 1.0;
		const termFactor = selectedTerm === 12 ? 0.8 : selectedTerm === 6 ? 0.9 : 1.0;
		return parseFloat((baseRate * amountFactor * termFactor).toFixed(1));
	};

	const calculateMonthlyPayment = (): number => {
		const principal = sliderValue;
		const monthlyRate = (calculateInterestRate() / 100) / 12;
		const numPayments = selectedTerm;
		const monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
			(Math.pow(1 + monthlyRate, numPayments) - 1);
		return Math.round(monthlyPayment);
	};

	const handleSliderChange = (value: number) => {
		setSliderValue(value);
		setLoanAmount(value.toString());
	};

	const handleTextInputChange = (text: string) => {
		const numericValue = parseInt(text.replace(/[^0-9]/g, '')) || 0;
		if (numericValue <= 100000) {
			setLoanAmount(text);
			setSliderValue(numericValue);
		}
	};

	return (
		<SafeAreaView className="flex-1 bg-white">
			<ScrollView className="flex-1 bg-white">
				<View className="flex-row items-center pr-4 mb-6 ml-4 mt-4 py-6">
					<TouchableOpacity onPress={handleBackPress}>
						<Image
							source={require('../../../assets/images/icons/back.png')}
							resizeMode="contain"
							style={{
								width: 37,
								height: 36,
								marginRight: 88,
							}}
						/>
					</TouchableOpacity>
					<Text
						style={{
							color: "#374061",
							fontSize: 24,
							fontWeight: "bold",
						}}>
						{"Apply Loan"}
					</Text>
				</View>
				<View className="mx-6 mb-96">
					<View className="mb-8">
						<View className="mb-6">
							<Text
								className="text-2xl font-bold mb-4"
								style={{
									color: "#262626",
								}}>
								{"Apply for a Loan"}
							</Text>
							<View>
								<View className="mb-4">
									<Text
										className="text-base font-bold mb-2"
										style={{
											color: "#262626",
										}}>
										{"Loan Amount"}
									</Text>
									<TextInput
										placeholder={"Enter loan amount"}
										value={loanAmount}
										onChangeText={handleTextInputChange}
										keyboardType="numeric"
										className="text-base bg-white rounded-lg border px-4 py-4 mb-4"
										style={{
											color: "#374061",
											borderColor: "#374061",
											shadowColor: "#00000005",
											shadowOpacity: 0.0,
											shadowOffset: {
											    width: 0,
											    height: 1
											},
											shadowRadius: 2,
											elevation: 2,
										}}
									/>
								</View>

								{/* Interactive Slider */}
								<View className="mx-4 my-4">
									<View className="flex-row justify-between mb-2">
										<Text className="text-xs text-gray-500">NT $5,000</Text>
										<Text className="text-xs text-gray-500">NT $100,000</Text>
									</View>
									<View className="relative">
										<View className="h-2 bg-gray-200 rounded-full">
											<View
												className="h-2 bg-slate-700 rounded-full"
												style={{
													width: `${((sliderValue - 5000) / (100000 - 5000)) * 100}%`
												}}
											/>
										</View>
										<TouchableOpacity
											className="absolute w-6 h-6 bg-slate-700 rounded-full border-2 border-white"
											style={{
												left: `${((sliderValue - 5000) / (100000 - 5000)) * 100}%`,
												top: -8,
												marginLeft: -12,
												shadowColor: "#000",
												shadowOffset: { width: 0, height: 2 },
												shadowOpacity: 0.25,
												shadowRadius: 3.84,
												elevation: 5,
											}}
											onPress={() => {
												// Simple increment/decrement for demo
												const newValue = sliderValue < 50000 ? sliderValue + 5000 : 10000;
												handleSliderChange(newValue);
											}}
										/>
									</View>
									<Text
										className="text-center text-base font-bold mt-2"
										style={{color: "#374061"}}>
										NT ${sliderValue.toLocaleString()}
									</Text>
								</View>
							</View>
						</View>
						<View className="flex-row justify-between items-center mb-6">
							<Text
								className="text-xl font-bold mr-1 flex-1"
								style={{
									color: "#262626",
								}}>
								{"Preview Interest Rate"}
							</Text>
							<Text
								className="text-2xl font-bold text-right flex-1"
								style={{
									color: "#374061",
								}}>
								{calculateInterestRate()}% p.a.
							</Text>
						</View>

						{/* Monthly Payment Preview */}
						<View className="flex-row justify-between items-center mb-6">
							<Text
								className="text-lg font-bold mr-1 flex-1"
								style={{
									color: "#262626",
								}}>
								{"Monthly Payment"}
							</Text>
							<Text
								className="text-xl font-bold text-right flex-1"
								style={{
									color: "#F59E0B",
								}}>
								NT ${calculateMonthlyPayment().toLocaleString()}
							</Text>
						</View>
						<View className="relative">
							<Text
								className="text-base font-bold mb-2"
								style={{
									color: "#262626",
								}}>
								{"Repayment Term"}
							</Text>
							<TouchableOpacity
								className="flex-row items-center bg-white border rounded-lg py-4 px-4"
								style={{
									borderColor: "#B0B0B0",
									shadowColor: "#00000005",
									shadowOpacity: 0.0,
									shadowOffset: {
									    width: 0,
									    height: 1
									},
									shadowRadius: 2,
									elevation: 2,
								}}
								onPress={() => setShowDropdown(!showDropdown)}>
								<Text
									className="text-base flex-1"
									style={{
										color: "#262626",
									}}>
									{selectedTerm} Months
								</Text>
								<Image
									source={require('../../../assets/images/icons/dropdown.png')}
									resizeMode="contain"
									className="w-6 h-6"
									style={{
										transform: [{ rotate: showDropdown ? '180deg' : '0deg' }]
									}}
								/>
							</TouchableOpacity>

							{/* Dropdown Options */}
							{showDropdown && (
								<View
									className="absolute top-20 left-0 right-0 bg-white border border-gray-300 rounded-lg z-10"
									style={{
										shadowColor: "#000",
										shadowOffset: { width: 0, height: 2 },
										shadowOpacity: 0.25,
										shadowRadius: 3.84,
										elevation: 5,
									}}>
									{termOptions.map((term, index) => (
										<TouchableOpacity
											key={term}
											className={`py-3 px-4 ${index !== termOptions.length - 1 ? 'border-b border-gray-200' : ''}`}
											onPress={() => {
												setSelectedTerm(term);
												setShowDropdown(false);
											}}>
											<Text
												className="text-base"
												style={{
													color: selectedTerm === term ? "#374061" : "#262626",
													fontWeight: selectedTerm === term ? "bold" : "normal"
												}}>
												{term} Months
											</Text>
										</TouchableOpacity>
									))}
								</View>
							)}
						</View>
					</View>
					<TouchableOpacity
						className="items-center rounded-xl py-3"
						style={{
							backgroundColor: "#374061",
						}}
						onPress={handleLoanApplication}>
						<Text className="text-white text-xl font-bold">
							{"Apply for Loan"}
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>

			{/* Bottom Navigation */}
			<Navbar onLogout={handleLogout} />
		</SafeAreaView>
	)
}