import React, { Component } from 'react';
import {Text, View, ScrollView,PanResponder } from 'react-native';
import {Card, Button} from 'react-native-elements';

import Deck from './Deck';

const DATA = [
    { id: 1, text: 'Sunshine', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
    { id: 2, text: 'City', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
    { id: 3, text: 'Village', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
    { id: 4, text: 'Organize', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
    { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
    { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
    { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
    { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  ];
  
export default class Main extends Component {
    constructor(props) {
        super();

        const panResponder = PanResponder.create({
        onStartShouldSetPanResponder : () => true,
        onPanResponderMove: (event, gesture) => {
          alert(gesture);
        },
        onPanResponderRelease:  () => {}
        
      });

      
        this.state = { panResponder };
    }
        renderCard(item) {
            return (
                <Card
                key={item.id}
                title={item.text}
                image={{uri: item.uri}}
                >
                <Text style={{marginBottom: 10}}>I can change the card</Text>
               <Button icon={{name: 'code'}}
               backgroundColor='#eee'
               title='Explore Now'
               color="white"
               />
                
                </Card>
            )
        }

  render() {
    return (
      <View style={{backgroundColor:'#F5F5F5'}}>
    
        <Deck 
        data={DATA}
        renderCard={this.renderCard}
        />
      </View>
    );
  }
}
