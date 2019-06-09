import React, { Component } from 'react'
import {View, Text,TextInput} from 'react-native'
import { styles } from './styles';
// import {Navigation } from 'react-native-navigation' 

export default class DashboardDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName:'suleman'
        }
        // this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
      }
    
    componentWillMount() {
            this.setState  ({
                    firstName : this.props.ObjectVal
            })
    }
  render() {
      const {firstName} = this.state;
    return (
      <View style={styles.container}>
          <Text>
              {firstName} 
          </Text>

      </View>
    )
  }
}

// const styles = StyleSheet.create({
//   container: {
//    backgroundColor:''  },
 
// });