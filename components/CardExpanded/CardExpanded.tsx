import React from 'react';
import {Text, View, StatusBar} from 'react-native';
import {CardExpandedProps} from './props';
import {CardExpandedContainer, CardExpandedCard, CardText} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

const CardExpanded: React.FC<CardExpandedProps> = ({route, navigation}) => {
  const item = route?.params?.item;
  return (
    <SafeAreaView>
      <StatusBar
        animated={true}
        backgroundColor="#383535"
        barStyle="light-content"
        networkActivityIndicatorVisible ={false}
      />
      <CardExpandedContainer>
        <CardExpandedCard>
          <CardText>This is {item?.title} page</CardText>
        </CardExpandedCard>
      </CardExpandedContainer>
    </SafeAreaView>
  );
};

export default CardExpanded;
