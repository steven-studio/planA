import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { ImagePickerResponse, launchImageLibrary, MediaType } from 'react-native-image-picker';

export default function UploadGalleryScreen() {
	const router = useRouter();
	const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

	// Don't open gallery automatically - let user trigger it

	const handleBack = () => {
		router.back();
	};

	const openGallery = () => {
		console.log('Opening gallery...');
		const options = {
			mediaType: 'photo' as MediaType,
			includeBase64: false,
			maxHeight: 2000,
			maxWidth: 2000,
		};

		launchImageLibrary(options, (response: ImagePickerResponse) => {
			console.log('Gallery response:', response);
			if (response.didCancel) {
				console.log('User cancelled gallery');
				// Don't go back automatically, let user try again
			} else if (response.errorMessage) {
				console.log('Gallery Error: ', response.errorMessage);
				Alert.alert('Gallery Error', response.errorMessage);
			} else if (response.assets && response.assets[0]) {
				const imageUri = response.assets[0].uri;
				if (imageUri) {
					setSelectedPhoto(imageUri);
					console.log('Photo selected:', imageUri);
				}
			} else {
				console.log('No photo selected');
			}
		});
	};



	return (
		<SafeAreaView className="flex-1 bg-white">
			<View className="flex-1 items-center justify-center">
				{/* Header with Back Button */}
				<View className="absolute top-12 left-0 right-0 z-10 flex-row items-center mb-6 mx-6 py-4">
					<TouchableOpacity
						className="mr-4"
						onPress={handleBack}>
						<Image
							source={require('../../assets/images/icons/back.png')}
							resizeMode="contain"
							className="w-9 h-9"
						/>
					</TouchableOpacity>
					<Text className="text-slate-700 text-2xl font-bold">
						Upload From Gallery
					</Text>
				</View>

				{selectedPhoto ? (
					// Show selected photo
					<View className="items-center">
						<Image
							source={{ uri: selectedPhoto }}
							className="w-80 h-80 rounded-2xl mb-8"
							resizeMode="cover"
						/>
						<Text className="text-slate-700 text-lg font-semibold mb-4">
							Photo Selected Successfully!
						</Text>
						<TouchableOpacity
							onPress={() => router.back()}
							className="bg-blue-600 rounded-lg px-8 py-4">
							<Text className="text-white font-bold">
								Use This Photo
							</Text>
						</TouchableOpacity>
					</View>
				) : (
					// Show gallery selection interface
					<View className="items-center px-6">
						<Text className="text-slate-700 text-xl font-bold mb-4">
							Select from Gallery
						</Text>
						<Text className="text-gray-500 text-center mb-8">
							Choose a photo from your device gallery
						</Text>
						<TouchableOpacity
							onPress={openGallery}
							className="bg-slate-700 rounded-lg px-8 py-4 w-full max-w-xs">
							<Text className="text-white font-bold text-center">
								Open Gallery
							</Text>
						</TouchableOpacity>
					</View>
				)}
			</View>
		</SafeAreaView>
	);
}
