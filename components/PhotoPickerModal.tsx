import React from 'react';
import { Modal, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

interface PhotoPickerModalProps {
  visible: boolean;
  onClose: () => void;
  onCamera: () => void;
  onGallery: () => void;
}

const PhotoPickerModal: React.FC<PhotoPickerModalProps> = ({
  visible,
  onClose,
  onCamera,
  onGallery,
}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <SafeAreaView className="flex-1">
        <ScrollView className="flex-1 bg-gray-600/50">
          {/* Backdrop - tap to close */}
          <TouchableOpacity
            className="flex-1 pt-80 pb-80"
            activeOpacity={1}
            onPress={onClose}
          >
            <View className="flex-1 justify-center items-center px-6">
              {/* Modal Content */}
              <TouchableOpacity
                activeOpacity={1}
                onPress={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl p-5 w-full"
              >
                {/* Header */}
                <View className="mb-9 mx-8">
                  <Text className="text-slate-700 text-2xl font-bold mb-4 text-center">
                    Upload Profile Picture
                  </Text>
                  <Text className="text-gray-500 text-sm text-center">
                    Please select to upload your profile picture.
                  </Text>
                </View>

                {/* Action Buttons */}
                <View>
                  {/* Camera Button */}
                  <TouchableOpacity
                    onPress={onCamera}
                    className="mb-4 bg-slate-700 items-center rounded-lg py-3"
                  >
                    <Text className="text-white text-xl font-bold">
                      Camera
                    </Text>
                  </TouchableOpacity>

                  {/* Gallery Button */}
                  <TouchableOpacity
                    onPress={onGallery}
                    className="bg-slate-100 border border-slate-300 items-center rounded-lg py-3"
                  >
                    <Text className="text-slate-700 text-xl font-bold">
                      Gallery
                    </Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

export default PhotoPickerModal;
