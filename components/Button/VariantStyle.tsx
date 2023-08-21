import {VariantStyleProps} from './props';

const getVariantStyle = ({
  backgroundColor,
  borderColor,
  textColor,
  variant,
}: VariantStyleProps) => {
  let variantStyle = {
    backgroundColor: 'none',
    borderWidth: 1,
    borderColor: 'none',
  };

  if (variant === 'outlined') {
    variantStyle.backgroundColor = 'transparent';
    variantStyle.borderWidth = 1;
    if (textColor !== undefined) {
      variantStyle.borderColor = textColor;
    } else {
      variantStyle.borderColor = 'transparent';
    }
  }

  if (variant === 'text') {
    variantStyle.backgroundColor = 'transparent';
    variantStyle.borderWidth = 0;
    variantStyle.borderColor = 'transparent';
  }

  if (variant === 'contained') {
    if (backgroundColor !== undefined) {
      variantStyle.backgroundColor = backgroundColor;
    }
    variantStyle.borderWidth = 1;
    if (borderColor !== undefined) {
      variantStyle.borderColor = borderColor;
    }
  }

  return variantStyle;
};

export default getVariantStyle;
