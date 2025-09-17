import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import PhotoPickerModal from '../../components/PhotoPickerModal';

export default function CreateProfileScreen() {
	const router = useRouter();
	const [fullName, setFullName] = useState('');
	const [password, setPassword] = useState('');
	const [dateOfBirth, setDateOfBirth] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [address, setAddress] = useState('');
	const [country, setCountry] = useState('');
	const [state, setState] = useState('');
	const [city, setCity] = useState('');
	const [postalCode, setPostalCode] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [showPhotoModal, setShowPhotoModal] = useState(false);

	const handleCreateProfile = () => {
		// Basic validation
		if (!fullName || !password || !dateOfBirth || !phoneNumber || !address || !country || !state || !city || !postalCode) {
			Alert.alert('Error', 'Please fill all required fields');
			return;
		}

		// Simulate profile creation
		Alert.alert(
			'Profile Created!',
			'Your profile has been created successfully.',
			[
				{
					text: 'Continue',
					onPress: () => router.replace('/(tabs)')
				}
			]
		);
	};

	const handleSkip = () => {
		Alert.alert(
			'Skip Profile Setup?',
			'You can complete your profile later from the settings.',
			[
				{
					text: 'Cancel',
					style: 'cancel'
				},
				{
					text: 'Skip',
					onPress: () => router.replace('/(tabs)')
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
				<View className="flex-row items-center mb-6 mx-6 mt-8 py-4">
					<TouchableOpacity
						className="mr-4"
						onPress={() => router.back()}>
						<Image
							source={require('../../assets/images/icons/back.png')}
							resizeMode="contain"
							className="w-9 h-9"
						/>
					</TouchableOpacity>
					<Text className="text-slate-700 text-2xl font-bold">
						Create Profile
					</Text>
				</View>

				{/* Subtitle */}
				<View className="items-center mb-6 mx-6">
					<Text className="text-gray-500 text-sm text-center">
						Please complete your profile to get started
					</Text>
				</View>
				{/* Profile Avatar */}
				<View className="items-center mx-6 mb-8">
					<Image
						source={require('../../assets/images/profile/avatar.png')}
						resizeMode="cover"
						className="w-24 h-24 rounded-full mb-6"
					/>
					<TouchableOpacity
						className="bg-blue-50 border border-blue-300 rounded-lg px-4 py-2"
						onPress={() => setShowPhotoModal(true)}>
						<Text className="text-blue-600 text-sm font-semibold">
							Add Photo
						</Text>
					</TouchableOpacity>
				</View>

				{/* Form Fields */}
				<View className="mx-6">
					<View className="mb-4">
						<Text className="text-gray-800 text-base font-bold mb-3">
							Full Name *
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
							Password *
						</Text>
						<View className="flex-row items-center bg-white border border-gray-400 rounded-lg">
							<TextInput
								placeholder="Enter your password"
								value={password}
								onChangeText={setPassword}
								secureTextEntry={!showPassword}
								className="flex-1 px-4 py-4 text-base text-gray-800"
								placeholderTextColor="#9CA3AF"
							/>
							<TouchableOpacity
								className="px-4"
								onPress={() => setShowPassword(!showPassword)}>
								<Image
									source={require('../../assets/images/icons/eye.png')}
									resizeMode="contain"
									className="w-6 h-6"
								/>
							</TouchableOpacity>
						</View>
					</View>
					<View className="mb-4">
						<Text className="text-gray-800 text-base font-bold mb-3">
							Date of Birth *
						</Text>
						<TouchableOpacity
							className="flex-row items-center bg-white border border-gray-400 rounded-lg py-4 px-4"
							onPress={() => alert('Date picker pressed!')}>
							<Text className={`text-base flex-1 ${dateOfBirth ? 'text-gray-800' : 'text-gray-400'}`}>
								{dateOfBirth || 'Select your date of birth'}
							</Text>
							<Image
								source={require('../../assets/images/icons/calendar.png')}
								resizeMode="contain"
								className="w-6 h-6"
							/>
						</TouchableOpacity>
					</View>
					<View className="mb-4">
						<Text className="text-gray-800 text-base font-bold mb-3">
							Phone Number *
						</Text>
						<TextInput
							placeholder="Enter your phone number"
							value={phoneNumber}
							onChangeText={setPhoneNumber}
							keyboardType="phone-pad"
							className="bg-white border border-gray-400 rounded-lg px-4 py-4 text-base text-gray-800"
							placeholderTextColor="#9CA3AF"
						/>
					</View>
					<View className="mb-4">
						<Text className="text-gray-800 text-base font-bold mb-3">
							Address *
						</Text>
						<TextInput
							placeholder="Enter your address"
							value={address}
							onChangeText={setAddress}
							multiline
							numberOfLines={3}
							className="bg-white border border-gray-400 rounded-lg px-4 py-4 text-base text-gray-800 h-20"
							placeholderTextColor="#9CA3AF"
							textAlignVertical="top"
						/>
					</View>
					<View className="mb-4">
						<Text className="text-gray-800 text-base font-bold mb-3">
							Country *
						</Text>
						<TextInput
							placeholder="Enter your country"
							value={country}
							onChangeText={setCountry}
							className="bg-white border border-gray-400 rounded-lg px-4 py-4 text-base text-gray-800"
							placeholderTextColor="#9CA3AF"
						/>
					</View>

					<View className="mb-4">
						<Text className="text-gray-800 text-base font-bold mb-3">
							State *
						</Text>
						<TextInput
							placeholder="Enter your state"
							value={state}
							onChangeText={setState}
							className="bg-white border border-gray-400 rounded-lg px-4 py-4 text-base text-gray-800"
							placeholderTextColor="#9CA3AF"
						/>
					</View>

					<View className="mb-4">
						<Text className="text-gray-800 text-base font-bold mb-3">
							City *
						</Text>
						<TextInput
							placeholder="Enter your city"
							value={city}
							onChangeText={setCity}
							className="bg-white border border-gray-400 rounded-lg px-4 py-4 text-base text-gray-800"
							placeholderTextColor="#9CA3AF"
						/>
					</View>

					<View className="mb-6">
						<Text className="text-gray-800 text-base font-bold mb-3">
							Postal Code *
						</Text>
						<TextInput
							placeholder="Enter your postal code"
							value={postalCode}
							onChangeText={setPostalCode}
							className="bg-white border border-gray-400 rounded-lg px-4 py-4 text-base text-gray-800"
							placeholderTextColor="#9CA3AF"
						/>
					</View>
					{/* Upload ID Section */}
					<TouchableOpacity
						className="flex-row items-center justify-center bg-white border border-slate-700 rounded-lg py-6 mb-6"
						onPress={() => alert('ID upload pressed!')}>
						<Image
							source={require('../../assets/images/icons/upload.png')}
							resizeMode="contain"
							className="w-6 h-6 mr-2"
						/>
						<Text className="text-slate-700 text-sm font-semibold">
							Upload Government-Issued ID
						</Text>
					</TouchableOpacity>

					{/* Action Buttons */}
					<TouchableOpacity
						className="bg-slate-700 rounded-lg py-4 mb-4"
						onPress={handleCreateProfile}>
						<Text className="text-white text-lg font-bold text-center">
							Create Profile
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						className="items-center mb-8"
						onPress={handleSkip}>
						<Text className="text-gray-500 text-base font-semibold">
							Skip for now
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>

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
