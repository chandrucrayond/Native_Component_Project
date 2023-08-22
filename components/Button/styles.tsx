import styled from 'styled-components/native';
import {Animated} from 'react-native';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';

export const radius = 10;

export const Container = styled.View({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
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
}>`
  font-size: ${props => (props.$textSize ? `${props.$textSize}px` : '20px')};
  color: ${props => props.$textColor || 'red'};
  font-weight: ${props => props.$textWeight || 400};
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
  $disabled?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
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
  ${props => (props.$disabled === true ? 'opacity: 0.5;' : 'opacity: 1;')};
`;

export const StyledLinearGradient = styled(LinearGradient).attrs(
  (props: LinearGradientProps) => ({
    colors: props.colors,
    start: props.start,
    end: props.end,
    locations: props.locations,
    useAngle: props.useAngle,
    angleCenter: props.angleCenter,
    angle: props.angle,
    children: props.children,
  }),
)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
