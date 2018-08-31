import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';

class Quest extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={styles.container}>
            <Text style = {styles.quest}>{this.props.text}</Text>
        </View>
        
    );
  }
}

const styles = StyleSheet.create({
    container:{
        padding: 24,
        backgroundColor:'#009688',
        borderRadius: 16,
        alignItems:'center',
        width:'100%',
        minHeight: 100,
    },
    quest:{
        color:'white',
        fontSize:16,
        textAlign:'center'
        
      }
})

export default Quest;
