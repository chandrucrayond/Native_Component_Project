import React from 'react';
import ComponentChecking from './components/ComponentChecking/ComponentCheckings';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
function App() {
  const option = {headerShown: false};
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="ComponentChecking" component={ComponentChecking} options={option} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
