import React, {Component } from 'react';
import {Text , View,ScrollView,Image,StyleSheet,Alert,TouchableOpacity } from 'react-native';

import {styles} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome'

 class Deck extends Component {

  render() {
    return(
    <ScrollView style={{width:'97%',alignContent:'center'}}>
    {
     this.props.dataObj.map((obj)=> {
      return(

        <View key={obj.id} style={styles.cardContainer}>
          {/* <Text style={styles.cardHeading}>{obj.text}</Text> */}
          <View style={styles.imageContainer}> 
          <Image source={{uri: obj.uri}}  style={styles.imageStyle}/>
          </View>
           

         <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
           <View>
            <Text style={styles.cardHeading}>{obj.text}</Text>
            </View>
            <View style={{flexDirection:'row',paddingVertical:10,marginRight:10}}>
             <TouchableOpacity style={{flexDirection:'row'}} onPress={()=> {Alert.alert("Like is Clicked")}}>
                 <Text style={{fontSize: 20,color:'black'}}> 98% </Text>
                 <Icon name="smile" size={22} color="grey"  />
             </TouchableOpacity>
             <TouchableOpacity style={{flexDirection:'row'}} onPress={()=> {Alert.alert("Detail is Clicked")}}>
                 <Text style={{fontSize: 20,color:'black'}}> 34% </Text>
                 <Icon name="frown" size={20}   />
             </TouchableOpacity>
             </View>
             {/* <TouchableOpacity style={styles.icons} onPress={()=> {Alert.alert("Fav is Clicked")}}> */}
                 {/* <Text style={styles.subHeading}> Fav </Text> */}
                 {/* <Icon name="heart" size={20}  style={{marginTop:2}} /> */}
             {/* </TouchableOpacity> */}
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