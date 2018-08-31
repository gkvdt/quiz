import React, { Component } from 'react';
import { View, Text ,StyleSheet } from 'react-native';
import Button from '../components/Button';
import {getQuest} from '../assets/GetQuests';
import Quest from '../components/Quest'
import LogTrue from '../components/LogTrue'
import LogFalse from '../components/LogFalse'



class Quests extends Component {
  constructor(props) {
    super(props);
    this.state = {

      show:false
      
    };
    this.getQuests = this.getQuests.bind(this);
    this.control = this.control.bind(this);
    this.asd = this.asd.bind(this)

  }

  
  componentWillMount(){
    
    this.getQuests()
   
    
  }
  reset(){
    this.setState({
      show:false
    })
    this.getQuests();

  }

  control(checked){
    

  }

  asd(btn){
    
    if(this.state.show){
      if(btn == this.state.true){
        return <LogTrue  onClick={() =>{
      
          this.reset()
        }}/>
      }else{
        let cevap = this.state.true;
        return <LogFalse cevap={cevap.toUpperCase()} onClick={() =>{
      
          this.reset()
        }}/>
      }
    }
     
    else
    return;
  }
  getQuests(){
    let quest = [];
    quest = getQuest(); 
    this.setState({
      quest:quest['soru'],
      buttonA:quest['a'],
      buttonB:quest['b'],
      buttonC:quest['c'],
      buttonD:quest['d'],
      true:quest['cevap']
    })
   

  }
  static navigationOptions={
      header:null
  }
  render() {
    return (
      <View style={styles.container} >
        <View style={styles.up}>
            <Quest text={this.state.quest}/>

        </View>

        <View style={styles.down}>
            <Button text={this.state.buttonA} onClick = {() => {
              this.setState({
                show:true,
                check:'a'
              })
              
            }} color={this.state.colorA} />
            <Button text={this.state.buttonB} onClick = {() => {
              this.setState({
                show:true,
                check:'b'
              })
              
            }} color={this.state.colorB}/>
            <Button text={this.state.buttonC} onClick = {() => {
              this.setState({
                show:true,
                check:'c'
              })
              
            }} color={this.state.colorC}/>
            <Button text={this.state.buttonD} onClick = {() => {
              this.setState({
                show:true,
                check:'d'
              })
              
            }} color={this.state.colorD}/>
        
        </View>
        
        {this.asd(this.state.check)}

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

    },
    up:{
        flex:4,
        width:'100%',
        justifyContent:'center',
        alignItems: 'center',
    },
    down:{
        flex:6,
        width:'100%',
        justifyContent:'center'
    },

})

export default Quests;
