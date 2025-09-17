import { useRouter } from 'expo-router';
import React, { useState } from "react";
import { Alert, Image, ImageBackground, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";

const Navbar = require('../../components/Navbar').default;
const HamburgerMenu = require('../../components/HamburgerMenu').default;

export default function HomeScreen() {
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
							source={require('../../assets/images/icons/menu.png')}
							resizeMode="contain"
							className="w-6 h-6"
						/>
					</TouchableOpacity>

					{/* Center - Title */}
					<Text className="text-slate-700 text-2xl font-bold">
						{"Home"}
					</Text>
					{/* Right side - Action buttons */}
					<View className="flex-row">
						<TouchableOpacity
							className="border border-yellow-500 rounded-xl p-2 mr-4"
							onPress={()=>alert('Pressed!')}>
							<Image
								source={require('../../assets/images/icons/call.png')}
								resizeMode="contain"
								className="w-6 h-6"
							/>
						</TouchableOpacity>
						<TouchableOpacity
							className="border border-yellow-500 rounded-xl p-2"
							onPress={() => router.push('/(tabs)/notifications')}>
							<Image
								source={require('../../assets/images/icons/notification.png')}
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
								source={require('../../assets/images/home/loan-card.png')}
								resizeMode="cover"
								className="w-full h-full rounded-xl"
							/>
						</View>

						{/* Hi Steve greeting */}
						<View className="flex-row items-center mb-2">
							<Image
								source={require('../../assets/images/home/greeting-avatar.png')}
								resizeMode="contain"
								className="w-6 h-6 mr-2"
							/>
							<Text className="text-white text-base font-bold">
								{"Hi Steve!"}
							</Text>
						</View>

						{/* Loan Amount Section */}
						<Text className="text-white text-lg font-bold mb-2">
							{"Your Loan Amount"}
						</Text>
						<Text className="text-yellow-400 text-3xl font-bold mb-4">
							{"NT $ 10,000"}
						</Text>

						{/* Progress Bar */}
						<View className="bg-gray-300 rounded-full h-2 mb-4">
							<View className="bg-yellow-400 h-2 rounded-full" style={{ width: '75%' }} />
						</View>

						{/* Want To Borrow More Button - Fixed positioning */}
						<View className="flex-row justify-end">
							<TouchableOpacity
								className="bg-yellow-500 rounded-lg px-4 py-2 justify-center items-center"
								onPress={() => router.push('/(tabs)/loan/apply')}>
								<Text className="text-gray-800 text-sm font-bold">
									{"Want To Borrow More?"}
								</Text>
							</TouchableOpacity>
						</View>
					</View>
					</View>
					<View className="flex-row items-center bg-blue-50 border border-blue-300 rounded-xl py-3 px-2 mb-6">
						<View className="flex-1 flex-row mr-3">
							<Image
								source={require('../../assets/images/home/amount-repaid.png')}
								resizeMode="contain"
								className="w-12 h-12 mr-2"
							/>
							<View className="flex-1 px-2">
								<Text className="text-gray-800 text-xl font-bold mb-2">
									{"Amount Repaid"}
								</Text>
								<Text className="text-gray-500 text-sm">
									{"Lorem Ipsum"}
								</Text>
							</View>
						</View>
						<ImageBackground
							source={require('../../assets/images/home/progress-bg.png')}
							resizeMode="stretch"
							className="py-5 px-4"
							>
							<Text className="text-slate-700 text-base font-bold">
								{"75%"}
							</Text>
						</ImageBackground>
					</View>
					<View className="mx-6">
						<View className="flex-row items-center mb-3">
							<Text className="text-gray-800 text-2xl font-bold flex-1">
								{"Loan History"}
							</Text>
							<Image
								source={require('../../assets/images/home/history.png')}
								resizeMode="contain"
								style={{
									width: 24,
									height: 24,
								}}
							/>
						</View>
						<View >
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginBottom: 14,
								}}>
								<View 
									style={{
										flex: 1,
										flexDirection: "row",
										alignItems: "center",
										marginRight: 12,
									}}>
									<Image
										source={require('../../assets/images/home/loan-received.png')}
										resizeMode="contain"
										style={{
											width: 45,
											height: 45,
											marginRight: 10,
										}}
									/>
									<View 
										style={{
											flex: 1,
										}}>
										<Text 
											style={{
												color: "#374061",
												fontSize: 14,
												fontWeight: "bold",
												marginBottom: 2,
											}}>
											{"Loan Received"}
										</Text>
										<Text 
											style={{
												color: "#F8B01D",
												fontSize: 12,
											}}>
											{"Loan of N30,000 wasreceived"}
										</Text>
									</View>
								</View>
								<Image
									source={require('../../assets/images/home/arrow-right.png')}
									resizeMode="contain"
									style={{
										width: 18,
										height: 18,
									}}
								/>
							</View>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginBottom: 14,
								}}>
								<View 
									style={{
										flex: 1,
										flexDirection: "row",
										alignItems: "center",
										marginRight: 12,
									}}>
									<Image
										source={require('../../assets/images/home/loan-disbursed.png')}
										resizeMode="contain"
										style={{
											width: 45,
											height: 45,
											marginRight: 10,
										}}
									/>
									<View 
										style={{
											flex: 1,
										}}>
										<Text 
											style={{
												color: "#374061",
												fontSize: 14,
												fontWeight: "bold",
												marginBottom: 2,
											}}>
											{"Loan Disbured"}
										</Text>
										<Text 
											style={{
												color: "#F8B01D",
												fontSize: 12,
											}}>
											{"N30,000 was disbursed to your bank"}
										</Text>
									</View>
								</View>
								<Image
									source={require('../../assets/images/home/arrow-right.png')}
									resizeMode="contain"
									style={{
										width: 18,
										height: 18,
									}}
								/>
							</View>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginBottom: 14,
								}}>
								<View 
									style={{
										flex: 1,
										flexDirection: "row",
										alignItems: "center",
										marginRight: 12,
									}}>
									<Image
										source={require('../../assets/images/home/loan-approved.png')}
										resizeMode="contain"
										style={{
											width: 45,
											height: 45,
											marginRight: 10,
										}}
									/>
									<View 
										style={{
											marginRight: 4,
										}}>
										<Text 
											style={{
												color: "#374061",
												fontSize: 14,
												fontWeight: "bold",
												marginBottom: 2,
											}}>
											{"Loan Approved"}
										</Text>
										<Text 
											style={{
												color: "#F8B01D",
												fontSize: 12,
											}}>
											{"N30,000 was approved"}
										</Text>
									</View>
								</View>
								<Image
									source={require('../../assets/images/home/arrow-right.png')}
									resizeMode="contain"
									style={{
										width: 18,
										height: 18,
									}}
								/>
							</View>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginBottom: 14,
								}}>
								<View 
									style={{
										flex: 1,
										flexDirection: "row",
										alignItems: "center",
										marginRight: 12,
									}}>
									<Image
										source={require('../../assets/images/home/loan-received.png')}
										resizeMode="contain"
										style={{
											width: 45,
											height: 45,
											marginRight: 10,
										}}
									/>
									<View 
										style={{
											flex: 1,
										}}>
										<Text 
											style={{
												color: "#374061",
												fontSize: 14,
												fontWeight: "bold",
												marginBottom: 2,
											}}>
											{"Loan Received"}
										</Text>
										<Text 
											style={{
												color: "#F8B01D",
												fontSize: 12,
											}}>
											{"Loan of N30,000 wasreceived"}
										</Text>
									</View>
								</View>
								<Image
									source={require('../../assets/images/home/arrow-right.png')}
									resizeMode="contain"
									style={{
										width: 18,
										height: 18,
									}}
								/>
							</View>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
								}}>
								<View 
									style={{
										flex: 1,
										flexDirection: "row",
										alignItems: "center",
										marginRight: 12,
									}}>
									<Image
										source={require('../../assets/images/home/loan-declined.png')}
										resizeMode="contain"
										style={{
											width: 45,
											height: 45,
											marginRight: 10,
										}}
									/>
									<View 
										style={{
											flex: 1,
										}}>
										<Text 
											style={{
												color: "#374061",
												fontSize: 14,
												fontWeight: "bold",
												marginBottom: 2,
											}}>
											{"Loan Declined"}
										</Text>
										<Text 
											style={{
												color: "#F8B01D",
												fontSize: 12,
											}}>
											{"We’re sorry! your loan was declined"}
										</Text>
									</View>
								</View>
								<Image
									source={require('../../assets/images/home/arrow-right.png')}
									resizeMode="contain"
									style={{
										width: 18,
										height: 18,
									}}
								/>
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