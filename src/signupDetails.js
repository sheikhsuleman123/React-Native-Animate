import React, { Component } from 'react';
import { View } from "react-native";
import { TextField } from "react-native-material-textfield";
import { styles } from '../../../assets/css/appStyle';
import { Navigation } from 'react-native-navigation';

class SignupDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            address: '',
            city: '',
            country: ''
        };
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }
    componentWillMount() {
        this.setState({
            firstName: this.props.ObjectVal.fName,
            lastName: this.props.ObjectVal.lName
        });
    }
    onNavigatorEvent(event) {
        // this is the onPress handler for the two buttons together
        if (event.type == 'NavBarButtonPress') {
          // this is the event type for button presses
          if (event.id == 'backPress') {           
            this.props.navigator.dismissModal();
          }
        }
      }

    render(){
        const { firstName, lastName, email, phoneNumber, address, city, country } = this.state;
        return(
            <View style={styles.container}>
                <View style={styles.childContainer}>
                        <TextField
                            label="First Name"
                            value={firstName}
                            disabled={true}
                            onChangeText={(fName) => this.setState({firstName: fName})}
                            maxLength={50}
                        />
                        <TextField
                            label="Last Name"
                            value={lastName}
                            disabled={true}
                            onChangeText={(lName) => this.setState({lastName: lName})}
                        />
                        <TextField
                            label="Email"
                            value={email}                            
                            onChangeText={(eml) => this.setState({email: eml})}
                            maxLength={50}
                        />
                        <TextField
                            label="Phone Number"
                            value={phoneNumber}                           
                            onChangeText={(fNumber) => this.setState({phoneNumber: fNumber})}
                        />
                        <TextField
                            label="Address"
                            value={address}                            
                            onChangeText={(add) => this.setState({address: add})}
                            maxLength={750}
                        />
                        <TextField
                            label="City"
                            value={city}                           
                            onChangeText={(ct) => this.setState({city: ct})}
                        />
                        <TextField
                            label="Country"
                            value={country}                            
                            onChangeText={(cntry) => this.setState({country: cntry})}
                            maxLength={50}
                        />                        

                </View>
            </View>
        )
    }

}

export default SignupDetails;
