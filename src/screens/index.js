import React, { Component } from 'react';
import { View, Text ,StyleSheet } from 'react-native';
import Button from '../components/Button';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static navigationOptions={
      header:null
  }
  render() {
      var {navigate} = this.props.navigation; 
    return (
      <View style={styles.container} >
        <Button text='soru' onClick={() => {
            navigate('Quests')
        }} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'#E0F2F1',
        padding: 16,

    }
})

export default Main;
