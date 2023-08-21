import {
  Animated,
  ViewProps,
  StyleProp,
  ViewStyle,
  GestureResponderEvent,
  LayoutChangeEvent,
  PressableStateCallbackType,
  Insets,
  NativeSyntheticEvent,
  TargetedEvent,
} from 'react-native';
import {ReactNode} from 'react';

export interface RippleProps extends ViewProps {
  children?: ReactNode | string;
  rippleColor?: string;
  rippleOpacity?: number;
  rippleDuration?: number;
  rippleSize?: number;
  rippleContainerBorderRadius?: number;
  rippleCentered?: boolean;
  rippleSequential?: boolean;
  rippleFades?: boolean;
  onRippleAnimation?: (
    animation: Animated.CompositeAnimation,
    callback: () => void,
  ) => void;
  onPress?: (event: GestureResponderEvent) => void;
  onLongPress?: (event: GestureResponderEvent) => void;
  onPressIn?: (event: GestureResponderEvent) => void;
  onPressOut?: (event: GestureResponderEvent) => void;
  onDoublePress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  // Added props
  delayLongPress?: number | undefined;
  delayPressIn?: number | undefined;
  delayPressOut?: number | undefined;

  buttonStyle?: object;
  textStyle?: object;
  variant?: 'outlined' | 'contained' | 'text';
  textColor?: string;
  backgroundColor?: string;
  height?: number;
  width?: number;
  fontSize?: number;
}

export type TouchableProps = PressableStateCallbackType & {
  onPress?: (event: GestureResponderEvent) => void;
  onPressIn?: (event: GestureResponderEvent) => void;
  onPressOut?: (event: GestureResponderEvent) => void;
  onLongPress?: (event: GestureResponderEvent) => void;
  onLayout: (event: LayoutChangeEvent) => void;
  disabled?: boolean;

  // Added props
  delayLongPress?: number | undefined;
  delayPressIn?: number | undefined;
  delayPressOut?: number | undefined;
  hitSlop?: null | Insets | number | undefined;
  id?: string | undefined;
  onDoublePress?: (event: GestureResponderEvent) => void;
};
