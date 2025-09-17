import React from 'react';
import { Modal, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface ConfirmationModalProps {
	visible: boolean;
	title: string;
	message: string;
	onConfirm: () => void;
	onCancel: () => void;
	confirmText?: string;
	cancelText?: string;
}

export default function ConfirmationModal({
	visible,
	title,
	message,
	onConfirm,
	onCancel,
	confirmText = "Yes",
	cancelText = "No"
}: ConfirmationModalProps) {
	return (
		<Modal
			visible={visible}
			transparent={true}
			animationType="fade"
			onRequestClose={onCancel}>
			<SafeAreaView className="flex-1 bg-white">
				<ScrollView className="flex-1" style={{ backgroundColor: "#26262680" }}>
					<View className="bg-white rounded-2xl p-5 mx-6" style={{ marginVertical: 342 }}>
						<View className="mb-9 mx-8">
							<Text className="text-slate-700 text-2xl font-bold text-center mb-4">
								{title}
							</Text>
							<Text className="text-gray-500 text-sm text-center">
								{message}
							</Text>
						</View>
						
						<View>
							<TouchableOpacity onPress={onConfirm}>
								<LinearGradient 
									start={{x:0, y:0}}
									end={{x:0, y:1}}
									colors={["#374061", "#314495"]}
									className="items-center rounded-xl py-3 mb-4">
									<Text className="text-white text-xl font-bold">
										{confirmText}
									</Text>
								</LinearGradient>
							</TouchableOpacity>
							
							<TouchableOpacity onPress={onCancel}>
								<LinearGradient 
									start={{x:0, y:0}}
									end={{x:0, y:1}}
									colors={["#37406133", "#31449533"]}
									className="items-center border-0 rounded-xl py-3">
									<Text className="text-slate-700 text-xl font-bold">
										{cancelText}
									</Text>
								</LinearGradient>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		</Modal>
	);
}
