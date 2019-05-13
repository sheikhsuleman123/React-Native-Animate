import React, { Component } from 'react'
import {View, Text,TextInput} from 'react-native'

export default class New extends Component {

  render() {
    return (
      <View>
          <View>
            <TextInput
            style={styles.input}
            placeholder="Enter place name"
            >
            </TextInput>
          </View>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  input:{
    borderWidth:1,
    
  }
});