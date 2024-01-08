import * as React from 'react';
import { Text, View, StyleSheet, FlatList,TouchableOpacity } from 'react-native';

const tests  = [  //flat listteki data
    { id: '1', name: 'Test 1' },
    { id: '2', name: 'Test 2' },
    { id: '3', name: 'Test 3' },
    
  ];
  type Test = {   // veri türü ataması
    id:string;
    name:string;
  }
const testListesi = ({navigation}: {navigation: any}) => {

    const renderItem = ({item}: {item:Test}) =>  //flat list için gerekli olan renderItem
        <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate('testSoru', { testId: item.id })}>    
        {/* basıldıgında navigation ile test sorularının oldugu ekrana yönlendirir  */}
            <Text style={styles.title}>{item.name}</Text>   
            {/* test isimlerini yazdırır */}
        </TouchableOpacity>
    
  return (
    <View style={styles.test_container}>
        <Text style={styles.list_baslik}>Test Listesi</Text>
        <FlatList 
            data={tests}  // Gösterilecek veri dizisi(tests dizisi)
            renderItem={renderItem}  // Her öğe için nasıl görüntüleneceği(yukarda touchableOpacity ile göstermek istedik)
            keyExtractor={(item) => item.id}  // Öğelerin benzersiz anahtarlarını belirleme burda id leri unique olarak belirledik
            
        />
    </View>
    
  );
};



const styles = StyleSheet.create({
  test_container: {
    flex:1,
    backgroundColor:"#FFBD8B"
  },
  list_baslik:{
    fontSize:24,
    marginBottom:16,
    alignItems: "center"


  },
  item:{
    backgroundColor:"#DD825D",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title:{
    fontSize:30,
    color:"white",
  }
});




export default testListesi;