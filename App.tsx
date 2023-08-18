import React from 'react';
import Card from './components/Card/Card';
import CardExpanded from './components/CardExpanded/CardExpanded';
import PropsChecking from './components/ComponentChecking/PropsChecking';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
function App() {
  const option = {headerShown: false};
  return (
    <NavigationContainer>
      <Stack.Navigator>
          {/* <Stack.Screen name="Home" component={Card} options={option} />
          <Stack.Screen name="CardDetailing" component={CardExpanded} options={option} /> */}
          <Stack.Screen name="PropsChecking" component={PropsChecking} options={option} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
