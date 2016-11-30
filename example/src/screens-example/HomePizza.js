import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';
import {Navigation} from 'react-native-navigation';
var {height, width} = Dimensions.get('window');
import rowMenu from './rowMenu.js';


export default class HomePizza extends Component {
  static navigatorButtons = {
    leftButtons: [{
      icon: require('../../img/navicon_menu.png'),
      id: 'menu'
    }],
    rightButtons:[
      {
        icon: require('../../img/shop.png'),
        id: 'shop'
      }]
  };
  static navigatorStyle = {
    navBarBackgroundColor: '#150863',
    navBarTextColor: '#d4830a',
    navBarSubtitleTextColor: '#ff0000',
    navBarButtonColor: '#ffffff',
    statusBarTextColorScheme: 'light',
    tabBarBackgroundColor: '#4dbce9',
    tabBarButtonColor: '#ffffff',
    tabBarSelectedButtonColor: '#ffff00'
  };

  constructor(props) {
    super(props);
    // if you want to listen on navigator events, set this up
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.id === 'menu') {
      this.props.navigator.toggleDrawer({
        side: 'left',
        animated: true
      });
    }
    if (event.id === 'shop') {
      Alert.alert('NavBar', 'Edit button pressed');
    }
    if (event.id === 'add') {
      Alert.alert('NavBar', 'Add button pressed');
    }
  }

  render() {
    return (
      <ScrollView >
        <Image
          style={{width: width, height: width*0.75}}
          source={ require('../../img/banner-pizza.png')} />

        <Text style={{color:'#336600', fontWeight:'bold', fontSize:25, textAlign:'center', paddingTop:10}}>Pizzas of the month
        </Text>

        <View style={{flexDirection:'row',justifyContent:'center'}}>
          <View style={[{flex:4},styles.firstRow]}>
            <Text>Bánh đường kính 24cm</Text>
          </View>
          <View style={[{flex:1},styles.firstRow]}>
            <Text>Giá</Text>
          </View>
        </View>


      </ScrollView>
    );
  }

//   onLightBoxPress() {
//     this.props.navigator.showLightBox({
//       screen: "example.LightBoxScreen",
//       style: {
//         backgroundBlur: "dark"
//       },
//       passProps: {
//         greeting: 'hey there'
//       },
//     });
//   }
//
//   onInAppNotificationPress() {
//     this.props.navigator.showInAppNotification({
//       screen: "example.NotificationScreen"
//     });
//   }
//
//   onStartSingleScreenApp() {
//     Navigation.startSingleScreenApp({
//       screen: {
//         screen: 'example.FirstTabScreen'
//       },
//       drawer: {
//         left: {
//           screen: 'example.SideMenu'
//         }
//       }
//     });
//   }
// }

const styles = StyleSheet.create({
  button: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
    color: 'blue'
  },
  firstRow: {
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderColor:'grey',
    paddingTop:10,
    paddingBottom:10
  }
});
