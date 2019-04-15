import React, { Component } from 'react'
import {View,Text, StyleSheet,TextInput } from 'react-native';

 class Form extends Component {
  render() {
    return (      
      <View style={styles.container}>
        
        <View style={styles.childcontainer}>
            <Text style={styles.label}>Username</Text>
            <TextInput placeholder="Enter Your Name" style={styles.input}></TextInput>
        </View>
        <View style={styles.childcontainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput placeholder="Enter Your Name" style={styles.input}></TextInput>
        </View>
        <View style={{ alignSelf:'flex-end'}}>
            <Text style={styles.forget}>Forget Passowrd ?</Text>
        </View>
        <View>
            <Text style={styles.btn}>Login</Text>
        </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
    flex:1,
    backgroundColor: '#FAEBD7',
    alignItems: 'center',
    },
    childcontainer: {
        padding: 5,
        flexDirection:'row',
    },
    label:{
        width:'30%',
        height:30,
        padding: 5,
        margin:5,
        borderWidth:1,
    },
    input:{
      width: '65%',
      borderWidth:1,
      height:30,
      padding:5,
      margin:5,
    },
    forget:{
     margin:5,
      color:'blue',
    },
    btn:{
      width:80,
      height:40,
      textAlign:'center',
      backgroundColor: '#FFA07A',
      padding:10,
    }
  });
  
  export default Form;
