import { useRouter } from 'expo-router';
import React from 'react';
import { Alert, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const Navbar = require('../../../components/Navbar').default;

export default function ProfileScreen() {
	const router = useRouter();

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
				{/* Header - Removed mobile status bar elements */}
				<View className="flex-row items-center justify-between mb-5 mx-6 mt-4 py-8">
					<TouchableOpacity
						onPress={() => router.back()}>
						<Image
							source={require('../../../assets/images/icons/back.png')}
							resizeMode="contain"
							className="w-10 h-10"
						/>
					</TouchableOpacity>
					<Text className="text-slate-700 text-2xl font-bold">
						Profile
					</Text>
					<View className="flex-row">
						<TouchableOpacity
							className="border border-yellow-500 rounded-xl p-2 mr-4"
							onPress={() => alert('Settings pressed!')}>
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
				{/* Profile Content */}
				<View className="mx-2">
					<View className="items-center mx-5">
						{/* Profile Avatar and Name */}
						<View className="items-center mb-6">
							<Image
								source={require('../../../assets/images/profile/avatar.png')}
								resizeMode="cover"
								className="w-20 h-20 rounded-full mb-3"
							/>
							<View className="items-center pb-1">
								<Text className="text-slate-700 text-2xl font-bold">
									John Smith
								</Text>
							</View>
						</View>

						{/* Social Media Cards */}
						<View className="self-stretch mb-6">
							{/* Facebook Card */}
							<View className="flex-row items-center bg-purple-50 border border-purple-200 rounded-xl p-4 mb-4">
								<View className="w-10 h-10 bg-blue-100 rounded-lg items-center justify-center mr-3">
									<Text className="text-blue-600 text-lg font-bold">A</Text>
								</View>
								<View className="flex-1">
									<Text className="text-gray-800 text-base font-bold">Facebook</Text>
									<Text className="text-gray-500 text-sm">Subhead</Text>
								</View>
								<View className="flex-row">
									<View className="w-4 h-4 bg-gray-400 rounded-full mr-1"></View>
									<View className="w-4 h-4 bg-gray-400 rounded-full"></View>
								</View>
							</View>

							{/* Instagram Card */}
							<View className="flex-row items-center bg-purple-50 border border-purple-200 rounded-xl p-4 mb-4">
								<View className="w-10 h-10 bg-blue-100 rounded-lg items-center justify-center mr-3">
									<Text className="text-blue-600 text-lg font-bold">A</Text>
								</View>
								<View className="flex-1">
									<Text className="text-gray-800 text-base font-bold">Instagram</Text>
									<Text className="text-gray-500 text-sm">Subhead</Text>
								</View>
								<View className="flex-row">
									<View className="w-4 h-4 bg-gray-400 rounded-full mr-1"></View>
									<View className="w-4 h-4 bg-gray-400 rounded-full"></View>
								</View>
							</View>

							{/* Chinese Social Media Card */}
							<View className="flex-row items-center bg-purple-50 border border-purple-200 rounded-xl p-4">
								<View className="w-10 h-10 bg-blue-100 rounded-lg items-center justify-center mr-3">
									<Text className="text-blue-600 text-lg font-bold">A</Text>
								</View>
								<View className="flex-1">
									<Text className="text-gray-800 text-base font-bold">上傳更多文案</Text>
									<Text className="text-gray-500 text-sm">Subhead</Text>
								</View>
								<View className="flex-row">
									<View className="w-4 h-4 bg-gray-400 rounded-full mr-1"></View>
									<View className="w-4 h-4 bg-gray-400 rounded-full"></View>
								</View>
							</View>
						</View>
						{/* Profile Information Card */}
						<View className="self-stretch bg-white border border-gray-400 rounded-lg pt-4 pb-1">
							<View className="flex-row justify-between items-center mb-3 mx-4">
								<Text className="text-slate-700 text-sm font-bold mr-1 flex-1">
									Gender
								</Text>
								<Text className="text-gray-400 text-sm font-bold text-right flex-1">
									Male
								</Text>
							</View>
							<View className="h-px bg-gray-200 mb-3 mx-4">
							</View>
							<View className="flex-row justify-between mb-3 mx-4">
								<Text className="text-slate-700 text-sm font-bold mr-1 flex-1">
									DOB
								</Text>
								<Text className="text-gray-400 text-sm font-bold text-right flex-1">
									19-12-1990
								</Text>
							</View>
							<View className="h-px bg-gray-200 mb-3 mx-4">
							</View>
							<View className="flex-row justify-between items-center mb-3 mx-4">
								<Text className="text-slate-700 text-sm font-bold mr-1 flex-1">
									Age
								</Text>
								<Text className="text-gray-400 text-sm font-bold text-right flex-1">
									18 years old
								</Text>
							</View>
							<View className="h-px bg-gray-200 mb-3 mx-4">
							</View>
							<View className="flex-row justify-between items-center mb-3 mx-4">
								<Text className="text-slate-700 text-sm font-bold mr-1 flex-1">
									Phone Number
								</Text>
								<Text className="text-gray-400 text-sm font-bold text-right flex-1">
									+123 4567890
								</Text>
							</View>
							<View className="h-px bg-gray-200 mb-3 mx-4">
							</View>
							<View className="flex-row justify-between items-center mb-3 mx-4">
								<Text className="text-slate-700 text-sm font-bold mr-1 flex-1">
									Address
								</Text>
								<Text className="text-gray-400 text-sm font-bold text-right flex-1">
									Lorem Ipsum Dolor Dorsi
								</Text>
							</View>
							<View className="h-px bg-gray-200 mb-1 mx-4">
							</View>
							<View className="mb-3">
								<View className="flex-row justify-between items-center mb-3 mx-4">
									<Text className="text-slate-700 text-sm font-bold mr-1 flex-1">
										State
									</Text>
									<Text className="text-gray-400 text-sm font-bold text-right flex-1">
										New York
									</Text>
								</View>
							</View>
							<View className="h-px bg-gray-200 mx-4">
							</View>
						</View>

						{/* Edit Profile Button */}
						<TouchableOpacity
							className="items-center bg-slate-700 rounded-lg py-3 mb-3 self-stretch"
							onPress={() => router.push('/(tabs)/profile/edit')}>
							<Text className="text-white text-xl font-bold">
								Edit Profile
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>

			{/* Bottom Navigation */}
			<Navbar onLogout={handleLogout} />
		</SafeAreaView>
	);
}