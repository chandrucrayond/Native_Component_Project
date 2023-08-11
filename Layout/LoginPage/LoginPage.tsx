import React from 'react';
import { Image } from 'react-native';
import { StyledView, StyledText } from './styles';
import { LoginPageProps } from './props';

export default function LoginPage({ loginLogoImage }: LoginPageProps) {
  return (
    <StyledView>
      {loginLogoImage && (
        <Image
          source={{uri: loginLogoImage}}
          style={{ width: 200, height: 100 }}
        />
      )}
      {/* Closing tag for TouchableWithoutFeedback */}
      {/* </TouchableWithoutFeedback> */}
    </StyledView>
  );
}
