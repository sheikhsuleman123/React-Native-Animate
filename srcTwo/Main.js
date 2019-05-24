import React , {Component } from 'react';
import {Text , View ,ScrollView,StyleSheet } from 'react-native';

import {styles} from './styles';

import Deck from './Deck';

 class Main extends  Component {
    constructor(props) {
        super(props);

    this.state = {
        data:[]
    }
}

    componentWillMount() {
        this.setState({
    data : [
    { id: 1, text: 'Sunshine', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
    { id: 2, text: 'Awesome', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
    { id: 3, text: 'Village', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
    { id: 4, text: 'Organize', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
    { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
    { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
    { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
    { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
        ]});
    }

    render() {
        return(
            <View style={styles.container}>
                <Deck  dataObj={this.state.data} />
            </View>
    );
  }
}



export default Main;