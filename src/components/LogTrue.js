import React, { Component } from 'react';
import { View, Text ,StyleSheet , TouchableOpacity} from 'react-native';

class LogTrue extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style = {styles.text}>Doğru Cevap!!</Text>
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
        backgroundColor:'green',
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
      marginTop:15,
      padding: 20,
    },
    buttonText:{
      color:'white',
      fontSize:18
    }
})
export default LogTrue;
