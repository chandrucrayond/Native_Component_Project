import React from 'react';
import {Text, View} from 'react-native';
import {GreetingProps} from './props';
import {StyledView, StyledText} from './style';

const Greeting: React.FC<GreetingProps> = ({name, style}) => {
  return (
    <StyledView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {typeof name === 'string' && (
        <StyledText style={style}>chan {name}!</StyledText>
      )}
    </StyledView>
  );
};

export default Greeting;
