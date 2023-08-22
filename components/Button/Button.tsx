import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {
  ButtonContainer,
  ButtonText,
  Container,
  StyledLinearGradient,
} from './styles';
import {
  getVariantBackgroundColor,
  getVariantBorderColor,
} from './GetVariantStyle';
import normalize from './NormalizeFunction';
import {ButtonFunctions} from './ButtonFunctions';
import {ButtonProps_All} from './props';

const Button = (props: ButtonProps_All) => {
  const {ripples, touchableProps, renderRipple} = ButtonFunctions(props);
  const {
    children,
    disabled,
    variant,

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
  } = props;

  const {colors, start, end, locations, useAngle, angleCenter, angle} = props;

  return (
    <TouchableWithoutFeedback {...touchableProps}>
      <ButtonContainer
        $height={normalize(buttonHeight)}
        $width={normalize(buttonWidth)}
        $margin={normalize(margin)}
        $padding={normalize(padding)}
        $borderRadius={normalize(borderRadius)}
        $borderWidth={normalize(borderWidth)}
        $disabled={disabled}
        $backgroundColor={
          colors
            ? 'transparent'
            : getVariantBackgroundColor({backgroundColor, variant})
        }
        $borderColor={getVariantBorderColor({borderColor, textColor, variant})}>
        {typeof children === 'string' ? (
          <React.Fragment>
            {colors && colors.length > 1 && (
              <StyledLinearGradient
                colors={colors}
                start={start}
                end={end}
                locations={locations}
                useAngle={useAngle}
                angleCenter={angleCenter}
                angle={angle}>
                <ButtonText
                  $textColor={textColor}
                  $textSize={normalize(textSize)}
                  $textWeight={normalize(textWeight)}
                  $width={buttonWidth}
                  numberOfLines={buttonWidth && buttonHeight ? 1 : undefined}>
                  {children}
                </ButtonText>
              </StyledLinearGradient>
            )}
            {!colors && (
              <ButtonText
                $textColor={textColor}
                $textSize={normalize(textSize)}
                $textWeight={normalize(textWeight)}
                $width={buttonWidth}
                numberOfLines={buttonWidth && buttonHeight ? 1 : undefined}>
                {children}
              </ButtonText>
            )}
          </React.Fragment>
        ) : (
          children
        )}

        <Container>{ripples.map(renderRipple)}</Container>
      </ButtonContainer>
    </TouchableWithoutFeedback>
  );
};

export default Button;
