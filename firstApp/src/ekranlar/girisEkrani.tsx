import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';


const girisEkrani = ({navigation}: {navigation: any}) => {

  const [value, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  const [gender, setGender] = React.useState('');

  const handleStartTest = () => {
    // Giriş bilgilerini kaydedip  test listesine yönlendirilsin
    navigation.navigate('testListesi');
  };

  return (
    <SafeAreaView style={styles.giris_container}>
    <View >
      <Text style={styles.sectionTitle}>Tahmin Et Kazan</Text>

    <View>
      <Text style={styles.text_title}>Meslek:</Text>
      <TextInput 
          style={styles.input}
          onChangeText={onChangeText}
          placeholder='meslek girin'
          value={value}
          />
          <Text style={styles.text_title}>Yaş:</Text>
      <TextInput 
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="yaş girin"
          keyboardType="numeric"
          
          />
          <Text style={styles.text_title}>Cinsiyet:</Text>
        <TextInput 
            style={styles.input}
            onChangeText={setGender}
            placeholder='cinsiyet girin'
            value={gender}
            />
          <TouchableOpacity style={styles.button_container} onPress={()=> {handleStartTest} }>
            <Text style={styles.button_title}>Kaydet ve Teste Başla</Text>
          </TouchableOpacity> 
      </View>
    </View>
  </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  giris_container: {
    flex:1,  // enine boyuna tüm ekranı kapla
    backgroundColor: "#FFBD8B"


  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    alignItems: "center"  // yatay eksende ortala
  },
  
  input:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,

  },
  text_title:{
    height: 40,
    margin: 12,
    fontSize: 15,
    fontWeight: "100",
    padding: 10,
  },
  button_container:{
    backgroundColor:"green",
    height:10,
    width:20,
    padding: 25,
    alignItems:"center"

  },
  button_title:{
    color:"white",
    alignItems:"center",
  }
  
});

export default girisEkrani;
