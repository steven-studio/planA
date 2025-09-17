import { useRouter } from 'expo-router';
import React, { useState } from "react";
import { Alert, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";

const Navbar = require('../../../components/Navbar').default;
const HamburgerMenu = require('../../../components/HamburgerMenu').default;

export default function LoanScreen() {
	const router = useRouter();
	const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

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
				{/* Top Header with buttons */}
				<View className="flex-row items-center justify-between mb-6 mx-6 mt-4 py-8">
					{/* Left side - Hamburger menu */}
					<TouchableOpacity
						className="border border-yellow-500 rounded-xl p-2"
						onPress={() => setShowHamburgerMenu(true)}>
						<Image
							source={require('../../../assets/images/icons/menu.png')}
							resizeMode="contain"
							className="w-6 h-6"
						/>
					</TouchableOpacity>

					{/* Center - Title */}
					<Text className="text-slate-700 text-2xl font-bold">
						{"Loan"}
					</Text>

					{/* Right side - Action buttons */}
					<View className="flex-row">
						<TouchableOpacity
							className="border border-yellow-500 rounded-xl p-2 mr-4"
							onPress={()=>alert('Pressed!')}>
							<Image
								source={require('../../../assets/images/icons/call.png')}
								resizeMode="contain"
								className="w-6 h-6"
							/>
						</TouchableOpacity>
						<TouchableOpacity
							className="border border-yellow-500 rounded-xl p-2"
							onPress={() => router.push('/(tabs)/notifications')}>
							<Image
								source={require('../../../assets/images/icons/notification.png')}
								resizeMode="contain"
								className="w-6 h-6"
							/>
						</TouchableOpacity>
					</View>
				</View>
				<View className="mb-5 mx-6">
					<View
						className="rounded-xl mb-6 p-4 relative"
						style={{
							backgroundColor: '#374061', // More bluish color to match your design
							borderRadius: 12,
							minHeight: 180
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
						<Text className="text-white text-lg font-bold mb-4">
							{"Current Loan Amount"}
						</Text>

						{/* Content Row */}
						<View className="flex-row items-center justify-between mb-4">
							{/* Amount */}
							<View className="flex-1">
								<Text className="text-yellow-400 text-3xl font-bold">
									{"NT $ 10,000"}
								</Text>
							</View>

							{/* Progress Circle */}
							<View className="w-16 h-16 bg-white rounded-full items-center justify-center ml-4">
								<View
									className="w-12 h-12 rounded-full items-center justify-center"
									style={{
										backgroundColor: "#374061",
									}}>
									<Text className="text-white text-sm font-bold">
										{"75%"}
									</Text>
								</View>
							</View>
						</View>

						{/* Progress Bar */}
						<View className="bg-gray-300 rounded-full h-2 mb-4">
							<View className="bg-yellow-400 h-2 rounded-full" style={{ width: '75%' }} />
						</View>

						{/* Repay Loan Button - Fixed positioning */}
						<View className="flex-row justify-end">
							<TouchableOpacity
								className="bg-yellow-500 rounded-lg px-4 py-2 justify-center items-center"
								onPress={() => router.push('/(tabs)/loan/repay')}>
								<Text className="text-gray-800 text-sm font-bold">
									{"Repay Loan"}
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				<View className="mx-6 mb-6">
					<View
						style={{
							marginBottom: 24,
						}}>
						<Text
							style={{
								color: "#374061",
								fontSize: 24,
								fontWeight: "bold",
								marginBottom: 16,
							}}>
							{"Loan Repayment"}
						</Text>
						<View >
							<View 
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									paddingBottom: 12,
								}}>
								<Text 
									style={{
										color: "#374061",
										fontSize: 14,
										fontWeight: "bold",
										marginRight: 4,
										flex: 1,
									}}>
									{"Next Payment"}
								</Text>
								<Text 
									style={{
										color: "#5D74B3",
										fontSize: 14,
										fontWeight: "bold",
										textAlign: "right",
										flex: 1,
									}}>
									{"NT $2,500"}
								</Text>
							</View>
							<View 
								style={{
									height: 1,
									backgroundColor: "#E8E8E8",
									marginBottom: 11,
								}}>
							</View>
							<View 
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									paddingBottom: 12,
								}}>
								<Text 
									style={{
										color: "#374061",
										fontSize: 14,
										fontWeight: "bold",
										marginRight: 4,
										flex: 1,
									}}>
									{"Due Date"}
								</Text>
								<Text 
									style={{
										color: "#5D74B3",
										fontSize: 14,
										fontWeight: "bold",
										textAlign: "right",
										flex: 1,
									}}>
									{"Oct 1, 2024"}
								</Text>
							</View>
							<View 
								style={{
									height: 1,
									backgroundColor: "#E8E8E8",
									marginBottom: 11,
								}}>
							</View>
							<View 
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
								}}>
								<Text 
									style={{
										color: "#374061",
										fontSize: 14,
										fontWeight: "bold",
										marginRight: 4,
										flex: 1,
									}}>
									{"Recurring Payment"}
								</Text>
								<Text 
									style={{
										color: "#5D74B3",
										fontSize: 14,
										fontWeight: "bold",
										textAlign: "right",
										flex: 1,
									}}>
									{"On"}
								</Text>
							</View>
						</View>
					</View>
				</View>
				<View className="mx-6 mb-6">
					<View >
						<Text
							style={{
								color: "#374061",
								fontSize: 24,
								fontWeight: "bold",
								marginBottom: 16,
							}}>
							{"Loan Information"}
						</Text>
						<View >
							<View 
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									paddingBottom: 12,
								}}>
								<Text 
									style={{
										color: "#374061",
										fontSize: 14,
										fontWeight: "bold",
										marginRight: 4,
										flex: 1,
									}}>
									{"Interest Rate"}
								</Text>
								<Text 
									style={{
										color: "#5D74B3",
										fontSize: 14,
										fontWeight: "bold",
										textAlign: "right",
										flex: 1,
									}}>
									{"8.5% p.a."}
								</Text>
							</View>
							<View 
								style={{
									height: 1,
									backgroundColor: "#E8E8E8",
									marginBottom: 11,
								}}>
							</View>
							<View 
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									paddingBottom: 12,
								}}>
								<Text 
									style={{
										color: "#374061",
										fontSize: 14,
										fontWeight: "bold",
										marginRight: 4,
										flex: 1,
									}}>
									{"Loan Term"}
								</Text>
								<Text 
									style={{
										color: "#5D74B3",
										fontSize: 14,
										fontWeight: "bold",
										textAlign: "right",
										flex: 1,
									}}>
									{"12 months"}
								</Text>
							</View>
							<View 
								style={{
									height: 1,
									backgroundColor: "#E8E8E8",
									marginBottom: 11,
								}}>
							</View>
							<View 
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									paddingBottom: 12,
								}}>
								<Text 
									style={{
										color: "#374061",
										fontSize: 14,
										fontWeight: "bold",
										marginRight: 4,
										flex: 1,
									}}>
									{"Monthly Payment"}
								</Text>
								<Text 
									style={{
										color: "#5D74B3",
										fontSize: 14,
										fontWeight: "bold",
										textAlign: "right",
										flex: 1,
									}}>
									{"NT $2,500"}
								</Text>
							</View>
							<View 
								style={{
									height: 1,
									backgroundColor: "#E8E8E8",
									marginBottom: 11,
								}}>
							</View>
							<View 
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
								}}>
								<Text 
									style={{
										color: "#374061",
										fontSize: 14,
										fontWeight: "bold",
										marginRight: 4,
										flex: 1,
									}}>
									{"Disbursed Date"}
								</Text>
								<Text 
									style={{
										color: "#5D74B3",
										fontSize: 14,
										fontWeight: "bold",
										textAlign: "right",
										flex: 1,
									}}>
									{"Jan, 1 2024"}
								</Text>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>

			{/* Bottom Navigation */}
			<Navbar onLogout={handleLogout} />

			{/* Hamburger Menu */}
			<HamburgerMenu
				visible={showHamburgerMenu}
				onClose={() => setShowHamburgerMenu(false)}
			/>
		</SafeAreaView>
	)
}