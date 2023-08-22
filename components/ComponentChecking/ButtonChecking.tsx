import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {CardExpandedProps} from '../CardExpanded/props';
import Button from '../Button/Button';
import {LayoutChangeEvent} from 'react-native/Libraries/Types/CoreEventTypes';
import {DefaultTheme, useTheme} from '@react-navigation/native';
import SVGComponent from './SVGCheckingIcon';

const ButtonChecking: React.FC<CardExpandedProps> = ({route, navigation}) => {
  const [buttonCount, setButtonCount] = useState<number>(0);
  const theme = useTheme();

  return (
    <ScrollView style={{backgroundColor: '#fff', padding: 20}}>
      <View style={styles.ripplePackageContainer}>
        <Button
          id="chandru"
          rippleColor="black"
          rippleOpacity={0.3}
          disabled={false}
          rippleSequential={false}
          onPress={e => {
            console.log('ON press clicked ' + buttonCount + ' times ');
            setButtonCount(buttonCount + 1);
          }}
          onLongPress={() => {
            console.log('Long press enabled');
          }}
          onDoublePress={() => {
            console.log('Double press clicked');
          }}
          onPressIn={() => {
            console.log('ON Press In Logged');
          }}
          onPressOut={() => {
            console.log('ON Press Out Logged');
          }}
          variant="contained"
          textColor="green"
          textSize={40}
          // backgroundColor="lightyellow"
          backgroundColor={'lightyellow'}
          buttonHeight={100}
          buttonWidth={260}
          margin={20}
          borderRadius={10}
          borderColor="brown"
          borderWidth={2}>
          {/* <Image
            source={require('../../assets/user.png')}
            style={{width: 40, height: 40,}}
          /> */}
          <SVGComponent />
        </Button>
        <Button
          id="chandru"
          rippleColor="black"
          rippleOpacity={0.3}
          disabled={false}
          rippleSequential={false}
          onPress={e => {
            console.log('ON press clicked ' + buttonCount + ' times ');
            setButtonCount(buttonCount + 1);
          }}
          onLongPress={() => {
            console.log('Long press enabled');
          }}
          onDoublePress={() => {
            console.log('Double press clicked');
          }}
          onPressIn={() => {
            console.log('ON Press In Logged');
          }}
          onPressOut={() => {
            console.log('ON Press Out Logged');
          }}
          variant="contained"
          textColor="green"
          backgroundColor='red'
          textSize={40}
          buttonHeight={100}
          buttonWidth={260}
          margin={20}
          padding={20}
          borderRadius={20}
          borderColor="transparent"
          borderWidth={2}
          colors={['#4c669f', '#3b5998', '#192f6a']}
         
          >
          Contai   ccxned Linea
        </Button>
        <Button
          id="chandru"
          rippleColor="black"
          rippleOpacity={0.3}
          disabled={false}
          rippleSequential={false}
          onPress={e => {
            console.log('ON press clicked ' + buttonCount + ' times ');
            setButtonCount(buttonCount + 1);
          }}
          onLongPress={() => {
            console.log('Long press enabled');
          }}
          onDoublePress={() => {
            console.log('Double press clicked');
          }}
          onPressIn={() => {
            console.log('ON Press In Logged');
          }}
          onPressOut={() => {
            console.log('ON Press Out Logged');
          }}
          variant="outlined"
          textColor="green"
          textSize={40}
          backgroundColor="lightyellow"
          buttonHeight={100}
          buttonWidth={260}
          margin={20}
          padding={20}
          borderRadius={10}
          borderColor="brown"
          borderWidth={2}>
          Outlined
        </Button>
        <Button
          id="chandru"
          rippleColor="black"
          rippleOpacity={0.3}
          disabled={false}
          rippleSequential={false}
          onPress={e => {
            console.log('ON press clicked ' + buttonCount + ' times ');
            setButtonCount(buttonCount + 1);
          }}
          onLongPress={() => {
            console.log('Long press enabled');
          }}
          onDoublePress={() => {
            console.log('Double press clicked');
          }}
          onPressIn={() => {
            console.log('ON Press In Logged');
          }}
          onPressOut={() => {
            console.log('ON Press Out Logged');
          }}
          variant="text"
          textColor="#0063cc"
          textSize={40}
          textWeight={600}
          backgroundColor="violet"
          buttonHeight={100}
          buttonWidth={260}
          margin={20}
          padding={20}
          borderRadius={10}
          borderColor="brown"
          borderWidth={2}
          >
          Text
        </Button>
        <Button
          id="chandru"
          rippleColor="black"
          rippleOpacity={0.3}
          disabled={true}
          rippleSequential={false}
          onPress={e => {
            console.log('ON press clicked ' + buttonCount + ' times ');
            setButtonCount(buttonCount + 1);
          }}
          onLongPress={() => {
            console.log('Long press enabled');
          }}
          onDoublePress={() => {
            console.log('Double press clicked');
          }}
          onPressIn={() => {
            console.log('ON Press In Logged');
          }}
          onPressOut={() => {
            console.log('ON Press Out Logged');
          }}
          variant="contained"
          textColor="green"
          textSize={40}
          // backgroundColor="lightyellow"
          backgroundColor={'lightyellow'}
          buttonHeight={100}
          buttonWidth={260}
          margin={20}
          borderRadius={10}
          borderColor="brown"
          borderWidth={2}>
          <Text style={styles.ripplePackageButtonText}>Disabled</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ripplePackageContainer: {},

  ripplePackageButton: {
    width: 200,
    height: 100,
    backgroundColor: '#967ADC',
    borderRadius: 20,
    marginBottom: 20,
  },

  ripplePackageButtonText: {
    color: 'black',
    fontSize: 35,
  },
});

export default ButtonChecking;
