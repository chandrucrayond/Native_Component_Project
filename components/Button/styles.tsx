import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {Animated} from 'react-native';

export const radius = 10;

export const Container = styled.View({
  ...StyleSheet.absoluteFillObject,
  backgroundColor: 'transparent',
  overflow: 'hidden',
});

export const Ripple = styled(Animated.View)({
  width: radius * 2,
  height: radius * 2,
  borderRadius: radius,
  overflow: 'hidden',
  position: 'absolute',
});

export const ButtonText = styled.Text<{
  $textColor?: string;
  $textSize?: number;
  $textWeight?: number;
  $width?: number;
  $padding?: number;
}>`
  font-size: ${props => (props.$textSize ? `${props.$textSize}px` : '20px')};
  color: ${props => props.$textColor || 'red'};
  font-weight: ${props => props.$textWeight || 400};
  ${props =>
    props.$width !== undefined ? 'width:' + props.$width + 'px' : ''};
    ${props =>
      props.$padding !== undefined ? 'padding:' + props.$padding + 'px' : ''};
`;

export const ButtonContainer = styled(Animated.View)<{
  $backgroundColor?: string;
  $height?: number;
  $width?: number;
  $margin?: number;
  $padding?: number;
  $borderRadius?: number;
  $borderColor?: string;
  $borderWidth?: number;
}>`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.$backgroundColor || 'red'};
  ${props =>
    props.$margin !== undefined ? 'margin:' + props.$margin + 'px' : ''};
  
  ${props =>
    props.$width !== undefined ? 'width:' + props.$width + 'px' : ''};
  ${props =>
    props.$height !== undefined ? 'height:' + props.$height + 'px' : ''};
  border-radius: ${props => props.$borderRadius || 20}px;
  border-color: ${props => props.$borderColor || 'red'};
  border-width: ${props => props.$borderWidth || 1}px;
  pointer-events: box-only;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
