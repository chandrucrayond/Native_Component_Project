import React from 'react';
import {
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  FlatList,
  StatusBar,
  SafeAreaView,
  Button,
  TouchableOpacity
} from 'react-native';
import {CardProps} from './props';
import {
  StyledView,
  StyledText,
  CardView,
  CenteredView,
  StyledTitle,
  SearchBox,
  SearchTextInput,
  SearchBoxContainer,
  StyledFlatList,
  BlackBackgroundView,
} from './styles';
import type {StatusBarStyle} from 'react-native';

const cardData = [
  {
    id: 1,
    title: 'Home',
    description: 'Details about Home came here',
  },
  {
    id: 2,
    title: 'About us',
    description: 'Details about About us came here',
  },
  {
    id: 3,
    title: 'Services',
    description: 'Details about Services came here',
  },
  {
    id: 4,
    title: 'Products',
    description: 'Details about Products came here',
  },
  {
    id: 5,
    title: 'Logout',
    description: 'Details about Logout came here',
  },
  {
    id: 6,
    title: 'Contact',
    description: 'Details about Contact came here',
  },
  {
    id: 7,
    title: 'Portfolio',
    description: 'Details about Portfolio came here',
  },
  {
    id: 8,
    title: 'Testimonials',
    description: 'Details about Testimonials came here',
  },
  {
    id: 9,
    title: 'Terms and Conditions',
    description: 'Details about Terms and Conditions came here',
  },
  {
    id: 10,
    title: 'Privacy Policy',
    description: 'Details about Privacy Policy came here',
  },
  {
    id: 11,
    title: 'Portfolio',
    description: 'Details about Portfolio came here',
  },
  {
    id: 12,
    title: 'Testimonials',
    description: 'Details about Testimonials came here',
  },
  {
    id: 13,
    title: 'Terms and Conditions',
    description: 'Details about Terms and Conditions came here',
  },
  {
    id: 14,
    title: 'X Policy',
    description: 'Details about Privacy Policy came here',
  },
];

const Card: React.FC<CardProps> = ({navigation, name, style}) => {
  const [inputFocused, setInputFocused] = React.useState(false);
  const [searchInput, setSearchInput] = React.useState('');
  const filteredData = cardData.filter(item =>
    item.title.toLowerCase().includes(searchInput.toLowerCase()),
  );

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  const IndividualCard = ({item}: {item: CardProps}) => {
    return (
      <CardView
        key={item?.id}
        onPress={() => {
          {
            navigation !== undefined &&
              navigation.navigate('CardDetailing', {
                item: item,
              });
          }
        }}>
        <View>
          <StyledTitle>{item?.title}</StyledTitle>
        </View>
        <View>
          <StyledText>{item?.description}</StyledText>
        </View>
      </CardView>
    );
  };

  const handleEmpty = () => {
    return (
      <View style={{height: '100%', backgroundColor: 'black'}}>
        <Text> No data present!</Text>
      </View>
    );
  };

  return (
    <>
      <SearchBoxContainer>
        <SearchBox>
          <Image
            source={require('C:/Users/CSS/Desktop/Chan crayon/CardProject/assets/icons8-search-500.png')}
            resizeMode="contain"
            style={{width: 40, height: 30}}
          />
          <SearchTextInput
            placeholder="Search..."
            style={{
              color: 'white',
              width: '75%',
              backgroundColor: inputFocused ? '#383535' : 'transparent',
            }}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onChangeText={text => setSearchInput(text)}
            value={searchInput}
          />
        </SearchBox>
      </SearchBoxContainer>
      <BlackBackgroundView>
        <CenteredView>
          {filteredData && (
            <FlatList
              ListEmptyComponent={handleEmpty}
              data={filteredData}
              renderItem={IndividualCard}
              keyExtractor={item => `${item?.id}`}
              showsVerticalScrollIndicator={false}
            />
          )}
        </CenteredView>
      </BlackBackgroundView>
    
    </>
  );
};

export default Card;

// const cardData = [
//   {
//     id: 1,
//     title: 'Home',
//     description: 'Details about Home came here',
//   },
//   {
//     id: 2,
//     title: 'About us',
//     description: 'Details about About us came here',
//   },
//   {
//     id: 3,
//     title: 'Services',
//     description: 'Details about Services came here',
//   },
//   {
//     id: 4,
//     title: 'Products',
//     description: 'Details about Products came here',
//   },
//   {
//     id: 5,
//     title: 'Logout',
//     description: 'Details about Logout came here',
//   },
//   {
//     id: 6,
//     title: 'Contact',
//     description: 'Details about Contact came here',
//   },
//   {
//     id: 7,
//     title: 'Portfolio',
//     description: 'Details about Portfolio came here',
//   },
//   {
//     id: 8,
//     title: 'Testimonials',
//     description: 'Details about Testimonials came here',
//   },
//   {
//     id: 9,
//     title: 'Terms and Conditions',
//     description: 'Details about Terms and Conditions came here',
//   },
//   {
//     id: 10,
//     title: 'Privacy Policy',
//     description: 'Details about Privacy Policy came here',
//   },
//   {
//     id: 11,
//     title: 'Portfolio',
//     description: 'Details about Portfolio came here',
//   },
//   {
//     id: 12,
//     title: 'Testimonials',
//     description: 'Details about Testimonials came here',
//   },
//   {
//     id: 13,
//     title: 'Terms and Conditions',
//     description: 'Details about Terms and Conditions came here',
//   },
//   {
//     id: 14,
//     title: 'X Policy',
//     description: 'Details about Privacy Policy came here',
//   },
// ];
