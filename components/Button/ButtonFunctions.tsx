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