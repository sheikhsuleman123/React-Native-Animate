import React, { Component } from 'react'
import {View,Text, StyleSheet } from 'react-native';

 class Form extends Component {
  render() {
    return (      
      <View style={styles.container}>
        
        <View style={styles.childcontainer}>
            <Text style={styles.label}>Username</Text>
            <Text style={styles.value}>Enter you username</Text>
        </View>
        <View style={styles.childcontainer}>
            <Text style={styles.label}>Password</Text>
            <Text style={styles.value}>Enter you password</Text>
        </View>
        <View>
            <Text >Forget Passowrd</Text>
        </View>
        <View>
            <Text>Button</Text>
        </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    marginTop: '40%',
    backgroundColor: '#FA8072',
    alignItems: 'center',
    },
    childcontainer: {
        width: '90%',
        margin: '5%',
        flexDirection:'row',
    },
    label:{
        width:'30%',
        padding: 5,
        color:'black'
    },
    value:{
        width: '65%',
        padding: 5,
    }
  });
  
  export default Form;
