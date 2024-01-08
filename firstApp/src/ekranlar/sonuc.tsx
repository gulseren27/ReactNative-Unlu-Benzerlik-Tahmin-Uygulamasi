import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet,Button } from 'react-native';




const ünlülerinCevaplari = [
    {
        name: 'Sezen Aksu',
        answers: ['Evet', 'Yeşil', 'Evet', 'Evet', 'Yaz', 'Evet', 'Evet', 'Kedi', 'Evet', 'Evet'],
      },
      {
        name: 'Elçin Sangu',
        answers: ['Evet', 'Mavi', 'Hayır', 'Evet', 'Kış', 'Hayır', 'Hayır', 'Köpek', 'Evet', 'Hayır'],
      },
      {
        name: 'Barış Akarsu',
        answers: ['Hayır', 'Sarı', 'Evet', 'Evet', 'Sonbahar', 'Evet', 'Evet', 'Tavşan', 'Hayır', 'Evet'],
      },
      {
        name: 'Kıvanç Tatlıtuğ',
        answers: ['Hayır', 'Kırmızı', 'Evet', 'Evet', 'İlkbahar', 'Evet', 'Evet', 'Kuş', 'Hayır', 'Evet'],
    }

]


const sonuc = ({route,navigation}: { route: any, navigation: any }) => {

    const [userAnswers,setUserAnswers] = useState([]);  // kullanıcının cevaplarını saklamak için boş dizi

    useEffect(() => {  // useEffect fonksiyonu uyygulamanın bağlı olduğu yan işlemler için kullanılır.Api call ya da windows objesinden çekilmeyi bekleyen veriler için kullanılır.
        // Test ekranından kullanıcının cevaplarını al
        const { userAnswers } = route.params;
    
        // Kullanıcının cevaplarını sakla
        setUserAnswers(userAnswers);
      }, []);

      const puanHesapla =() => {
        const benzerlikPuani = [];  // benzerlik skorunu tutacak boş dizi

        for (let i = 0; i < ünlülerinCevaplari.length; i++) {  // ünlülerin cevaplarını gezecek
            let similarity = 0;  // benzerliğin başlangıç değeri 0
      
            for (let j = 0; j < userAnswers.length; j++) {  // iç içe for döngüsüyle kullanıcının cevaplarını da gezecek
              if (ünlülerinCevaplari[i].answers[j] === userAnswers[j]) {  // eğer ünlünün cevabıyla kullanıcının cevabı aynıysa benzerlik artacak
                similarity++;
              }
            }
      
                benzerlikPuani.push({  // benzerlikPuanına pushlayacağımız bilgileri gireriz 
                ünlüİsmi: ünlülerinCevaplari[i].name, // ünlülerin cevabındaki name değişkenini  ünlü ismine atadık
                benzerlik: similarity,  // arttırılan benzerliği de benzerlik değişkenine atayıp güncel puanı yazdırırız
            });
            }

        return benzerlikPuani;
  };


  // hangi ünlüye benzdeiğini bulan ve yazdıran fonksiyon
  const enCokBenzeyen = (benzerlikPuani: Array<{ ünlüİsmi: string, benzerlik: number }>) => {  // veri tipi ataması yapıldı
    let benzeyenÜnlüİsmi = null;  // benzeyen ünlü ismi başta null
    let maxBenzerlik = -1; // max benzerlik başta -1

    for (let i = 0; i < benzerlikPuani.length; i++) {  // benzerlik puanının uzunluğunu(tüm diziyi) gezeriz
        if (benzerlikPuani[i].benzerlik > maxBenzerlik) { // eğer benzerliPuanının içideki benzerlik maxBenzerlikten büyükse yeni maxBenzerlik o olur
        maxBenzerlik = benzerlikPuani[i].benzerlik;  // eğer öyleyse atamasını yaparız
        benzeyenÜnlüİsmi = benzerlikPuani[i].ünlüİsmi; // ünlü ismine de dizideki ismi atarız
      }
    }

     return benzeyenÜnlüİsmi || 'Bilinmeyen Ünlü';  // ünlü ismini return ederiz eğer hata varsa ya da benzerlik yoksa bilinmeyen ünlü şeklinde çıktı verir
  
  };

  const benzerlikPuani = puanHesapla(); // benzerlik puanına puan hesapla fonksiyonunu çağırıp sonucu atadık
  //const ünlü = enCokBenzeyen(benzerlikPuani); // encokbenzeyen fonsiyonunu benzerlik puanını parametre alarak ünlüye atarız


      let ünlü = '';
      if (benzerlikPuani.length > 0) {  // benzerlik puanı boş mu değil mi kontrol eder. Boş değilse ,
        const maxBenzerlik = benzerlikPuani[0].benzerlik;  // maxBeznerlik değerini benzerlikPuanının ilk değerinden alırız
        if (maxBenzerlik >= 0 && maxBenzerlik < 25) {
          ünlü = 'Sezen Aksu';
        } else if (maxBenzerlik >= 25 && maxBenzerlik < 50) {
          ünlü = 'Elçin Sangu';
        } else if (maxBenzerlik >= 50 && maxBenzerlik < 75) {
          ünlü = 'Barış Akarsu';
        } else {
          ünlü = 'Kıvanç Tatlıtuğ';
        }
      }


  return (
    <View style={styles.container}>
      <Text style={styles.sonuc_baslik}>Sonuç Sayfası</Text>
      <Text style={styles.puan}>Puanınız: {benzerlikPuani[0].benzerlik}</Text>
      <Text style={styles.ünlü}>Benzediğiniz Ünlü: {ünlü}</Text>

      <Button
        title="Test Listesine Geri Dön"
        color="#80DEEA"
        onPress={() => navigation.navigate('testListesi')}  
      />
    </View>
  );
};

export default sonuc;

const styles = StyleSheet.create({
  container: {
    flex:1,  // enine boyuna tüm ekranı kapla
    backgroundColor: "#FFBD8B"
  },
  sonuc_baslik:{
    fontSize:24,
    marginBottom:16,
    alignItems: "center"
  },
  ünlü:{
    fontSize:15,
    marginBottom:16
  },
  puan:{
    fontSize:15,
    marginBottom:16
  }
});
