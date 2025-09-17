import { useRouter } from 'expo-router';
import React from "react";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View, } from "react-native";

export default function NotificationsScreen() {
	const router = useRouter();

	const handleBackPress = () => {
		router.back();
	};

	return (
		<SafeAreaView className="flex-1 bg-white">
			<ScrollView className="flex-1 bg-white">
				<View className="flex-row items-center pr-1 mb-6 ml-6 mt-4 py-6">
					<TouchableOpacity onPress={handleBackPress}>
						<Image
							source={require('../../assets/images/icons/back.png')}
							resizeMode="contain"
							style={{
								width: 37,
								height: 36,
								marginRight: 78,
							}}
						/>
					</TouchableOpacity>
					<Text
						style={{
							color: "#374061",
							fontSize: 24,
							fontWeight: "bold",
						}}>
						{"Notifications"}
					</Text>
				</View>
				<View className="mb-12 mx-6">
					<View
						className="flex-row items-center rounded-xl border py-3 px-4 mb-4"
						style={{
							backgroundColor: "#F4F7FA",
							borderColor: "#B1C5DF",
						}}>
						<Image
							source={require('../../assets/images/notifications/notification.png')}
							resizeMode="contain"
							style={{
								width: 49,
								height: 49,
								marginRight: 10,
							}}
						/>
						<View className="flex-1">
							<Text
								className="text-lg font-bold mb-1"
								style={{
									color: "#262626",
								}}>
								{"Lorem Ipsum"}
							</Text>
							<Text
								className="text-sm"
								style={{
									color: "#6F6F6F",
								}}>
								{"Lorem ipsum dolor sit amet, consectetur adipiscing elit,"}
							</Text>
						</View>
					</View>
					<View
						className="flex-row items-center rounded-xl border py-3 px-4 mb-4"
						style={{
							backgroundColor: "#F4F7FA",
							borderColor: "#B1C5DF",
						}}>
						<Image
							source={require('../../assets/images/notifications/notification.png')}
							resizeMode="contain"
							style={{
								width: 49,
								height: 49,
								marginRight: 10,
							}}
						/>
						<View className="flex-1">
							<Text
								className="text-lg font-bold mb-1"
								style={{
									color: "#262626",
								}}>
								{"Lorem Ipsum"}
							</Text>
							<Text
								className="text-sm"
								style={{
									color: "#6F6F6F",
								}}>
								{"Lorem ipsum dolor sit amet, consectetur adipiscing elit,"}
							</Text>
						</View>
					</View>
					<View
						className="flex-row items-center rounded-xl border py-3 px-4 mb-4"
						style={{
							backgroundColor: "#F4F7FA",
							borderColor: "#B1C5DF",
						}}>
						<Image
							source={require('../../assets/images/notifications/notification.png')}
							resizeMode="contain"
							style={{
								width: 49,
								height: 49,
								marginRight: 10,
							}}
						/>
						<View className="flex-1">
							<Text
								className="text-lg font-bold mb-1"
								style={{
									color: "#262626",
								}}>
								{"Lorem Ipsum"}
							</Text>
							<Text
								className="text-sm"
								style={{
									color: "#6F6F6F",
								}}>
								{"Lorem ipsum dolor sit amet, consectetur adipiscing elit,"}
							</Text>
						</View>
					</View>
					<View
						className="flex-row items-center rounded-xl border py-3 px-4 mb-4"
						style={{
							backgroundColor: "#F4F7FA",
							borderColor: "#B1C5DF",
						}}>
						<Image
							source={require('../../assets/images/notifications/notification.png')}
							resizeMode="contain"
							style={{
								width: 49,
								height: 49,
								marginRight: 10,
							}}
						/>
						<View className="flex-1">
							<Text
								className="text-lg font-bold mb-1"
								style={{
									color: "#262626",
								}}>
								{"Lorem Ipsum"}
							</Text>
							<Text
								className="text-sm"
								style={{
									color: "#6F6F6F",
								}}>
								{"Lorem ipsum dolor sit amet, consectetur adipiscing elit,"}
							</Text>
						</View>
					</View>
					<View
						className="flex-row items-center rounded-xl border py-3 px-4 mb-4"
						style={{
							backgroundColor: "#F4F7FA",
							borderColor: "#B1C5DF",
						}}>
						<Image
							source={require('../../assets/images/notifications/notification.png')}
							resizeMode="contain"
							style={{
								width: 49,
								height: 49,
								marginRight: 10,
							}}
						/>
						<View className="flex-1">
							<Text
								className="text-lg font-bold mb-1"
								style={{
									color: "#262626",
								}}>
								{"Lorem Ipsum"}
							</Text>
							<Text
								className="text-sm"
								style={{
									color: "#6F6F6F",
								}}>
								{"Lorem ipsum dolor sit amet, consectetur adipiscing elit,"}
							</Text>
						</View>
					</View>
					<View
						className="flex-row items-center rounded-xl border py-3 px-4 mb-4"
						style={{
							backgroundColor: "#F4F7FA",
							borderColor: "#B1C5DF",
						}}>
						<Image
							source={require('../../assets/images/notifications/notification.png')}
							resizeMode="contain"
							style={{
								width: 49,
								height: 49,
								marginRight: 10,
							}}
						/>
						<View className="flex-1">
							<Text
								className="text-lg font-bold mb-1"
								style={{
									color: "#262626",
								}}>
								{"Lorem Ipsum"}
							</Text>
							<Text
								className="text-sm"
								style={{
									color: "#6F6F6F",
								}}>
								{"Lorem ipsum dolor sit amet, consectetur adipiscing elit,"}
							</Text>
						</View>
					</View>
					<View
						className="flex-row items-center rounded-xl border py-3 px-4 mb-4"
						style={{
							backgroundColor: "#F4F7FA",
							borderColor: "#B1C5DF",
						}}>
						<Image
							source={require('../../assets/images/notifications/notification.png')}
							resizeMode="contain"
							style={{
								width: 49,
								height: 49,
								marginRight: 10,
							}}
						/>
						<View className="flex-1">
							<Text
								className="text-lg font-bold mb-1"
								style={{
									color: "#262626",
								}}>
								{"Lorem Ipsum"}
							</Text>
							<Text
								className="text-sm"
								style={{
									color: "#6F6F6F",
								}}>
								{"Lorem ipsum dolor sit amet, consectetur adipiscing elit,"}
							</Text>
						</View>
					</View>
					<View
						className="flex-row items-center rounded-xl border py-3 px-4"
						style={{
							backgroundColor: "#F4F7FA",
							borderColor: "#B1C5DF",
						}}>
						<Image
							source={require('../../assets/images/notifications/notification.png')}
							resizeMode="contain"
							style={{
								width: 49,
								height: 49,
								marginRight: 10,
							}}
						/>
						<View className="flex-1">
							<Text
								className="text-lg font-bold mb-1"
								style={{
									color: "#262626",
								}}>
								{"Lorem Ipsum"}
							</Text>
							<Text
								className="text-sm"
								style={{
									color: "#6F6F6F",
								}}>
								{"Lorem ipsum dolor sit amet, consectetur adipiscing elit,"}
							</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}