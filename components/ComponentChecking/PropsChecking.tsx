import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {CardExpandedProps} from '../CardExpanded/props';
import Button from '../Button';

const PropsChecking: React.FC<CardExpandedProps> = ({route, navigation}) => {
  const [buttonCount, setButtonCount] = useState<number>(0);
  return (
    <ScrollView style={{backgroundColor: '#fff', padding: 20}}>
      <View style={styles.ripplePackageContainer}>
        <Button
          id="chandru"
          rippleColor="black"
          rippleOpacity={0.3}
          rippleContainerBorderRadius={0}
          disabled={false}
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
          buttonStyle={styles.ripplePackageButton}
          variant="outlined"
          textStyle={styles.ripplePackageButtonText}
          textColor='yellow'
          >
          {/* <Text style={styles.ripplePackageButtonText}>Outlined</Text> */}
          Outlined
          {/* <Image
            source={require('../../assets/user.png')}
            style={{width: 20, height: 20,}}
          />
          <Text style={styles.ripplePackageButtonText}>Outlined</Text> */}
        </Button>
        <Button variant="text" buttonStyle={styles.ripplePackageButton}>
          Text
        </Button>
        <Button
          variant="contained"
          buttonStyle={{
            padding: 20,
            // width: 100,
            // height: 30,
            backgroundColor: '#967ADC',
            borderRadius: 20,
            marginBottom: 20,
          }}>
          Contained
        </Button>
        <Button>Default</Button>
        <View
          style={{
            width: 100,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#e5e5e5',
          }}>
          <Text
            numberOfLines={1}
            style={{
              fontSize: 20,
              textAlign: 'center',
              margin: 10,
              padding: 10,
              fontWeight: 'bold',
            }}>
            This is a sample Ellipsis Text from Tail React
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ripplePackageContainer: {},

  ripplePackageButton: {
    // padding: 20,
    width: 200,
    height: 100,
    backgroundColor: '#967ADC',
    borderRadius: 20,
    marginBottom: 20,
  },

  ripplePackageButtonText: {
    color: 'black',
    fontSize: 65,
  },
});

export default PropsChecking;
