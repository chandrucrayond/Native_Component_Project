import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {CardExpandedProps} from '../CardExpanded/props';
import Button from '../Button';
import {LayoutChangeEvent} from 'react-native/Libraries/Types/CoreEventTypes';

const PropsChecking: React.FC<CardExpandedProps> = ({route, navigation}) => {
  const [buttonCount, setButtonCount] = useState<number>(0);
  return (
    <ScrollView style={{backgroundColor: '#fff', padding: 20}}>
      <View style={styles.ripplePackageContainer}>
        <Button
          id="chandru"
          rippleColor="black"
          rippleOpacity={0.3}
          disabled={false}
          rippleSequential={false}
          // delayPressIn={1000}
          // delayLongPress={2000}
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
          // hitSlop={{top: 12, bottom: 12, left: 12, right: 12}}
          variant="contained"
          textColor="green"
          textSize={40}
          backgroundColor="lightyellow"
          buttonHeight={100}
          buttonWidth={260}
          margin={20}
          padding={10}
          borderRadius={10}
          borderColor="brown"
          borderWidth={2}>
          Outlined sdf sdfsdf dsfsdf
          {/* <Image
            source={require('../../assets/user.png')}
            style={{width: 20, height: 20,}}
          />
          <Text style={styles.ripplePackageButtonText}>Outlined</Text> */}
        </Button>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button>Default</Button>
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

export default PropsChecking;
