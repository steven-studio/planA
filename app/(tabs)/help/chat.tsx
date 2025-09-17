import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Navbar = require('../../../components/Navbar').default;

export default function ChatScreen() {
	const router = useRouter();
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
				{/* Header with Back Button - Removed mobile status bar */}
				<View className="flex-row items-center mb-6 mx-6 mt-4 py-8">
					<TouchableOpacity
						className="mr-4"
						onPress={() => router.back()}>
						<Image
							source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/X3KVUEZWgu/2m6xv8gh_expires_30_days.png"}}
							resizeMode="stretch"
							className="w-9 h-9"
						/>
					</TouchableOpacity>
					<Text className="text-slate-700 text-2xl font-bold">
						Customer Support
					</Text>
				</View>
				{/* Support Agent Info */}
				<View className="flex-row items-center bg-blue-100 rounded-xl p-3 mb-15 mx-6">
					<Image
						source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/X3KVUEZWgu/3ltzus9w_expires_30_days.png"}}
						resizeMode="stretch"
						className="w-17 h-17 mr-3"
					/>
					<View>
						<Text className="text-slate-700 text-xl font-bold mb-1">
							John Smith
						</Text>
						<Text className="text-slate-700 text-sm font-bold">
							johnsmith@example.com
						</Text>
					</View>
				</View>
				{/* Support Agent Messages */}
				<View className="flex-row mb-1 ml-6">
					<Image
						source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/X3KVUEZWgu/hjefwoxc_expires_30_days.png"}}
						resizeMode="stretch"
						className="w-12 h-12 mr-3"
					/>
					<View className="bg-gray-100 rounded-tr-xl rounded-br-xl rounded-bl-xl pt-2 pb-6 px-4 max-w-xs">
						<Text className="text-gray-600 text-xs">
							Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas porta fermentum,
						</Text>
					</View>
				</View>
				<Text className="text-gray-400 text-xs mb-2 ml-25">
					6:05 PM
				</Text>

				<View className="flex-row mb-1 ml-6">
					<Image
						source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/X3KVUEZWgu/uqs4l1dt_expires_30_days.png"}}
						resizeMode="stretch"
						className="w-12 h-12 mr-3"
					/>
					<View className="bg-gray-100 rounded-tr-xl rounded-br-xl rounded-bl-xl pt-2 pb-6 px-4 max-w-xs">
						<Text className="text-gray-600 text-xs">
							Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas porta fermentum,
						</Text>
					</View>
				</View>
				<Text className="text-gray-400 text-xs mb-5 ml-24">
					6:04 PM
				</Text>
				{/* Today Divider */}
				<View className="items-center mb-5">
					<Text className="text-gray-700 text-base font-bold">
						Today
					</Text>
				</View>

				{/* User Messages (Right-aligned) */}
				<View className="mb-2 ml-40">
					<View className="flex-row mb-2 justify-end">
						<View className="bg-slate-700 rounded-tl-xl rounded-br-xl rounded-bl-xl pt-2 pb-6 pl-4 pr-8 mr-3 max-w-xs">
							<Text className="text-white text-xs">
								Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas porta fermentum,
							</Text>
						</View>
						<Image
							source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/X3KVUEZWgu/fgf7h6h7_expires_30_days.png"}}
							resizeMode="stretch"
							className="w-12 h-12"
						/>
					</View>
					<Text className="text-gray-400 text-xs text-right mr-16">
						8:05 PM
					</Text>
				</View>

				<View className="flex-row mb-2 ml-40 justify-end">
					<View className="bg-slate-700 rounded-tl-xl rounded-br-xl rounded-bl-xl pt-2 pb-6 pl-4 pr-8 mr-3 max-w-xs">
						<Text className="text-white text-xs">
							Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas porta fermentum,
						</Text>
					</View>
					<Image
						source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/X3KVUEZWgu/0nv4zhvn_expires_30_days.png"}}
						resizeMode="stretch"
						className="w-12 h-12"
					/>
				</View>
				<Text className="text-gray-400 text-xs mb-32 text-right mr-6">
					8:01 PM
				</Text>
				{/* Message Input */}
				<View className="flex-row border border-gray-400 rounded-full py-2 px-5 mb-7 mx-6">
					<View className="flex-1 flex-row items-center mr-3">
						<Image
							source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/X3KVUEZWgu/wufde4mn_expires_30_days.png"}}
							resizeMode="stretch"
							className="w-6 h-6 mr-3"
						/>
						<TextInput
							placeholder="Write a message..."
							value={message}
							onChangeText={setMessage}
							className="flex-1 text-sm text-gray-800"
							placeholderTextColor="#9CA3AF"
						/>
					</View>
					<View className="flex-row">
						<TouchableOpacity className="mr-3">
							<Image
								source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/X3KVUEZWgu/ai4iacox_expires_30_days.png"}}
								resizeMode="stretch"
								className="w-6 h-6"
							/>
						</TouchableOpacity>
						<TouchableOpacity>
							<Image
								source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/X3KVUEZWgu/civ2yl4o_expires_30_days.png"}}
								resizeMode="stretch"
								className="w-6 h-6"
							/>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>

			{/* Bottom Navigation */}
			<Navbar onLogout={handleLogout} />
		</SafeAreaView>
	);
}