import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import PhotoPickerModal from '../../../components/PhotoPickerModal';

const Navbar = require('../../../components/Navbar').default;

export default function EditProfileScreen() {
	const router = useRouter();
	const [fullName, setFullName] = useState('John Smith');
	const [password, setPassword] = useState('');
	const [dateOfBirth, setDateOfBirth] = useState('19-12-1990');
	const [phoneNumber, setPhoneNumber] = useState('+123 4567890');
	const [address, setAddress] = useState('Lorem Ipsum Dolor Dorsi');
	const [country, setCountry] = useState('United States');
	const [showPhotoModal, setShowPhotoModal] = useState(false);

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

	const handleCamera = () => {
		setShowPhotoModal(false);
		router.push('/(auth)/upload-camera');
	};

	const handleGallery = () => {
		setShowPhotoModal(false);
		router.push('/(auth)/upload-gallery');
	};

	return (
		<SafeAreaView className="flex-1 bg-white">
			<ScrollView className="flex-1 bg-white">
				{/* Header with Back Button */}
				<View className="flex-row items-center mb-10 ml-6 mt-4 py-8">
					<TouchableOpacity
						className="mr-4"
						onPress={() => router.back()}>
						<Image
							source={require('../../../assets/images/icons/back.png')}
							resizeMode="contain"
							className="w-9 h-9"
						/>
					</TouchableOpacity>
					<Text className="text-slate-700 text-2xl font-bold">
						Edit Profile
					</Text>
				</View>

				{/* Profile Avatar */}
				<View className="items-center mx-6">
					<TouchableOpacity
						onPress={() => setShowPhotoModal(true)}
						className="mb-6">
						<Image
							source={require('../../../assets/images/profile/avatar.png')}
							resizeMode="cover"
							className="w-24 h-24 rounded-full"
						/>
						{/* Edit overlay */}
						<View className="absolute bottom-0 right-0 bg-slate-700 rounded-full p-2">
							<Text className="text-white text-xs font-bold">✎</Text>
						</View>
					</TouchableOpacity>
					{/* Form Fields */}
					<View className="w-full">
						<View className="mb-4">
							<Text className="text-gray-800 text-base font-bold mb-3">
								Full Name
							</Text>
							<TextInput
								placeholder="Enter your full name"
								value={fullName}
								onChangeText={setFullName}
								className="bg-white border border-slate-700 rounded-lg px-4 py-4 text-base text-gray-800"
								placeholderTextColor="#9CA3AF"
							/>
						</View>
						<View className="mb-4">
							<Text className="text-gray-800 text-base font-bold mb-3">
								Password
							</Text>
							<TextInput
								placeholder="Enter your password"
								value={password}
								onChangeText={setPassword}
								secureTextEntry={true}
								className="bg-white border border-gray-400 rounded-lg px-4 py-4 text-base text-gray-800"
								placeholderTextColor="#9CA3AF"
							/>
						</View>
						<View className="mb-4">
							<Text className="text-gray-800 text-base font-bold mb-3">
								Date of Birth
							</Text>
							<TouchableOpacity
								className="flex-row items-center bg-white border border-gray-400 rounded-lg py-4 px-4"
								onPress={() => alert('Date picker pressed!')}>
								<Text className={`text-base flex-1 ${dateOfBirth ? 'text-gray-800' : 'text-gray-400'}`}>
									{dateOfBirth || 'Select your DOB'}
								</Text>
								<Image
									source={require('../../../assets/images/profile/camera.png')}
									resizeMode="contain"
									className="w-6 h-6"
								/>
							</TouchableOpacity>
						</View>
						<View className="mb-4">
							<Text className="text-gray-800 text-base font-bold mb-3">
								Phone No
							</Text>
							<TextInput
								placeholder="Enter your phone no"
								value={phoneNumber}
								onChangeText={setPhoneNumber}
								keyboardType="phone-pad"
								className="bg-white border border-gray-400 rounded-lg px-4 py-4 text-base text-gray-800"
								placeholderTextColor="#9CA3AF"
							/>
						</View>
						<View className="mb-4">
							<Text className="text-gray-800 text-base font-bold mb-3">
								Address
							</Text>
							<TextInput
								placeholder="Enter Address"
								value={address}
								onChangeText={setAddress}
								multiline
								numberOfLines={4}
								className="bg-white border border-gray-400 rounded-lg px-4 py-4 text-base text-gray-800 h-24"
								placeholderTextColor="#9CA3AF"
								textAlignVertical="top"
							/>
						</View>

						<View className="mb-4">
							<Text className="text-gray-800 text-base font-bold mb-3">
								Country
							</Text>
							<TextInput
								placeholder="Enter your country"
								value={country}
								onChangeText={setCountry}
								className="bg-white border border-gray-400 rounded-lg px-4 py-4 text-base text-gray-800"
								placeholderTextColor="#9CA3AF"
							/>
						</View>

						{/* Save Button */}
						<TouchableOpacity
							className="items-center bg-slate-700 rounded-lg py-3 mb-6"
							onPress={() => {
								alert('Profile updated!');
								router.back();
							}}>
							<Text className="text-white text-xl font-bold">
								Save Changes
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>

			{/* Bottom Navigation */}
			<Navbar onLogout={handleLogout} />

			{/* Photo Picker Modal */}
			<PhotoPickerModal
				visible={showPhotoModal}
				onClose={() => setShowPhotoModal(false)}
				onCamera={handleCamera}
				onGallery={handleGallery}
			/>
		</SafeAreaView>
	);
}