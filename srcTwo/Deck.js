import React, {Component } from 'react';
import {Text , View,ScrollView,Image,StyleSheet,Alert,TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'

 class Deck extends Component {
  

render() {
  return(
    <ScrollView style={{width:'97%',alignContent:'center'}}>
    {
     this.props.dataObj.map((obj,index)=> {
      return(
        <View key={obj.id} style={styles.cardContainer}>
          
          <Text style={styles.cardHeading}>{obj.text}</Text>
          
          <View style={styles.imageContainer}> 
          <Image source={{uri: obj.uri}}  style={styles.imageStyle}/>
          </View>

         <View style={styles.imageSubHeading}>
             <TouchableOpacity style={styles.icons} onPress={()=> {Alert.alert("Like is Clicked")}}>
                 <Text style={styles.subHeading}> Like </Text>
                 <Icon name="thumbs-up" size={22} color="grey" style={{marginTop:1}} />
             </TouchableOpacity>
             <TouchableOpacity style={styles.icons} onPress={()=> {Alert.alert("Detail is Clicked")}}>
                 <Text style={styles.subHeading}> Detail </Text>
                 <Icon name="book" size={20}  style={{marginTop:2}} />
             </TouchableOpacity>
             <TouchableOpacity style={styles.icons} onPress={()=> {Alert.alert("Fav is Clicked")}}>
                 <Text style={styles.subHeading}> Fav </Text>
                 <Icon name="heart" size={20}  style={{marginTop:2}} />
             </TouchableOpacity>
         </View>

        </View>
      );
     })
    }
   </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    cardContainer :{
     margin:7, 
     backgroundColor:"#FAEBD7"
    },
    cardHeading: {
     textAlign:'center',
     fontSize:17,
     fontWeight:'bold',
     paddingVertical:15
    },
    imageContainer:{
     height:200,
     width:'100%'
    },
    imageStyle:{
     flex:1,
     width:null,
     alignSelf:'stretch'
    },
    imageSubHeading:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:10,
        paddingHorizontal:20
    },
    subHeading:{
        fontSize:17,
    },
    icons:{
        flexDirection:'row'
    }
  });
  export default Deck;