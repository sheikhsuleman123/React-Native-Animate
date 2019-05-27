import React, {Component } from 'react';
import {Text , View,ScrollView,Image,StyleSheet,Alert,TouchableOpacity } from 'react-native';

import {styles} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome'

import { Rating, AirbnbRating } from 'react-native-ratings';

 class Deck extends Component {
  
  ratingCompleted (rating)  {
      console.log(rating);
 }
  render() {
    return(
    <ScrollView style={{width:'97%',alignContent:'center'}}>
    {
     this.props.dataObj.map((obj)=> {
      return(
        <View key={obj.id} style={styles.cardContainer}>
          <Text style={styles.cardHeading}>{obj.text}</Text>
          <View style={styles.imageContainer}> 
          <Image source={{uri: obj.uri}}  style={styles.imageStyle}/>
          </View>

         <View style={styles.imageSubHeading}>
             <TouchableOpacity style={styles.icons} onPress={()=> {Alert.alert("Like is Clicked")}}>
                 {/* <Text style={styles.subHeading}> Like </Text> */}
                 <Icon name="thumbs-up" size={22} color="grey" style={{marginTop:1}} />
             </TouchableOpacity>
             <TouchableOpacity style={styles.icons} onPress={()=> {Alert.alert("Detail is Clicked")}}>
                 {/* <Text style={styles.subHeading}> Detail </Text> */}
                 <Icon name="book" size={20}  style={{marginTop:2}} />
             </TouchableOpacity>
             <TouchableOpacity style={styles.icons} onPress={()=> {Alert.alert("Fav is Clicked")}}>
                 {/* <Text style={styles.subHeading}> Fav </Text> */}
                 <Icon name="heart" size={20}  style={{marginTop:2}} />
             </TouchableOpacity>
         </View>
         
         <View style={{alignSelf:'flex-end'}}>

         <AirbnbRating
         defaultRating={0}
         imageSize={20} 
         onFinishRating={this.ratingCompleted.bind(this)}
         /> 

          {/* <Rating
          type='custom'
          startingValue={0}
          ratingCount={5}
          imageSize={20}
          onFinishRating={this.ratingCompleted.bind(this)}
        /> */}
         </View>

        </View>
        
      );
     })
    }
   </ScrollView>
        );
    }
}

  export default Deck;