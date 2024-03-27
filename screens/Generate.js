import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { View, Button,TouchableOpacity,Image,StyleSheet,TextInput,Text} from 'react-native';
import QRCode from 'react-native-qrcode-svg'
const HomeScreen = ({ navigation }) => {
  const [textInputValue, setTextInputValue] = useState('');
  const [qrCodeValue, setQRCodeValue] = useState(null);
  const navigateToOtherScreen = () => {
    navigation.navigate('HomeScreen'); 
  };
  const generateQRCode = () => {
    if (textInputValue.trim() !== '') {
      setQRCodeValue(textInputValue);
    }
  
  }
  return (
     <View style={styles.container}>
      <View style={styles.textarea}>
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 20, padding: 5 }}
        onChangeText={text => setTextInputValue(text)}
        value={textInputValue}
        placeholder="Enter text here"
      />
      <Button style={{width:50}}
        title="Generate QR Code"
        onPress={generateQRCode}
      />
      {qrCodeValue && (
        <View style={{ marginTop: 20 }}>
          <QRCode value={qrCodeValue} size={200} />
        </View>
      )}
      </View>
       <View>
      <TouchableOpacity onPress={navigateToOtherScreen}
              style={styles.btn} 
              className="rounded-full p-3 m-1">
              <Image source={require('../images/left-arrow.png')} style={{width:45,height:45}}/>
              </TouchableOpacity>
    </View>
    </View>
  );
};

export default HomeScreen;

const styles=StyleSheet.create({
  container: {
    flex: 1,
  },
  textarea:{
    width:'90%',
    left:20,
    justifyContent:'space-between',
    flexDirection:'column',
    top:150,
    alignItems:'center',
  },
  qrcode:{
    marginLeft:100,
  },
  btn:{
    top:550,
     left:280,
    borderRadius:40,
    height:50,
    width:50,
    alignItems:'center',
    backgroundColor:'grey',
  },
})