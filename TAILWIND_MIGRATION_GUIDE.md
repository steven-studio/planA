# Tailwind CSS with NativeWind Migration Guide

## ✅ Configuration Status

Your Tailwind CSS with NativeWind is **properly configured**! Here's what's already set up:

### 1. Dependencies Installed
- ✅ `tailwindcss@^3.3.2`
- ✅ `nativewind@^4.1.23`
- ✅ `lightningcss@^1.30.1`

### 2. Configuration Files
- ✅ `tailwind.config.js` - Properly configured with NativeWind preset
- ✅ `babel.config.js` - Includes NativeWind babel preset
- ✅ `metro.config.js` - Configured with NativeWind metro plugin
- ✅ `app/globals.css` - Contains Tailwind directives
- ✅ `nativewind-env.d.ts` - TypeScript declarations

## 🎯 Migration Strategy

### Before (StyleSheet)
```tsx
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#030014',
    marginBottom: 8,
  },
});

<View style={styles.container}>
  <Text style={styles.title}>Welcome</Text>
</View>
```

### After (Tailwind)
```tsx
import { View, Text } from 'react-native';

<View className="flex-1 bg-white p-6">
  <Text className="text-3xl font-bold text-primary mb-2">Welcome</Text>
</View>
```

## 🎨 Custom Colors Available

Your `tailwind.config.js` includes these custom colors:

```javascript
colors: {
  primary: "#030014",
  secondary: "#151312",
  light: {
    100: "#D6C7FF",
    200: "#A8B5DB", 
    300: "#9CA4AB",
  },
  dark: {
    100: "#221F3D",
    200: "#0F0D23",
  },
  accent: "#AB8BFF",
}
```

Usage examples:
- `text-primary` → `#030014`
- `bg-light-300` → `#9CA4AB`
- `border-dark-100` → `#221F3D`

## 📏 Common Style Conversions

### Layout & Flexbox
| StyleSheet | Tailwind |
|------------|----------|
| `flex: 1` | `flex-1` |
| `flexDirection: 'row'` | `flex-row` |
| `justifyContent: 'center'` | `justify-center` |
| `alignItems: 'center'` | `items-center` |
| `alignSelf: 'flex-end'` | `self-end` |

### Spacing
| StyleSheet | Tailwind |
|------------|----------|
| `margin: 16` | `m-4` |
| `marginTop: 20` | `mt-5` |
| `padding: 24` | `p-6` |
| `marginBottom: 8` | `mb-2` |

### Typography
| StyleSheet | Tailwind |
|------------|----------|
| `fontSize: 16` | `text-base` |
| `fontSize: 28` | `text-3xl` |
| `fontWeight: 'bold'` | `font-bold` |
| `fontWeight: '500'` | `font-medium` |

### Colors & Backgrounds
| StyleSheet | Tailwind |
|------------|----------|
| `backgroundColor: '#FFFFFF'` | `bg-white` |
| `color: '#030014'` | `text-primary` |
| `borderColor: '#E5E5E5'` | `border-gray-200` |

### Dimensions
| StyleSheet | Tailwind |
|------------|----------|
| `width: 80, height: 80` | `w-20 h-20` |
| `width: 50, height: 50` | `w-12 h-12` |
| `height: 1` | `h-px` |

### Border & Radius
| StyleSheet | Tailwind |
|------------|----------|
| `borderRadius: 12` | `rounded-xl` |
| `borderWidth: 1` | `border` |

## 🔄 Migration Examples

### Example 1: Button Component
```tsx
// Before
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#221F3D',
    borderRadius: 12,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  }
});

// After
<TouchableOpacity className="bg-dark-100 rounded-xl h-14 justify-center items-center mt-2">
```

### Example 2: Card Component
```tsx
// Before
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  }
});

// After
<View className="bg-white rounded-xl p-4 mb-4 shadow-md">
```

## ⚠️ Important Notes

1. **React Native Paper Components**: Some components like `TextInput` from react-native-paper may still need `style` prop for complex styling that NativeWind doesn't support.

2. **Mixed Approach**: You can use both `className` and `style` together:
   ```tsx
   <TextInput
     className="mb-4"
     style={{ backgroundColor: '#FFFFFF', height: 56 }}
   />
   ```

3. **Custom Values**: For values not available in Tailwind, use arbitrary values:
   ```tsx
   className="w-[80px] h-[56px]"
   ```

## 🚀 Next Steps

1. ✅ **Login Screen** - Already converted to Tailwind
2. ✅ **ThemedText Component** - Already converted to Tailwind
3. 🔄 Convert remaining auth screens (`register.tsx`, `otp.tsx`, etc.)
4. 🔄 Convert tab screens (`index.tsx`, `explore.tsx`)
5. 🔄 Convert other components in `/components` folder

## 🧪 Testing

After migration, test your app:
```bash
npm start
# or
expo start
```

Your Tailwind setup is working correctly if you see the styled components rendering properly!
