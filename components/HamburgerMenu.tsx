import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';

interface HamburgerMenuProps {
  visible: boolean;
  onClose: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ visible, onClose }) => {
	const router = useRouter();
	const [showLogoutModal, setShowLogoutModal] = useState(false);

	const handleNavigation = (route: string) => {
		onClose();
		router.push(route as any);
	};

	const handleLogoutPress = () => {
		setShowLogoutModal(true);
	};

	const handleLogoutConfirm = () => {
		setShowLogoutModal(false);
		onClose();
		// TODO: Implement logout functionality
		console.log('Logout confirmed');
		router.push('/(auth)/login');
	};

	const handleLogoutCancel = () => {
		setShowLogoutModal(false);
	};

	return (
		<>
			{/* Main Hamburger Menu */}
			<Modal
				visible={visible && !showLogoutModal}
				animationType="fade"
				transparent={true}
				onRequestClose={onClose}
			>
				<View className="flex-1 flex-row bg-black/40">
					{/* Menu Panel - Full height, slides from left */}
					<View className="bg-white h-full shadow-2xl" style={{ width: '80%' }}>
						<ScrollView className="flex-1 pt-24">
							{/* Profile Section */}
							<View className="flex-row items-center justify-between mb-20 mx-6">
								<View className="flex-row items-center flex-1">
									<Image
										source={require('../assets/images/menu/profile-avatar.png')}
										resizeMode="cover"
										className="w-20 h-20 mr-3 rounded-full"
									/>
									<View className="flex-1">
										<Text className="text-black text-lg font-bold mb-1">
											John Smith
										</Text>
										<Text className="text-black text-sm">
											johnsmith@example.com
										</Text>
									</View>
								</View>
								{/* Close button positioned correctly */}
								<TouchableOpacity
									className="border border-gray-300 rounded-xl p-2 ml-2"
									onPress={onClose}>
									<Text className="text-gray-600 text-lg font-bold">×</Text>
								</TouchableOpacity>
							</View>
							{/* Menu Items */}
							<View className="mb-16 ml-6">
								{/* Home */}
								<TouchableOpacity
									className="flex-row items-center py-3 px-4 mb-8"
									onPress={() => handleNavigation('/(tabs)')}>
									<Image
										source={require('../assets/images/menu/home.png')}
										resizeMode="contain"
										className="w-6 h-6 mr-3"
									/>
									<Text className="text-slate-700 text-lg font-bold">
										Home
									</Text>
								</TouchableOpacity>

								{/* Settings */}
								<TouchableOpacity
									className="flex-row items-center py-3 px-4 mb-8"
									onPress={() => handleNavigation('/(tabs)/settings/')}>
									<Image
										source={require('../assets/images/menu/settings.png')}
										resizeMode="contain"
										className="w-6 h-6 mr-3"
									/>
									<Text className="text-slate-700 text-lg font-bold">
										Settings
									</Text>
								</TouchableOpacity>

								{/* Help & Feedback */}
								<TouchableOpacity
									className="flex-row items-center py-3 px-4 mb-8"
									onPress={() => handleNavigation('/(tabs)/help/feedback')}>
									<Image
										source={require('../assets/images/menu/help.png')}
										resizeMode="contain"
										className="w-6 h-6 mr-3"
									/>
									<Text className="text-slate-700 text-lg font-bold">
										Help & Feedback
									</Text>
								</TouchableOpacity>

								{/* How To Use */}
								<TouchableOpacity
									className="flex-row items-center py-3 px-4 mb-8"
									onPress={() => handleNavigation('/(tabs)/help/how-to-use')}>
									<Image
										source={require('../assets/images/menu/howtouse.png')}
										resizeMode="contain"
										className="w-6 h-6 mr-3"
									/>
									<Text className="text-slate-700 text-lg font-bold">
										How To Use
									</Text>
								</TouchableOpacity>
							</View>
							{/* Logout Button */}
							<TouchableOpacity
								className="flex-row items-center bg-red-50 w-[65%] border border-red-500 rounded-lg py-3 px-4 ml-6 mb-6"
								onPress={handleLogoutPress}>
								<Image
									source={require('../assets/images/menu/logout.png')}
									resizeMode="contain"
									className="w-6 h-6 mr-3"
								/>
								<Text className="text-red-500 text-lg font-bold">
									Logout
								</Text>
							</TouchableOpacity>
						</ScrollView>
					</View>

					{/* Overlay to close menu */}
					<TouchableOpacity
						className="flex-1"
						onPress={onClose}
						activeOpacity={1}
					/>
				</View>
			</Modal>

			{/* Logout Confirmation Modal */}
			<Modal
				visible={showLogoutModal}
				transparent={true}
				animationType="fade"
				onRequestClose={handleLogoutCancel}>
				<View className="flex-1 justify-center items-center" style={{ backgroundColor: "#26262680" }}>
					<View className="bg-white rounded-2xl p-5 mx-6 w-80">
						<View className="mb-9 px-4">
							<Text className="text-slate-700 text-2xl font-bold text-center mb-4">
								Logout?
							</Text>
							<Text className="text-gray-500 text-sm text-center">
								Are you sure you want to logout from this account?
							</Text>
						</View>

						<View className="px-4">
							<TouchableOpacity onPress={handleLogoutConfirm}>
								<View className="items-center rounded-xl py-3 mb-4 bg-slate-700">
									<Text className="text-white text-xl font-bold">
										Yes
									</Text>
								</View>
							</TouchableOpacity>

							<TouchableOpacity onPress={handleLogoutCancel}>
								<View className="items-center rounded-xl py-3 bg-gray-200">
									<Text className="text-slate-700 text-xl font-bold">
										No
									</Text>
								</View>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</Modal>
		</>
	);
};

export default HamburgerMenu;