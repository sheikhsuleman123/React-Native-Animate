import React, { Component } from 'react'
import {View,Text, StyleSheet } from 'react-native';

 class Form extends Component {
  render() {
    return (      
      <View style={styles.container}>
         <Text style={{marginBottom:10}}>Student Detail </Text>
        
        <View style={styles.form}>
          
            <View style={{margin:20}}>
                <Text>FirstName</Text>
                <Text>LastName</Text>
                <Text>Class</Text>
                <Text>Roll #</Text>
                <Text>Gender</Text>
                <Text>College</Text>
                <Text>City</Text>
                <Text>Country</Text>
                <Text>Language</Text>
            </View>
            <View>
            <Text>Muhammad</Text>
            <Text>Suleman</Text>
            <Text>BSCS</Text>
            <Text>311</Text>
            <Text>Male</Text>
            <Text>GMDC</Text>
            <Text>Laylpur</Text>
            <Text>Pakistan</Text>
            <Text>Urdu</Text>

            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    form: {
        padding: 20,
        flexDirection: 'row',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
   
  });
  
  export default Form;
