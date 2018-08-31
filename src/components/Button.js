import React, { Component } from 'react';
import { View, Text ,StyleSheet, TouchableOpacity} from 'react-native';


class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }
  

  render() {
    return (
      <TouchableOpacity 
        style = {styles.container}
        onPress= {this.props.onClick}
        >
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        padding: 12,
        backgroundColor:'#009688',
        borderRadius: 16,
        marginTop: 12,
        width:'100%'


    },
    text:{
      color:'white',
      fontSize:16
    }
})

export default Button;
