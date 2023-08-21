import React, {useState, useRef, useCallback, ReactNode} from 'react';
import {
  View,
  Animated,
  Easing,
  Text,
  TouchableWithoutFeedback,
  I18nManager,
  ViewProps,
  EasingFunction,
  StyleProp,
  ViewStyle,
  GestureResponderEvent,
  LayoutChangeEvent,
} from 'react-native';
import {ButtonContainer, ButtonText, Container, radius, Ripple} from './styles';
import PropTypes from 'prop-types';
import {ButtonProps_All, Touchable_Function_Props} from './props';

export const ButtonFunctions= ({
  children,
  rippleColor = 'rgb(0, 0, 0)',
  rippleOpacity = 0.3,
  rippleDuration = 400,
  rippleSize = 0,
  rippleContainerBorderRadius,
  rippleCentered = false,
  rippleSequential = false,
  rippleFades = true,
  onRippleAnimation = (animation, callback) => animation.start(callback),
  disabled,

  textColor,
  textSize,
  textWeight,

  backgroundColor,
  buttonHeight,
  buttonWidth,
  margin,
  padding,
  borderRadius,
  borderColor,
  borderWidth,

  variant,
  delayPressIn,
  delayPressOut,
  delayLongPress,
  hitSlop,
  id,
  ...props
}: ButtonProps_All) => {const [width, setWidth] = useState<number>(0);
const [height, setHeight] = useState<number>(0);
const [ripples, setRipples] = useState<
  {
    unique: number;
    progress: Animated.Value;
    locationX: number;
    locationY: number;
    R: number;
  }[]
>([]);
const uniqueRef = useRef<number>(0);
const mountedRef = useRef<boolean>(true);
const onAnimationEnd = useCallback(() => {
  if (mountedRef.current) {
    setRipples(prevRipples => prevRipples.slice(1));
  }
}, []);
const [lastPressTime, setLastPressTime] = useState(0);

const onLayout = (event: LayoutChangeEvent) => {
  event.persist();
  const {width, height} = event.nativeEvent.layout;
  const {onLayout} = props;

  if (typeof onLayout === 'function') {
    onLayout(event);
  }

  setWidth(width);
  setHeight(height);
};

const onPress = (event: GestureResponderEvent) => {
  event.persist();
  const {onPress} = props;
  const {onDoublePress} = props;
  const currentTimeMillis = new Date().getTime();
  const currentTimeInSeconds = currentTimeMillis / 1000;
  const delay = 0.5;

  if (typeof onPress === 'function') {
    requestAnimationFrame(() => onPress(event));
    setLastPressTime(currentTimeInSeconds);
  }

  if (
    typeof onDoublePress === 'function' &&
    currentTimeInSeconds - lastPressTime <= delay
  ) {
    requestAnimationFrame(() => onDoublePress(event));
    setLastPressTime(0);
  }

  startRipple(event);
};

const onLongPress = (event: GestureResponderEvent) => {
  event.persist();
  const {onLongPress} = props;

  if (typeof onLongPress === 'function') {
    requestAnimationFrame(() => onLongPress(event));
  }

  startRipple(event);
};

const onPressIn = (event: GestureResponderEvent) => {
  event.persist();
  const {onPressIn} = props;

  if (typeof onPressIn === 'function') {
    onPressIn(event);
  }
};

const onPressOut = (event: GestureResponderEvent) => {
  event.persist();
  const {onPressOut} = props;

  if (typeof onPressOut === 'function') {
    onPressOut(event);
  }
};

const startRipple = (event: GestureResponderEvent) => {
  const w2 = 0.5 * width;
  const h2 = 0.5 * height;

  const {locationX, locationY} = rippleCentered
    ? {locationX: w2, locationY: h2}
    : event.nativeEvent;

  const offsetX = Math.abs(w2 - locationX);
  const offsetY = Math.abs(h2 - locationY);

  const R =
    rippleSize > 0
      ? 0.5 * rippleSize
      : Math.sqrt(Math.pow(w2 + offsetX, 2) + Math.pow(h2 + offsetY, 2));

  const ripple = {
    unique: uniqueRef.current++,
    progress: new Animated.Value(0),
    locationX,
    locationY,
    R,
  };

  const animation = Animated.timing(ripple.progress, {
    toValue: 1,
    easing: Easing.out(Easing.ease) as EasingFunction,
    duration: rippleDuration,
    useNativeDriver: true,
  });

  onRippleAnimation(animation, onAnimationEnd);

  setRipples(prevRipples => [...prevRipples, ripple]);
};

const renderRipple = ({
  unique,
  progress,
  locationX,
  locationY,
  R,
}: (typeof ripples)[0]) => {
  const rippleStyle: StyleProp<ViewStyle> = {
    top: locationY - radius,
    [I18nManager.isRTL ? 'right' : 'left']: locationX - radius,
    backgroundColor: rippleColor,

    transform: [
      {
        scale: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0.5 / radius, R / radius],
        }),
      },
    ],

    opacity: rippleFades
      ? progress.interpolate({
          inputRange: [0, 1],
          outputRange: [rippleOpacity, 0],
        })
      : rippleOpacity,
  };

  return <Ripple style={[rippleStyle]} key={unique} />;
};

mountedRef.current = true;

 const touchableProps: Touchable_Function_Props = {
  // ...props,
  onPress,
  onPressIn,
  onPressOut,
  onLongPress,
  onLayout,
  delayLongPress,
  delayPressIn,
  delayPressOut,
  hitSlop,
  id,
  disabled,
  pressed: false,
};

return {ripples, touchableProps, renderRipple};
}

