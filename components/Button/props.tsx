import {
  Animated,
  ViewProps,
  GestureResponderEvent,
  LayoutChangeEvent,
  PressableStateCallbackType,
  Insets,
} from 'react-native';
import {ReactNode} from 'react';

export interface ButtonProps_All extends ViewProps, GradientProps {
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

  // Button props
  variant?: 'outlined' | 'contained' | 'text';
  backgroundColor?: string;
  buttonHeight?: number;
  buttonWidth?: number;
  margin?: number;
  padding?: number;
  borderRadius?: number;
  borderColor?: string;
  borderWidth?: number;

  //Text props
  textColor?: string;
  textSize?: number | string;
  textWeight?: number;

  //Touchable function props
  onPress?: (event: GestureResponderEvent) => void;
  onDoublePress?: (event: GestureResponderEvent) => void;
  onPressIn?: (event: GestureResponderEvent) => void;
  onPressOut?: (event: GestureResponderEvent) => void;
  onLongPress?: (event: GestureResponderEvent) => void;
  onLayout?: (event: LayoutChangeEvent) => void;
  disabled?: boolean;
  delayLongPress?: number | undefined;
  delayPressIn?: number | undefined;
  delayPressOut?: number | undefined;
  hitSlop?: Insets | undefined;
  id?: string | undefined;

  colors?: (string | number)[];
}

export interface GradientProps {
  colors?: (string | number)[];
  start?: {x: number; y: number};
  end?: {x: number; y: number};
  locations?: number[];
  useAngle?: boolean;
  angleCenter?: {x: number; y: number};
  angle?: number;
}
export interface Touchable_Function_Props extends PressableStateCallbackType {
  children?: ReactNode | string;
  onPress?: (event: GestureResponderEvent) => void;
  onDoublePress?: (event: GestureResponderEvent) => void;
  onPressIn?: (event: GestureResponderEvent) => void;
  onPressOut?: (event: GestureResponderEvent) => void;
  onLongPress?: (event: GestureResponderEvent) => void;
  onLayout?: (event: LayoutChangeEvent) => void;
  disabled?: boolean;
  delayLongPress?: number | undefined;
  delayPressIn?: number | undefined;
  delayPressOut?: number | undefined;
  hitSlop?: Insets | number | undefined;
  id?: string | undefined;
}

export interface VariantStyleProps {
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  variant?: string;
}
