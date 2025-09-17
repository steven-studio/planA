import { useRouter } from 'expo-router';
import React, { useEffect, useState } from "react";
import { Alert, Image, Modal, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import notificationService from '../../../services/notificationService';

export default function SettingsScreen() {
	const router = useRouter();
	const [notificationsEnabled, setNotificationsEnabled] = useState(true);
	const [showDeleteModal, setShowDeleteModal] = useState(false);

	// Load notification preference on component mount
	useEffect(() => {
		const currentPreference = notificationService.getNotificationPreference();
		setNotificationsEnabled(currentPreference);
	}, []);

	// Handle notification toggle
	const handleNotificationToggle = (value: boolean) => {
		setNotificationsEnabled(value);
		notificationService.setNotificationPreference(value);

		// Show feedback to user
		Alert.alert(
			'Notifications',
			value ? 'Notifications have been enabled' : 'Notifications have been disabled',
			[
				{
					text: 'OK',
					onPress: () => {
						// Send a test notification if enabled
						if (value) {
							setTimeout(() => {
								notificationService.sendTestNotification();
							}, 1000);
						}
					}
				}
			]
		);
	};

	const handleBackPress = () => {
		router.back();
	};

	const handleDeleteAccountPress = () => {
		setShowDeleteModal(true);
	};

	const handleDeleteAccountConfirm = () => {
		setShowDeleteModal(false);
		// TODO: Implement account deletion
		Alert.alert('Account Deleted', 'Your account has been successfully deleted.', [
			{ text: 'OK', onPress: () => router.push('/(auth)/login') }
		]);
	};

	const handleDeleteAccountCancel = () => {
		setShowDeleteModal(false);
	};

	return (
		<>
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
						Settings
					</Text>
				</View>
				<View className="mb-28 mx-6">
					<View className="mb-40">
						<View className="flex-row items-center bg-white border border-gray-300 rounded-xl p-4 mb-4 shadow-lg">
							<Image
								source={require('../../../assets/images/icons/notification-settings.png')}
								resizeMode="contain"
								className="w-6 h-6 mr-4"
							/>
							<Text className="text-slate-700 text-sm font-bold flex-1 py-1">
								Notifications
							</Text>
							<TouchableOpacity
								onPress={() => handleNotificationToggle(!notificationsEnabled)}
								className={`rounded-full w-8 h-5 justify-center ${
									notificationsEnabled ? 'bg-green-500 pl-4 pr-1' : 'bg-gray-300 pl-1 pr-4'
								}`}>
								<View className="w-4 h-4 bg-white rounded-full shadow-sm" />
							</TouchableOpacity>
						</View>
						<TouchableOpacity
							onPress={() => router.push('/(tabs)/settings/change-password')}
							className="flex-row items-center bg-white border border-gray-300 rounded-xl p-4 mb-4 shadow-lg">
							<Image
								source={require('../../../assets/images/icons/security.png')}
								resizeMode="contain"
								className="w-6 h-6 mr-4"
							/>
							<Text className="text-slate-700 text-sm font-bold flex-1 py-1">
								Change Password
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => router.push('/(tabs)/settings/terms-conditions')}
							className="flex-row items-center bg-white border border-gray-300 rounded-xl p-4 mb-4 shadow-lg">
							<Image
								source={require('../../../assets/images/icons/terms.png')}
								resizeMode="contain"
								className="w-6 h-6 mr-4"
							/>
							<Text className="text-slate-700 text-sm font-bold flex-1 py-1">
								Terms & Conditions
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => router.push('/(tabs)/settings/privacy-policy')}
							className="flex-row items-center bg-white border border-gray-300 rounded-xl p-4 mb-4 shadow-lg">
							<Image
								source={require('../../../assets/images/icons/privacy-policy.png')}
								resizeMode="contain"
								className="w-6 h-6 mr-4"
							/>
							<Text className="text-slate-700 text-sm font-bold flex-1 py-1">
								Privacy Policy
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => router.push('/(tabs)/settings/about-us')}
							className="flex-row items-center bg-white border border-gray-300 rounded-xl p-4 shadow-lg">
							<Image
								source={require('../../../assets/images/icons/about.png')}
								resizeMode="contain"
								className="w-6 h-6 mr-4"
							/>
							<Text className="text-slate-700 text-sm font-bold flex-1 py-1">
								About Us
							</Text>
						</TouchableOpacity>
						
					</View>
					<TouchableOpacity
						onPress={handleDeleteAccountPress}
						className="flex-row items-center bg-red-600 rounded-xl py-3 px-4">
						<Image
							source={require('../../../assets/images/icons/delete.png')}
							resizeMode="contain"
							className="w-6 h-6 mr-3"
						/>
						<Text className="text-white text-base font-bold flex-1">
							Delete Account
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>

		{/* Delete Account Confirmation Modal */}
		<Modal
			visible={showDeleteModal}
			transparent={true}
			animationType="fade"
			onRequestClose={handleDeleteAccountCancel}>
			<View className="flex-1 justify-center items-center" style={{ backgroundColor: "#26262680" }}>
				<View className="bg-white rounded-2xl p-5 mx-6 w-80">
					<View className="mb-9 px-4">
						<Text className="text-slate-700 text-2xl font-bold text-center mb-4">
							Delete Account?
						</Text>
						<Text className="text-gray-500 text-sm text-center">
							Are you sure you want to permanently delete your account? This action cannot be undone.
						</Text>
					</View>

					<View className="px-4">
						<TouchableOpacity onPress={handleDeleteAccountConfirm}>
							<View className="items-center rounded-xl py-3 mb-4 bg-red-600">
								<Text className="text-white text-xl font-bold">
									Yes, Delete
								</Text>
							</View>
						</TouchableOpacity>

						<TouchableOpacity onPress={handleDeleteAccountCancel}>
							<View className="items-center rounded-xl py-3 bg-gray-200">
								<Text className="text-slate-700 text-xl font-bold">
									Cancel
								</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</Modal>
	</>
	);
}
