import { usePathname, useRouter } from 'expo-router';
import React from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';

interface NavbarProps {
  onLogout?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogout }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    } else {
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
    }
  };

  const handleNavigation = (screen: string) => {
    switch (screen) {
      case 'home':
        router.push('/(tabs)');
        break;
      case 'Loan':
        router.push('/(tabs)/loan');
        break;
      case 'Support':
        router.push('/(tabs)/help');
        break;
      case 'Profile':
        router.push('/(tabs)/profile' as any);
        break;
      default:
        break;
    }
  };

  const isActive = (screen: string) => {
    switch (screen) {
      case 'home':
        return pathname === '/' || pathname === '/(tabs)' || pathname.includes('index');
      case 'Loan':
        return pathname.includes('loan') || pathname.includes('apply-loan');
      case 'Support':
        return pathname.includes('help') || pathname.includes('chat');
      case 'Profile':
        return pathname.includes('profile');
      default:
        return false;
    }
  };

  return (
    <View className="flex-row items-center justify-between px-6 py-4 bg-white border-t border-gray-100">
      {/* Home Button */}
      <TouchableOpacity
        className={`flex-row items-center px-4 py-2 rounded-2xl ${
          isActive('home') ? 'bg-slate-700' : 'bg-transparent'
        }`}
        onPress={() => handleNavigation('home')}
      >
        <Image
          source={require('../assets/images/navbar/home.png')}
          className="w-5 h-5"
          style={{
            tintColor: isActive('home') ? 'white' : '#374151'
          }}
        />
        {isActive('home') && (
          <Text className="text-white font-semibold text-sm ml-2">
            Home
          </Text>
        )}
      </TouchableOpacity>

      {/* Finance/Loan Button */}
      <TouchableOpacity
        className={`flex-row items-center px-4 py-2 rounded-2xl ${
          isActive('Loan') ? 'bg-slate-700' : 'bg-transparent'
        }`}
        onPress={() => handleNavigation('Loan')}
      >
        <Image
          source={require('../assets/images/navbar/Loan.png')}
          className="w-5 h-5"
          style={{
            tintColor: isActive('Loan') ? 'white' : '#374151'
          }}
        />
        {isActive('Loan') && (
          <Text className="text-white font-semibold text-sm ml-2">
            Loan
          </Text>
        )}
      </TouchableOpacity>

      {/* Support Button */}
      <TouchableOpacity
        className={`flex-row items-center px-4 py-2 rounded-2xl ${
          isActive('Support') ? 'bg-slate-700' : 'bg-transparent'
        }`}
        onPress={() => handleNavigation('Support')}
      >
        <Image
          source={require('../assets/images/navbar/help.png')}
          className="w-5 h-5"
          style={{
            tintColor: isActive('Support') ? 'white' : '#374151'
          }}
        />
        {isActive('Support') && (
          <Text className="text-white font-semibold text-sm ml-2">
            Support
          </Text>
        )}
      </TouchableOpacity>

      {/* Profile Button */}
      <TouchableOpacity
        className={`flex-row items-center px-4 py-2 rounded-2xl ${
          isActive('Profile') ? 'bg-slate-700' : 'bg-transparent'
        }`}
        onPress={() => handleNavigation('Profile')}
      >
        <Image
          source={require('../assets/images/navbar/profile.png')}
          className="w-5 h-5"
          style={{
            tintColor: isActive('Profile') ? 'white' : '#374151'
          }}
        />
        {isActive('Profile') && (
          <Text className="text-white font-semibold text-sm ml-2">
            Profile
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
