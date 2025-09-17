import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ChangePasswordScreen() {
	const router = useRouter();
	const [currentPassword, setCurrentPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const handleBackPress = () => {
		router.back();
	};

	const handleChangePassword = () => {
		if (!currentPassword || !newPassword || !confirmPassword) {
			Alert.alert('Error', 'Please fill in all fields');
			return;
		}

		if (newPassword !== confirmPassword) {
			Alert.alert('Error', 'New passwords do not match');
			return;
		}

		if (newPassword.length < 6) {
			Alert.alert('Error', 'Password must be at least 6 characters long');
			return;
		}

		// Simulate password change
		Alert.alert('Success', 'Password changed successfully!', [
			{ text: 'OK', onPress: () => router.back() }
		]);
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
							resizeMode="stretch"
							className="w-9 h-9"
						/>
					</TouchableOpacity>
					<Text className="text-slate-700 text-2xl font-bold">
						Change Password
					</Text>
				</View>
				{/* Form */}
				<View className="mx-6">
					<View className="mb-6">
						<Text className="text-slate-700 text-base font-bold mb-2">
							Current Password
						</Text>
						<TextInput
							value={currentPassword}
							onChangeText={setCurrentPassword}
							secureTextEntry
							placeholder="Enter current password"
							className="bg-white border border-gray-300 rounded-xl p-4 text-slate-700"
						/>
					</View>

					<View className="mb-6">
						<Text className="text-slate-700 text-base font-bold mb-2">
							New Password
						</Text>
						<TextInput
							value={newPassword}
							onChangeText={setNewPassword}
							secureTextEntry
							placeholder="Enter new password"
							className="bg-white border border-gray-300 rounded-xl p-4 text-slate-700"
						/>
					</View>

					<View className="mb-8">
						<Text className="text-slate-700 text-base font-bold mb-2">
							Confirm New Password
						</Text>
						<TextInput
							value={confirmPassword}
							onChangeText={setConfirmPassword}
							secureTextEntry
							placeholder="Confirm new password"
							className="bg-white border border-gray-300 rounded-xl p-4 text-slate-700"
						/>
					</View>

					<TouchableOpacity
						onPress={handleChangePassword}
						className="bg-slate-700 rounded-xl py-4 items-center">
						<Text className="text-white text-lg font-bold">
							Change Password
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}