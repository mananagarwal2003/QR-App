import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const navigateToOtherScreen = () => {
      navigation.navigate('Generate');
    };
    const navigateToOtherScreen2 = () => {
      navigation.navigate('Scan');
    };
  return (
    <View style={styles.container}>
      <Button
      onPress={navigateToOtherScreen}
    title="Generate QR code"
  color="#841584"/>  
   <TouchableOpacity onPress={navigateToOtherScreen2}
              style={styles.btn2} >
             <Text style={{color:'white',fontSize:15,fontWeight:'500'}}>SCAN QR CODE</Text>
              </TouchableOpacity>
    </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn2:{
    height:35,
    width:150,
    justifyContent:'center',
    alignItems:'center',
    top:100,
    borderRadius:2,
    backgroundColor:"#841584",
  },
});
export default HomeScreen
