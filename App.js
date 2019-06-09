import { Navigation } from 'react-native-navigation';

import Icon from 'react-native-vector-icons/Ionicons';

import DashboardScreen from './srcTwo/Dashboard';
import CardsScreen from './srcTwo/Main';
import DashboardDetails from './srcTwo/DashboardDetails';

Navigation.registerComponent('Animate.DashboardScreen', () => DashboardScreen);
Navigation.registerComponent('Animate.CardsScreen', () => CardsScreen);
Navigation.registerComponent('Animate.DashboardDetails', () => DashboardDetails);


export default () => {

  Promise.all([
    Icon.getImageSource('ios-briefcase',30),
    Icon.getImageSource('ios-briefcase',30),  
  ]).then(src => {
  
    Navigation.startTabBasedApp({
    tabs:[
      {
        label: 'Cards',
        screen: 'Animate.DashboardScreen',
        icon: src[0],
        title: 'Cards Screen'
      },
      {
        label: 'Dashboard',
        icon: src[1],
        screen: 'Animate.CardsScreen',
        title: 'Dashboard Screen'
      },
      {
        label: 'Dashboard',
        icon: src[1],
        screen: 'Animate.DashboardDetails',
        title: 'Dashboard Detail'
      },
    ],
    tabsStyle: 
    { // optional, add this if you want to style the tab bar beyond the defaults
      tabBarHidden: true, // make the tab bar hidden
      // tabBarButtonColor: 'red', // change the color of the tab icons and text (also unselected)
      // tabBarSelectedButtonColor: 'red', // change the color of the selected tab icon and text (only selected)
      // tabBarSelectedButtonColor: '#00bac9', // change the color of the selected tab icon and text (only selected)
      // tabBarBackgroundColor: '#00bac9', // change the background color of the tab bar            
      // tabBarTranslucent: false, // change the translucent of the tab bar to false
      // tabBarTextFontFamily: fonts.regular, //change the tab font family                    
      // tabBarLabelColor: '#ffb700', // iOS only. change the color of tab text
      // tabBarSelectedLabelColor: '#00bac9', // iOS only. change the color of the selected tab text
      // forceTitlesDisplay: true, // Android only. If true - Show all bottom tab labels. If false - only the selected tab's label is visible.
      // tabBarHideShadow: true, // Remove default tab bar top shadow (hairline)
      // initialTabIndex: 1, // optional, the default selected bottom tab. Default: 0. On Android, add this to appStyle
    },
    appStyle: {
    orientation: 'portrait', // Sets a specific orientation to the entire app. Default: 'auto'. Supported values: 'auto', 'landscape', 'portrait'
    // disabledBackGesture: true,
    // disabledSimultaneousGesture: true,
    // bottomTabBadgeTextColor: 'green', // Optional, change badge background color. Android only
    tabBarSelectedButtonColor: 'red',
    // tabBarTranslucent: false,
    // forceTitlesDisplay: true,     
    // statusBarColor: '#00bac9',
    // navBarTextFontSize: 16,
    // navBarSubtitleFontSize: 12,
    // navBarButtonFontSize: 12,
    // navBarLeftButtonFontSize: 22,
    // navBarRightButtonFontSize: 12,
    // navBarButtonColor: '#ffffff',      
    navBarTitleTextCentered: true,
    navBarTextColor:'#fff',          
    navBarBackgroundColor: 'purple',
    navigationBarColor: 'purple',
    // backButtonImage: require('./pathToImage.png') // Change the back button default arrow image with provided image. iOS only
    // hideBackButtonTitle: true/false // Hide back button title. Default is false. If `backButtonTitle` provided so it will take into account and the `backButtonTitle` value will show. iOS only
    initialTabIndex: 1
  }
  });
  });
}
