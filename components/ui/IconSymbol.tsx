import { SymbolView, SymbolWeight } from 'expo-symbols';
import { StyleProp, ViewStyle } from 'react-native';

export type IconSymbolName =
  | 'house.fill'
  | 'paperplane.fill'
  | 'chevron.left.forwardslash.chevron.right'
  | 'plus'
  | 'heart'
  | 'star'
  | 'gear'
  | 'person'
  | 'magnifyingglass'
  | 'bell.fill'
  | 'dollarsign.circle.fill'
  | 'questionmark.circle.fill'
  | 'person.circle.fill';

/**
 * An icon component that uses SF Symbols on iOS, and a fallback on Android and web.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
  weight = 'regular',
}: {
  name: IconSymbolName;
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
}) {
  return (
    <SymbolView
      weight={weight}
      tintColor={color}
      resizeMode="scaleAspectFit"
      name={name}
      style={[
        {
          width: size,
          height: size,
        },
        style,
      ]}
    />
  );
}
