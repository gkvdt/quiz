import React, { Component } from 'react';
import { View, Text ,StyleSheet , TouchableOpacity} from 'react-native';

class LogFalse extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style = {styles.text}>Yanlış Cevap!!</Text>
        <Text style = {styles.cevap}>Dogru Cevap</Text>
        <Text style = {styles.text}>{this.props.cevap}</Text>
          <TouchableOpacity style={styles.button} onPress={this.props.onClick} >
            <Text style = {styles.buttonText}>Sonraki Soru</Text>
          </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
        position:'absolute',
        width:250,
        height:250,
        backgroundColor:'red',
        alignContent: 'center',
        justifyContent: 'center',

    },
    text:{
        color:'white',
        fontSize:24,
        textAlign:'center'
    },
    button:{
      alignSelf: 'center',
      padding: 20,
    },
    buttonText:{
      color:'white',
      fontSize:18
    },
    cevap:{
      marginTop: 12,
      textAlign:'center',
      color:'white',
      fontSize:16
      
    }

})
export default LogFalse;
