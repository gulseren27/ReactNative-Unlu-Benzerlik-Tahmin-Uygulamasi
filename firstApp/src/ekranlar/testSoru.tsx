import React, {useState} from "react";
import {SafeAreaView,View,StyleSheet,Text,TouchableOpacity,Image,Alert,Button} from "react-native";


const sorular = [
    {
        id: '1',
        question: 'Sahilde vakit geçirmeyi sever misiniz?',
        type: 'yesno', // Soru tipi: Evet/Hayır
      },
      {
        id: '2',
        question: 'Hangi renkleri tercih edersiniz?',
        type: 'ranking', // Soru tipi: Sıralama
        options: ['Mavi', 'Yeşil', 'Sarı', 'Kırmızı'],
      },
      {
        id: '3',
        question: 'Kitap okumayı seviyor musunuz?',
        type: 'yesno', // Soru tipi: Evet/Hayır
      },
      {
        id: '4',
        question: 'Şarkı söylemeyi sever misiniz?',
        type: 'yesno', // Soru tipi: Evet/Hayır
      },
      {
        id: '5',
        question: 'Hangi mevsimi tercih edersiniz?',
        type: 'ranking', // Soru tipi: Sıralama
        options: ['Yaz', 'Kış', 'İlkbahar', 'Sonbahar'],
      },
      {
        id: '6',
        question: 'Yemek yapmayı seviyor musunuz?',
        type: 'yesno', // Soru tipi: Evet/Hayır
      },
      {
        id: '7',
        question: 'Hayvan sever misiniz?',
        type: 'yesno', // Soru tipi: Evet/Hayır
      },
      {
        id: '8',
        question: 'Hangi hayvanı tercih edersiniz?',
        type: 'ranking', // Soru tipi: Sıralama
        options: ['Kedi', 'Köpek', 'Kuş', 'Tavşan'],
      },
      {
        id: '9',
        question: 'Türk dizilerini seviyor musunuz?',
        type: 'yesno', // Soru tipi: Evet/Hayır
      },
      {
        id: '10',
        question: 'Çocukları seviyor musunuz?',
        type: 'yesno', // Soru tipi: Evet/Hayır
      },

]


type Soru = {   // veri türü ataması
    id:string;
    name:string;
    type: string;
    options:string[];  // dizi içindeki seçenekler
    option:string;   // evet hayır seçeneği
    selectedOption: string;
    currentQuestionIndex: number;
    selectedAnswer:string;
    newUserAnswers:string[];
    
    
  }

  



const testSoru = ({ route, navigation }: { route: any, navigation: any }) => {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // mevcut soru indeksi ve sonraki sorunun indeksini tanımlar 
    const [userAnswers, setUserAnswers] = useState<string[]>([]); // cevapları saklamak ve cevapları güncellemek için başta boş olan diziler tanımlanır

    const saveResults = () => {
      // cevapları kaydeden fonksiyon
    };

  const currentQuestion = sorular[currentQuestionIndex]; // mevcut soruları 'sorular' dizisinden alır

  const handleAnswer = (selectedAnswer: string) => {
    const newUserAnswers = [...userAnswers];          // seçilen cevabı alıp diziye atan fonksiyon
    newUserAnswers[currentQuestionIndex] = selectedAnswer;
    setUserAnswers(newUserAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < sorular.length - 1) {  // sorular dizisindeki son soru değilse indeksi 1 arttırıp diğer soruya geç
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      <Button
          title="Sonuçları Kaydet ve Bitir"
          color="#80DEEA"
          onPress={() => {
            saveResults(); // Sonuçları kaydet
            navigation.navigate('sonuc', { userAnswers }); // butona tıklayınca cevapları kaydedip sonuc sayfasına git
          }}
/>
    }
  };

    return(

    <SafeAreaView style={styles.soru_container}>


        <View>
            <Text style={styles.soru_baslik}>Test Soruları</Text>


            <Text style={styles.ilkSoru}>Hangi ünlüye benzediğini düşünüyorsun?</Text>

            {/* ünlü resmi ve butonu */}
            <View style={styles.big_container}>
                <View style={styles.body}>
                    <Image style={styles.foto} source={{uri:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Fname%2Fnm0015574%2F&psig=AOvVaw1qarZtnjohjVu0XEdDdt_u&ust=1693697666430000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCKDez-DJioEDFQAAAAAdAAAAABAD"}}></Image>
                </View>
                  <TouchableOpacity style={styles.small_container} onPress={()=>Alert.alert(" Sezen Aksu Seçildi")}>
                     <Text style={styles.b_text}>SEZEN AKSU</Text>
                  </TouchableOpacity>
                </View>
            




            <View style={styles.big_container}>
                <View style={styles.body}>
                    <Image style={styles.foto} source={{uri:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.sozcucdn.com%2Fwp-content%2Fuploads%2F2018%2F11%2Fiecrop%2Felcin-sangu-kimdir_16_9_1542865802.jpg%3Fw%3D1200%26h%3D900%26mode%3Dcrop%26scale%3Dboth&tbnid=WbtoS5Mhz1ZshM&vet=12ahUKEwi-ofri0YqBAxVQ7rsIHUNLDsAQMygCegQIARBS..i&imgrefurl=https%3A%2F%2Fwww.sozcu.com.tr%2Fhayatim%2Fmagazin-haberleri%2Felcin-sangu-kimdir-elcin-sangu-nereli-ve-kac-yasinda-oub4%2F&docid=bijT41DDrBJAGM&w=1200&h=900&q=el%C3%A7in%20sangu&client=opera-gx&ved=2ahUKEwi-ofri0YqBAxVQ7rsIHUNLDsAQMygCegQIARBS"}}></Image>
                </View>
                        <TouchableOpacity style={styles.small_container} onPress={()=>Alert.alert("Elçin Sangu Seçildi")}>
                            <Text style={styles.b_text}>ELÇİN SANGU</Text>
                        </TouchableOpacity>
            </View>





            <View style={styles.big_container}>
                <View style={styles.body}>
                    <Image style={styles.foto} source={{uri:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F89%2FBaris-akarsu.jpg&tbnid=IX9ksCMzCKlvVM&vet=12ahUKEwjgxtWO0oqBAxVn57sIHU9mDEIQMygAegQIARAr..i&imgrefurl=https%3A%2F%2Ftr.wikipedia.org%2Fwiki%2FBar%25C4%25B1%25C5%259F_Akarsu&docid=Zmz19Qb8YTn1XM&w=490&h=430&q=bar%C4%B1%C5%9F%20akarsu&client=opera-gx&ved=2ahUKEwjgxtWO0oqBAxVn57sIHU9mDEIQMygAegQIARAr"}}></Image>
                </View>
                        <TouchableOpacity style={styles.small_container} onPress={()=>Alert.alert("Barış Akarsu Seçildi")}>
                            <Text style={styles.b_text}>BARIŞ AKARSU</Text>
                        </TouchableOpacity>
            </View>





            <View style={styles.big_container}>
                <View style={styles.body}>
                    <Image style={styles.foto} source={{uri:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.mubicdn.net%2Fimages%2Fcast_member%2F168104%2Fcache-158816-1468544263%2Fimage-w856.jpg%3Fsize%3D800x&tbnid=A0Dcik96NHmlyM&vet=12ahUKEwiDkfW10oqBAxXdiv0HHQ9FA0YQMygDegQIARBK..i&imgrefurl=https%3A%2F%2Fmubi.com%2Ftr%2Fcast%2Fkivanc-tatlitug&docid=CU1YJdgjQPjIsM&w=800&h=950&q=k%C4%B1van%C3%A7%20tatl%C4%B1tu%C4%9F&hl=tr&client=opera-gx&ved=2ahUKEwiDkfW10oqBAxXdiv0HHQ9FA0YQMygDegQIARBK"}}></Image>
                </View>
                        <TouchableOpacity style={styles.small_container} onPress={()=>Alert.alert("Kıvanç Tatlıtuğ Seçildi")}>
                            <Text style={styles.b_text}>KIVANÇ TATLITUĞ</Text>
                        </TouchableOpacity>
            </View>






            <Text style={{ fontSize: 20, marginBottom: 16 }}>
                Soru {currentQuestionIndex + 1}/{sorular.length} 
                {/* hangi soruda olduğunu ve soru sayısını gösterir  */}
                </Text>
                <Text style={{ fontSize: 24, marginBottom: 16 }}>{currentQuestion.question}</Text> 
                {/* sorunun yazısı gösteriliyor(sorunun kendisi) */}
                <View>
                    {currentQuestion.type === 'yesno' ? (    
                      // soru tipi evet/hayır ise iki şık gösterilecek demektir
                <View>
            <TouchableOpacity
              onPress={() => handleAnswer("Evet")}   //evet e tıklanmak istediğinde karşımıza çıkan buton (tıklama fonksiyonu)
              
              style={userAnswers[currentQuestionIndex]=== 'Evet' ? styles.selectedOption : styles.option} // eğer evet e tıklanırsa seçilen seçeneğin sitili gösterilecek yoksa normal sitili
            >
              <Text style={userAnswers[currentQuestionIndex] === 'Evet' ? styles.selectedOptionText : styles.optionText}> 
              {/* yine evet seçilirse yazı sitili için de if else şartlarına göre sitilleri oluşacak */}
                Evet
              </Text>
            </TouchableOpacity>
            {/* Eğer cevap hayır isse aynı şeyleri bu sefer hayır cevabı için yaparız */}
            <TouchableOpacity
              onPress={() => handleAnswer('hayir')}
              style={userAnswers[currentQuestionIndex]=== 'Hayır' ? styles.selectedOption : styles.option}
            >
              <Text style={userAnswers[currentQuestionIndex]=== 'Hayır' ? styles.selectedOptionText : styles.optionText}>
                Hayır
              </Text>
            </TouchableOpacity>
          </View>
        ) : currentQuestion.type === 'ranking' ? (   // eğer soru tipi sıralamaysa seçenekler dizi olarak görünür
          <View>
            {currentQuestion.options?.map((option, index) => ( // burdaki map öğesi seçeneklerin her biirni döner ve hepsi için bi touchable opacity ekler
              <TouchableOpacity
                key={index}
                onPress={() => handleAnswer(option)}
                style={ // kullanıcının seçtiği cevaba göre yine sitilleri ekleriz
                  userAnswers[currentQuestionIndex] === option ? styles.selectedOption : styles.option
                }
              >
                <Text style={userAnswers[currentQuestionIndex] === option ? styles.selectedOptionText : styles.optionText}>
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : null}
      </View>
      <Button title="Sonraki Soru" onPress={handleNextQuestion} disabled={!userAnswers[currentQuestionIndex]} /> 
      {/* sonraki soru butonuna tıkladığımızda diğer soruya geçmemizi sağlayan fonksiyon çalışır */}
                 



    </View>



    </SafeAreaView>
    );


}




const styles= StyleSheet.create({
    soru_container:{
        flex:1,
        backgroundColor:"#FFBD8B"
    },
    soru_baslik:{
        fontSize:24,
        marginBottom:16,
        alignItems: "center"
    },
    ilkSoru:{
        fontSize: 15,
        fontStyle: "italic",
        color: "#0c3888",
        padding: 10,

    },
    big_container:{
        margin:10,
        borderWidth:1,
        borderColor: "gray",
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-around"

    },
    body:{
        padding:10,
    },
    small_container:{
        backgroundColor:"# 00bfff",
        padding: 10,
        alignItems: "center",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius:10,
    },
    b_text:{
        fontSize:10,
        fontWeight: "bold",
        color:"white"
    },
    foto:{
        resizeMode:"cover",
        height:200,


    },
    selectedOptionText:{
      color:"white",

    },
    optionText:{
      color:"black",
    },
    option:{
      backgroundColor:"# e0eeee",

    },
    selectedOption:{
      backgroundColor:"	# 90ee90",
    }

});

export default testSoru;