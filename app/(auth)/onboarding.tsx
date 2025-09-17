import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

interface OnboardingSlide {
	id: number;
	title: string;
	description: string;
	mainImage: any;
}

export default function OnboardingScreen() {
	const router = useRouter();
	const [currentSlide, setCurrentSlide] = useState(0);

	const slides: OnboardingSlide[] = [
		{
			id: 1,
			title: "Easiest way\nto manage your\nloan",
			description: "Get instant loan approvals with our AI-powered risk assessment system. Fast, secure, and reliable.",
			mainImage: require('../../assets/images/onboarding/card.png')
		},
		{
			id: 2,
			title: "Smart Risk\nAssessment\nSystem",
			description: "Advanced AI algorithms analyze your profile for personalized loan recommendations.",
			mainImage: require('../../assets/images/onboarding/card2.png')
		},
		{
			id: 3,
			title: "Secure &\nReliable\nPlatform",
			description: "Bank-level security ensures your financial information is always protected.",
			mainImage: require('../../assets/images/onboarding/phone.png')
		}
	];

	const handleNext = () => {
		if (currentSlide < slides.length - 1) {
			setCurrentSlide(currentSlide + 1);
		} else {
			handleGetStarted();
		}
	};

	const handleSkip = () => {
		handleGetStarted();
	};

	const handleGetStarted = () => {
		router.push('/(auth)/login');
	};

	const currentSlideData = slides[currentSlide];

	return (
		<SafeAreaView className="flex-1" style={{backgroundColor: '#1e3a8a'}}>
			<View className="flex-1 relative">
				{/* Background Stars */}
				<View className="absolute inset-0 z-0">
					{/* Create scattered star dots */}
					{[...Array(20)].map((_, index) => (
						<View
							key={index}
							className="absolute w-1 h-1 bg-white/30 rounded-full"
							style={{
								top: `${Math.random() * 80 + 10}%`,
								left: `${Math.random() * 90 + 5}%`,
							}}
						/>
					))}
				</View>

				{/* Skip Button - Top Right */}
				<View className="flex-row justify-end pt-12 px-6 z-10">
					<TouchableOpacity onPress={handleSkip}>
						<Text className="text-white text-base font-bold">
							Skip
						</Text>
					</TouchableOpacity>
				</View>

				{/* Side Flowers - Bigger and Better Positioned */}
				<View className="absolute top-20 -left-4 z-5">
					<Image
						source={require('../../assets/images/onboarding/flower.png')}
						className="w-24 h-32"
						resizeMode="contain"
					/>
				</View>

				<View className="absolute top-28 -right-4 z-5">
					<Image
						source={require('../../assets/images/onboarding/flower2.png')}
						className="w-28 h-36"
						resizeMode="contain"
					/>
				</View>

				{/* Main Content */}
				<View className="flex-1 justify-center items-center px-6 z-10">
					{/* Dynamic Main Image */}
					<View className="mb-12">
						<Image
							source={currentSlideData.mainImage}
							className={`${currentSlide === 2 ? 'w-80 h-96' : 'w-80 h-48'}`}
							resizeMode="contain"
						/>
					</View>

					{/* Pagination Dots */}
					<View className="flex-row justify-center mb-8">
						{slides.map((_, index) => (
							<View
								key={index}
								className={`h-2 rounded-full mx-1 ${
									index === currentSlide
										? 'w-8 bg-white'
										: 'w-2 bg-white/50'
								}`}
							/>
						))}
					</View>
				</View>
			</View>

			{/* Bottom Curved Section */}
			<View className="bg-white rounded-t-3xl px-6 py-8">
				<Text className="text-slate-800 text-3xl font-bold mb-4 leading-tight">
					{currentSlideData.title}
				</Text>

				<Text className="text-gray-600 text-base mb-8 leading-6">
					{currentSlideData.description}
				</Text>

				<TouchableOpacity
					onPress={handleNext}
					className="bg-blue-800 rounded-xl py-4 items-center">
					<Text className="text-white text-lg font-bold">
						{currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
