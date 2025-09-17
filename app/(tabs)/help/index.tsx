import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Navbar = require('../../../components/Navbar').default;
const HamburgerMenu = require('../../../components/HamburgerMenu').default;

export default function HelpScreen() {
	const router = useRouter();
	const [subject, setSubject] = useState('');
	const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
	const [message, setMessage] = useState('');

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
				{/* Header with buttons */}
				<View className="flex-row items-center justify-between mb-6 mx-6 mt-4 py-8">
					{/* Left side - Hamburger menu */}
					<TouchableOpacity
						onPress={() => setShowHamburgerMenu(true)}>
						<Image
							source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/X3KVUEZWgu/o00x8t1i_expires_30_days.png"}}
							resizeMode="stretch"
							className="w-10 h-10"
						/>
					</TouchableOpacity>

					{/* Center - Title */}
					<Text className="text-slate-700 text-2xl font-bold">
						Need Help
					</Text>

					{/* Right side - Action buttons */}
					<View className="flex-row">
						<TouchableOpacity
							className="border border-yellow-500 rounded-xl p-2 mr-4"
							onPress={() => alert('Call support pressed!')}>
							<Image
								source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/X3KVUEZWgu/8lr8pdvl_expires_30_days.png"}}
								resizeMode="stretch"
								className="w-6 h-6"
							/>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => router.push('/(tabs)/notifications')}>
							<Image
								source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/X3KVUEZWgu/ziil0odt_expires_30_days.png"}}
								resizeMode="stretch"
								className="w-10 h-10"
							/>
						</TouchableOpacity>
					</View>
				</View>
				{/* Help Options */}
				<View className="mb-6 mx-6">
					<TouchableOpacity
						className="flex-row items-center bg-white border border-gray-300 rounded-lg p-4 mb-4 shadow-lg"
						onPress={() => router.push('/(tabs)/help/feedback')}>
						<Image
							source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/X3KVUEZWgu/autfh8rx_expires_30_days.png"}}
							resizeMode="stretch"
							className="w-6 h-6 mr-3"
						/>
						<Text className="text-slate-700 text-sm font-bold flex-1">
							Help Center
						</Text>
						<Image
							source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/X3KVUEZWgu/qlwaq00b_expires_30_days.png"}}
							resizeMode="stretch"
							className="w-6 h-6"
						/>
					</TouchableOpacity>

					<TouchableOpacity
						className="flex-row items-center bg-white border border-gray-300 rounded-lg p-4 mb-4 shadow-lg"
						onPress={() => router.push('/(tabs)/help/faq')}>
						<Image
							source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/X3KVUEZWgu/5urmzo93_expires_30_days.png"}}
							resizeMode="stretch"
							className="w-6 h-6 mr-3"
						/>
						<Text className="text-slate-700 text-sm font-bold flex-1">
							FAQ
						</Text>
						<Image
							source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/X3KVUEZWgu/y5npt4d5_expires_30_days.png"}}
							resizeMode="stretch"
							className="w-6 h-6"
						/>
					</TouchableOpacity>

					<TouchableOpacity
						className="flex-row items-center bg-white border border-gray-300 rounded-lg p-4 shadow-lg"
						onPress={() => router.push('/(tabs)/help/chat')}>
						<Image
							source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/X3KVUEZWgu/yothwoxs_expires_30_days.png"}}
							resizeMode="stretch"
							className="w-6 h-6 mr-3"
						/>
						<Text className="text-slate-700 text-sm font-bold flex-1">
							Contact Support
						</Text>
						<Image
							source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/X3KVUEZWgu/jahr92jf_expires_30_days.png"}}
							resizeMode="stretch"
							className="w-6 h-6"
						/>
					</TouchableOpacity>
				</View>
				{/* Request Support Section */}
				<View className="mb-32 mx-6">
					<Text className="text-gray-800 text-2xl font-bold mb-4">
						Request Support
					</Text>
					<View>
						<View className="mb-6">
							<View className="mb-4">
								<Text className="text-gray-800 text-base font-bold mb-3">
									Subject
								</Text>
								<TextInput
									placeholder="Enter subject"
									value={subject}
									onChangeText={setSubject}
									className="bg-white border border-slate-700 rounded-lg px-4 py-4 text-base text-gray-800"
									placeholderTextColor="#9CA3AF"
								/>
							</View>
							<View>
								<Text className="text-gray-800 text-base font-bold mb-3">
									Message
								</Text>
								<TextInput
									placeholder="Enter message"
									value={message}
									onChangeText={setMessage}
									multiline
									numberOfLines={4}
									className="bg-white border border-gray-400 rounded-lg px-4 py-4 text-base text-gray-800 h-24"
									placeholderTextColor="#9CA3AF"
									textAlignVertical="top"
								/>
							</View>
						</View>
						<TouchableOpacity
							className="items-center bg-slate-700 rounded-lg py-3"
							onPress={() => alert('Support request submitted!')}>
							<Text className="text-white text-xl font-bold">
								Continue
							</Text>
						</TouchableOpacity>
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
	);
}