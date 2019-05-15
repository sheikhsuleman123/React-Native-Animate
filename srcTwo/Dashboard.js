import React , {Component} from 'react';
import {Alert, View , Text, StyleSheet, Image,ScrollView,TouchableOpacity } from 'react-native';
import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import FSD from '../assets/images/fsd.jpg';
import LHR from '../assets/images/lahore.jpg';
import ISL from '../assets/images/islamabad.jpg';
import RAW from '../assets/images/rawalpindi.jpg';
import GUJ from '../assets/images/gujrawala.jpg';
import SAR from '../assets/images/sargodha.jpg';
import MUL from '../assets/images/multan.jpg';
import NAR from '../assets/images/Naran.jpg';
import KAG from '../assets/images/Kaghan.jpg';
import MUR from '../assets/images/muree.jpg';

class Dashboard extends Component {
  constructor(){
    super();
    // this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

NavigationEventHandler = (
 screenName,
  pageTitle,
  objVal
  
) => {
  Promise.all([Icon.getImageSource('ios-arrow-round-back', 40)]).then(
    src => {
      Navigation.showModal({
        screen: screenName, //'Jobee.SkillsFormScreen', e.g. // unique ID registered with Navigation.registerScreen
        title: pageTitle, //'Add Skills', e.g.// navigation bar title of the pushed screen (optional)
        
        passProps: {
          ObjectVal: objVal,
        }, 
        // Object that will be passed as props to the pushed screen (optional)
        animated: true, // does the push have transition animation or does it happen immediately (optional)
        animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
        navigatorStyle: {}, // override the navigator style for the pushed screen (optional)
        navigatorButtons: {
          leftButtons: [
            {
              id: 'backPress',
              icon: src[0] // if you want an image button
            }
          ]
        } // override the nav buttons for the pushed screen (optional)
      });
    }
  );
};
  
onClickHandler  = () => {
  // Alert.alert("hallo")
  this.NavigationEventHandler(
    'Animate.DashboardDetails',
    'Card Details Dashboard',
    "MikeSuleman"        
  );
}

    render() {
        return(
            <ScrollView style={{width:'100%',alignContent:'center'}}>
            <View style={styles.container}>
              <View style={{marginTop:10}}>
                <View style={{flexDirection:'row'}}>
                 <View style={{}}>
                  <TouchableOpacity onPress={() => this.onClickHandler()}>
                   <Image style={{width: 200, height: 200,borderWidth:2,borderRadius:7,borderColor:'#fff'}} source={FSD} />
                   </TouchableOpacity>
                    <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:17}}>Faisalabad</Text>
                 </View>
                <View style={{}}>
                 <Image style={{width: 200, height: 200,borderWidth:2,borderRadius:7,borderColor:'#fff',marginLeft:5}} source={LHR} />                  
                  <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:17}}>Lahore</Text>
                </View>
                
                </View>
              </View>



              <View style={{marginTop:10}}>
                <View style={styles.imgContainer}>
                 <View >
                   <Image style={{width: 200, height: 200,borderWidth:2,borderRadius:7,borderColor:'#fff'}} source={ISL} />
                    <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:17}}>Islamabad</Text>
                 </View>
                <View >
                 <Image style={{width: 200, height: 200,borderWidth:2,borderRadius:7,borderColor:'#fff',marginLeft:5}} source={RAW} />                  
                  <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:17}}>Rawalpindi</Text>
                </View>
                
                </View>
              </View>


              <View style={{marginTop:10}}>
                <View style={styles.imgContainer}>
                 <View >
                   <Image style={{width: 200, height: 200,borderWidth:2,borderRadius:7,borderColor:'#fff'}} source={GUJ} />
                    <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:17}}>Gujrawala</Text>
                 </View>
                <View >
                 <Image style={{width: 200, height: 200,borderWidth:2,borderRadius:7,borderColor:'#fff',marginLeft:5}} source={SAR} />                  
                  <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:17}}>Sargodha</Text>
                </View>
                </View>
              </View>

              <View style={{marginTop:10}}>
                <View style={styles.imgContainer}>
                 <View >
                   <Image style={{width: 200, height: 200,borderWidth:2,borderRadius:7,borderColor:'#fff'}} source={MUL} />
                    <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:17}}>Multan</Text>
                 </View>
                <View >
                 <Image style={{width: 200, height: 200,borderWidth:2,borderRadius:7,borderColor:'#fff',marginLeft:5}} source={MUR} />                  
                  <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:17}}>Muree</Text>
                </View>
                </View>
              </View>

              <View style={{marginTop:10}}>
                <View style={styles.imgContainer}>
                 <View >
                   <Image style={{width: 200, height: 200,borderWidth:2,borderRadius:7,borderColor:'#fff'}} source={NAR} />
                    <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:17}}>Naran</Text>
                 </View>
                <View >
                 <Image style={{width: 200, height: 200,borderWidth:2,borderRadius:7,borderColor:'#fff',marginLeft:5}} source={KAG} />                  
                  <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:17}}>Kaghan</Text>
                </View>
                
                </View>
              </View>


            </View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container : {
      flex:1,
      alignItems:'center',
      backgroundColor:"#fff",
    },
    imgContainer:{
        flexDirection:'row',
        
    }
 });

export default Dashboard;