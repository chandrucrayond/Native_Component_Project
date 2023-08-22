import {VariantStyleProps} from './props';

export const getVariantBackgroundColor = ({
  backgroundColor,
  variant,
}: VariantStyleProps) => {
  if (variant === 'outlined') {
    backgroundColor = 'transparent';
  } else if (variant === 'text') {
    backgroundColor = 'transparent';
  } else if (variant === 'contained') {
    if (backgroundColor !== undefined) {
      backgroundColor = backgroundColor;
    }
  }
  return backgroundColor;
};

export const getVariantBorderColor = ({
  borderColor,
  textColor,
  variant,
}: VariantStyleProps) => {
  if (variant === 'outlined') {
    borderColor = textColor;
  } else if (variant === 'text') {
    borderColor = 'transparent';
  } else if (variant === 'contained') {
    if (borderColor !== undefined) {
      borderColor = borderColor;
    }
  }
  return borderColor;
};
