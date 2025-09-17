import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { ImagePickerResponse, launchImageLibrary, MediaType } from 'react-native-image-picker';

export default function UploadGalleryScreen() {
	const router = useRouter();
	const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

	// Open gallery immediately when screen loads
	React.useEffect(() => {
		openGallery();
	}, []);

	const handleBack = () => {
		router.back();
	};

	const openGallery = () => {
		const options = {
			mediaType: 'photo' as MediaType,
			includeBase64: false,
			maxHeight: 2000,
			maxWidth: 2000,
		};

		launchImageLibrary(options, (response: ImagePickerResponse) => {
			if (response.didCancel) {
				console.log('User cancelled gallery');
				router.back(); // Go back if user cancels
			} else if (response.errorMessage) {
				console.log('Gallery Error: ', response.errorMessage);
				Alert.alert('Gallery Error', response.errorMessage);
				router.back();
			} else if (response.assets && response.assets[0]) {
				const imageUri = response.assets[0].uri;
				if (imageUri) {
					setSelectedPhoto(imageUri);
					console.log('Photo selected:', imageUri);
					// Automatically go back with selected photo
					setTimeout(() => {
						router.back();
					}, 500);
				}
			}
		});
	};

	const handleRetry = () => {
		openGallery();
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
						<Text className="text-gray-500 text-center mb-8">
							Returning to profile creation...
						</Text>
					</View>
				) : (
					// Show loading state
					<View className="items-center">
						<Text className="text-slate-700 text-xl font-bold mb-4">
							Opening Gallery...
						</Text>
						<Text className="text-gray-500 text-center mb-8">
							Please select a photo from your gallery
						</Text>
						<TouchableOpacity
							onPress={handleRetry}
							className="bg-slate-700 rounded-lg px-6 py-3">
							<Text className="text-white font-semibold">
								Open Gallery Again
							</Text>
						</TouchableOpacity>
					</View>
				)}
			</View>
		</SafeAreaView>
	);
}
