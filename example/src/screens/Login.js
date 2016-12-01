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
var {height, width} = Dimensions.get('window');
import {Navigation} from 'react-native-navigation';
export default class Login extends Component {
  static navigatorStyle = {
    navBarHidden: true
  };

  constructor(props) {
    super(props);
   
  }

  render() {
    return (
        <View style={{ flex: 1}}>
            <Image source={require('../../img/SuperSalers-login-screen.png')}
            resizeMode='stretch'
            style={{ flex: 1, height: height, width: width, justifyContent: 'center'}}
            >
                
            </Image>
        </View>
    );
  }
}

const styles = StyleSheet.create({
 
});
