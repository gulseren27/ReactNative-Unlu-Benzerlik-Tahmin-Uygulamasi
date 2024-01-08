

import React from 'react';
import { StyleSheet,View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import girisEkrani from './ekranlar/girisEkrani';
import testListesi from './ekranlar/testListesi';
import testSoru from './ekranlar/testSoru';
import sonuc from './ekranlar/sonuc';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Giris">
        <Stack.Screen name="Giris" component={girisEkrani} />
        <Stack.Screen name="TestListesi" component={testListesi} />
        <Stack.Screen name="TestSoru" component={testSoru} />
        <Stack.Screen name="Sonuc" component={sonuc} />
        
        </Stack.Navigator>
 </NavigationContainer>  
 
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,  // enine boyuna tüm ekranı kapla
    backgroundColor: "#FFBD8B"


  },
 
  
});

export default App;
