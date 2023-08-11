import styled from 'styled-components/native';
import {Text, View, ScrollView} from 'react-native';

export const StyledFlatList = styled.FlatList.attrs(props => ({
  showsVerticalScrollIndicator: false,
}))({
  backgroundColor: 'black',
});

export const SearchBox = styled.View({
  backgroundColor: '#383535',
  borderRadius: 30,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: '90%',
  height: 55,
});

export const SearchBoxContainer = styled.View({
  paddingTop: '30px',
  paddingBottom: '20px',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'black',
});

export const SearchTextInput = styled.TextInput.attrs(props => ({}))`
  font-size: 16px;
`;

export const StyledView = styled.ScrollView.attrs(props => ({
  showsVerticalScrollIndicator: false,
}))`
  background-color: black;
`;

export const CenteredView = styled.View.attrs(props => ({
  
}))({
  width: '90%',
  margin: 'auto',
  marginTop: '0px',
  paddingBottom: '100px',
});

export const BlackBackgroundView = styled.View({
  backgroundColor: 'black',
  height: '100%',
});

export const StyledText = styled.Text`
  color: white;
  font-size: 16px;
`;

export const StyledTitle = styled.Text({
  fontWeight: 800,
  color: 'white',
  fontSize: '14px',
  paddingBottom: '10px',
});

export const CardView = styled.TouchableOpacity.attrs(props => ({}))({
  backgroundColor: '#2b2a2a',
  borderRadius: 8,
  height: '170px',
  padding: '20px',
  marginTop: '15px',
  marginBottom: '10px',
});
