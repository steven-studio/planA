import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { ImagePickerResponse, launchCamera, MediaType } from 'react-native-image-picker';

export default function UploadCameraScreen() {
	const router = useRouter();
	const [hasPermission, setHasPermission] = useState(false);
	const [cameraActive, setCameraActive] = useState(true);
	const [capturedPhoto, setCapturedPhoto] = useState<string | null>(null);

	// Don't open camera automatically - let user trigger it

	const openCamera = () => {
		console.log('Opening camera...');
		const options = {
			mediaType: 'photo' as MediaType,
			includeBase64: false,
			maxHeight: 2000,
			maxWidth: 2000,
		};

		launchCamera(options, (response: ImagePickerResponse) => {
			console.log('Camera response:', response);
			if (response.didCancel) {
				console.log('User cancelled camera');
				// Don't go back automatically, let user try again
			} else if (response.errorMessage) {
				console.log('Camera Error: ', response.errorMessage);
				Alert.alert('Camera Error', response.errorMessage);
			} else if (response.assets && response.assets[0]) {
				const imageUri = response.assets[0].uri;
				if (imageUri) {
					setCapturedPhoto(imageUri);
					console.log('Photo captured:', imageUri);
				}
			} else {
				console.log('No photo captured');
			}
		});
	};

	const handleBack = () => {
		router.back();
	};

	const handleCapture = () => {
		openCamera();
	};

	const handleRetake = () => {
		setCapturedPhoto(null);
		setCameraActive(true);
		console.log('Retake pressed');
	};

	const handleConfirm = () => {
		if (capturedPhoto) {
			// TODO: Save the captured photo
			console.log('Confirmed photo:', capturedPhoto);
			router.back();
		} else {
			Alert.alert('No Photo', 'Please capture a photo first');
		}
	};

	return (
		<SafeAreaView className="flex-1 bg-white">
			<View className="flex-1">
				{/* Header with back button */}
				<View className="flex-row items-center justify-between px-6 py-4 mt-8">
					<TouchableOpacity
						onPress={handleBack}
						className="w-10 h-10 items-center justify-center"
					>
						<Text className="text-slate-700 text-2xl font-bold">←</Text>
					</TouchableOpacity>

					<Text className="text-slate-700 text-xl font-bold">
						Take Photo
					</Text>

					<View className="w-10 h-10" />
				</View>

				{!capturedPhoto ? (
					// Show camera interface
					<View className="flex-1 items-center justify-center px-6">
						<Text className="text-slate-700 text-xl font-bold mb-4 text-center">
							Camera Ready
						</Text>
						<Text className="text-gray-500 text-center mb-8">
							Tap the button below to open your camera
						</Text>
						<TouchableOpacity
							onPress={handleCapture}
							className="w-20 h-20 bg-slate-700 rounded-full items-center justify-center shadow-lg mb-4"
						>
							<View className="w-16 h-16 bg-white rounded-full" />
						</TouchableOpacity>
						<Text className="text-gray-400 text-sm">
							Capture Photo
						</Text>
					</View>
				) : null}

				{/* Show captured photo overlay if photo is taken */}
				{capturedPhoto && (
					<View className="absolute inset-0 bg-black/80 items-center justify-center z-20">
						<Image
							source={{ uri: capturedPhoto }}
							className="w-80 h-80 rounded-2xl"
							resizeMode="cover"
						/>

						{/* Simple action buttons for captured photo */}
						<View className="absolute bottom-12 left-0 right-0 flex-row justify-center space-x-8 px-6">
							<TouchableOpacity
								onPress={handleRetake}
								className="bg-slate-700 rounded-lg px-8 py-4 flex-1 max-w-32"
							>
								<Text className="text-white font-bold text-center">
									Retake
								</Text>
							</TouchableOpacity>

							<TouchableOpacity
								onPress={handleConfirm}
								className="bg-blue-600 rounded-lg px-8 py-4 flex-1 max-w-32"
							>
								<Text className="text-white font-bold text-center">
									Use Photo
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				)}
			</View>
		</SafeAreaView>
	);
}
