import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import AddNewPaletteModal from './screens/AddNewPaletteModal';
import Form from './screens/Form';
import CRUD from './screens/CRUD';
import INCRE from './screens/INCRE';
const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={({ route }) => ({ title: route.params.paletteName })}
      />
    </MainStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen name="Form" component={Form} />
        <RootStack.Screen name="CRUD" component={CRUD} />
        <RootStack.Screen name="INCRE" component={INCRE} />
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen name="AddNewPalette" component={AddNewPaletteModal} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
