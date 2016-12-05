import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  Image,
  Dimensions,
  ScrollView,
  Animated,
  TouchableHighlight,
  StatusBar
} from 'react-native';

var {height, width} = Dimensions.get('window');

import { Navigation } from 'react-native-navigation';
import { Kohana } from 'react-native-textinput-effects';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import Checkmark from '../animated/Checkmark.js';

export default class Login extends Component {
  static navigatorStyle = {
    navBarHidden: true
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  onLogin() {
    this.props.navigator.push({
      screen: 'example.Home',
      title: 'Home'
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor="#88DEB1"
          barStyle="light-content"
          />
        <Image source={require('../../img/SuperSalers-login-screen.png')}
          resizeMode='stretch'
          style={{ flex: 1, height: height, width: width, justifyContent: 'center' }}
          >
          <View style={{ backgroundColor: 'transparent', alignSelf: 'center', height: 120, width: width - 40, marginTop: 150 }}>
            <Kohana
              style={{ backgroundColor: 'transparent', alignSelf: 'center', height: 45, borderWidth: 1.5, borderColor: '#eee', borderRadius: 30 }}
              label={'Username'}
              iconClass={FontAwesomeIcon}
              iconName={'user'}
              iconColor={'#eee'}
              labelStyle={{ color: '#eee' }}
              inputStyle={{ color: '#eee' }}
              onChangeText={(text) => this.setState({ username: text })}
              value={this.state.username}
              />
            <Kohana
              style={{ backgroundColor: 'transparent', alignSelf: 'center', height: 45, marginTop: 15, borderWidth: 1.5, borderColor: '#eee', borderRadius: 30 }}
              label={'Password'}
              iconClass={FontAwesomeIcon}
              iconName={'lock'}
              iconColor={'#eee'}
              labelStyle={{ color: '#eee' }}
              inputStyle={{ color: '#eee' }}
              secureTextEntry={true}
              onChangeText={(text) => this.setState({ password: text })}
              value={this.state.password}
              />
          </View>
          <TouchableOpacity onPress={() => {this.onLogin()}}
          style={{ backgroundColor: '#00B5A2', alignSelf: 'center', height: 45, width: 250, marginTop: 30, borderWidth: 1.5, borderColor: '#eee', borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#eee', fontWeight: 'bold' }}>Login</Text>
          </TouchableOpacity>
          <View style={{ marginTop: 20, alignSelf: 'center', justifyContent: 'center' }}><Text style={{ color: '#eee', fontSize: 18, fontWeight: 'bold' }}>- or -</Text></View>
          <TouchableOpacity style={{ backgroundColor: '#3b5999', alignSelf: 'center', height: 45, width: 250, marginTop: 20, borderWidth: 1.5, borderColor: '#eee', borderRadius: 30, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ flex: 8, marginLeft: 40 }}>
              <Text style={{ color: '#eee', fontWeight: 'bold' }}>Login with Facebook</Text>
            </View>
            <View style={{ flex: 2 }}>
              <FontAwesomeIcon name="facebook-official" size={25} color="#eee" />
            </View>
          </TouchableOpacity>
        </Image>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  /*nhiem vu cua a Khanh la viet sang styles nhe :D */

});
