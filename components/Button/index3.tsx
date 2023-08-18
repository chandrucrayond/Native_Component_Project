import PropTypes from 'prop-types';
import React, {useState, useRef, useCallback} from 'react';
import {
  View,
  Animated,
  Easing,
  Platform,
  TouchableWithoutFeedback,
  I18nManager,
} from 'react-native';

import {styles, radius} from './styles';

const Ripple = ({
  children,
  rippleColor = 'rgb(0, 0, 0)',
  rippleOpacity = 0.3,
  rippleDuration = 400,
  rippleSize = 0,
  rippleContainerBorderRadius = 0,
  rippleCentered = false,
  rippleSequential = false,
  rippleFades = true,
  disabled = false,
  onRippleAnimation = (animation, callback) => animation.start(callback),
  ...props
}) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [ripples, setRipples] = useState([]);
  const uniqueRef = useRef(0);
  const mountedRef = useRef(true); // UseRef to track mounted state

  const onAnimationEnd = useCallback(() => {
    if (mountedRef.current) {
      setRipples(prevRipples => prevRipples.slice(1));
    }
  }, []);

  const onLayout = event => {
    const {width, height} = event.nativeEvent.layout;
    const {onLayout} = props;

    if (typeof onLayout === 'function') {
      onLayout(event);
    }

    setWidth(width);
    setHeight(height);
  };

  const onPress = event => {
    const {ripples} = this.state;
    const {onPress, rippleSequential} = props;

    if (!rippleSequential || !ripples.length) {
      if (typeof onPress === 'function') {
        requestAnimationFrame(() => onPress(event));
      }

      startRipple(event);
    }
  };

  const onLongPress = event => {
    const {onLongPress} = props;

    if (typeof onLongPress === 'function') {
      requestAnimationFrame(() => onLongPress(event));
    }

    startRipple(event);
  };

  const onPressIn = event => {
    const {onPressIn} = props;

    if (typeof onPressIn === 'function') {
      onPressIn(event);
    }
  };

  const onPressOut = event => {
    const {onPressOut} = props;

    if (typeof onPressOut === 'function') {
      onPressOut(event);
    }
  };

  const startRipple = event => {
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
      easing: Easing.out(Easing.ease),
      duration: rippleDuration,
      useNativeDriver: true,
    });

    onRippleAnimation(animation, onAnimationEnd);

    setRipples(prevRipples => [...prevRipples, ripple]);
  };

  const renderRipple = ({unique, progress, locationX, locationY, R}) => {
    const rippleStyle = {
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

    return <Animated.View style={[styles.ripple, rippleStyle]} key={unique} />;
  };

  mountedRef.current = true;

  const touchableProps = {
    ...props,
    onPress: startRipple,
    onPressIn,
    onPressOut,
    onLongPress,
    onLayout,
  };

  const containerStyle = {
    borderRadius: rippleContainerBorderRadius,
  };

  return (
    <TouchableWithoutFeedback {...touchableProps}>
      <Animated.View {...props} pointerEvents="box-only">
        {children}
        <View style={[styles.container, containerStyle]}>
          {ripples.map(renderRipple)}
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

Ripple.propTypes = {
  ...Animated.View.propTypes,
  ...TouchableWithoutFeedback.propTypes,

  rippleColor: PropTypes.string,
  rippleOpacity: PropTypes.number,
  rippleDuration: PropTypes.number,
  rippleSize: PropTypes.number,
  rippleContainerBorderRadius: PropTypes.number,
  rippleCentered: PropTypes.bool,
  rippleSequential: PropTypes.bool,
  rippleFades: PropTypes.bool,
  disabled: PropTypes.bool,

  onRippleAnimation: PropTypes.func,
};

export default Ripple;
