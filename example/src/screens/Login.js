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
  TouchableHighlight
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
      password: '',
      animating: false,
      progress: false,
      color: new Animated.Value(0),
      textScale: new Animated.Value(1),
      textFade: new Animated.Value(1),
      buttonSize: new Animated.Value(0),
      buttonFade: new Animated.Value(1),
      animateCheck: false
    }
  }

  textAnimations() {
    return Animated.sequence([
      Animated.timing(
        this.state.color,
        {
          toValue: 1,
          duration: 300
        }
      ),
      Animated.timing(
        this.state.textScale,
        {
          toValue: 1.05,
          duration: 100
        }
      ),
      Animated.timing(
        this.state.textScale,
        {
          toValue: 1,
          duration: 100
        }
      ),
      Animated.timing(
        this.state.textFade,
        {
          toValue: 0,
          duration: 300
        }
      )
    ]);
  }

  buttonAnimations(direction) {
    return Animated.parallel([
      Animated.timing(
        this.state.buttonSize,
        {
          toValue: +direction,
          duration: 300
        }
      ),
      Animated.timing(
        this.state.color,
        {
          toValue: +!direction,
          duration: 300
        }
      )]);
  }

  onSubmit() {
    if (!this.state.animating) {
      this.state.animating = true;

      Animated.sequence([
        this.textAnimations(),
        this.buttonAnimations(true),
      ]).start(() => {
        this.state.animating = false;
        this.setState({ progress: true });
        //this.state.color.setValue(0);
        //this.state.textScale.setValue(1);
        //this.state.textFade.setValue(1);
        //this.state.buttonSize.setValue(0);
      });

      setTimeout(() => {
        this.setState({ progress: false, animateCheck: true }, () => {
          this.buttonAnimations(false).start();
        });
      }, 3000);
    }
  }

  render() {

    let color = this.state.color.interpolate({
      inputRange: [0, 1],
      outputRange: ["#1ECD97", "white"]
    });

    let bgColor = this.state.color.interpolate({
      inputRange: [0, 1],
      outputRange: ["white", "#1ECD97"]
    });

    let borderColor = this.state.buttonSize.interpolate({
      inputRange: [0, 1],
      outputRange: ["#1ECD97", "#BBBBBB"]
    });

    let borderWidth = this.state.buttonSize.interpolate({
      inputRange: [0, 1],
      outputRange: [2, 4]
    });

    let buttonWidth = this.state.buttonSize.interpolate({
      inputRange: [0, 1],
      outputRange: [200, 50]
    });

    let containerStyle = [styles.container, {
      backgroundColor: bgColor,
      borderColor: borderColor,
      width: buttonWidth,
      borderWidth: borderWidth
    }];
    let textStyle = [styles.text, {
      color: color,
      transform: [
        { scale: this.state.textScale }
      ],
      opacity: this.state.textFade
    }];
    let wrapper = {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    };

    let buttonWrapper = {
      height: 45, 
      width: width - 40,
      justifyContent: "center",
      alignItems: "center"
    };

    let check = this.state.animateCheck ? <View style={{ width: 35, height: 35, position: "absolute", top: 0, left: 80 }}>
      <Checkmark duration={400} />
    </View> : null;
    let content = (!this.state.progress ? <Animated.View style={containerStyle}>
      <Animated.Text
        style={textStyle}>
        Log in with Facebook
            </Animated.Text>
    </Animated.View> :
      <View style={{ position: "absolute", top: 0, left: 75 }}>
        <AnimatedCircularProgress
          size={50}
          width={4}
          fill={100}
          tintColor="#1ECD97"
          rotation={0}
          tension={5}
          backgroundColor="#BBBBBB" />
      </View>);

    return (
      <View style={{ flex: 1 }}>
        <Image source={require('../../img/SuperSalers-login-screen.png')}
          resizeMode='stretch'
          style={{ flex: 1, height: height, width: width, justifyContent: 'center' }}
          >
          <View style={{ backgroundColor: 'transparent', alignSelf: 'center', height: 120, width: width - 40, marginTop: 130 }}>
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
          <View style={{ backgroundColor: 'transparent', height: 45, width: width - 100, marginTop: 24, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#eee', fontSize: 17, fontWeight: 'bold' }}>or</Text>
          </View>
          <Animated.View style={{ marginTop: 30, height: 45, width: width - 40, borderWidth: 1.5, borderColor: '#eee', borderRadius: 2, backgroundColor: 'transparent', alignSelf: 'center' }}>
            <TouchableHighlight
              activeOpacity={1}
              underlayColor="transparent"
              onPress={this.onSubmit()}>
              <View style={buttonWrapper}>
                {content}
                {check}
              </View>
            </TouchableHighlight>
          </Animated.View>
        </Image>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  /*nhiem vu cua a Khanh la viet sang styles nhe :D */
  container: {
    height: 45, 
    width: width - 40, 
    borderRadius: 2, 
    backgroundColor: 'transparent', 
    alignSelf: 'center'
  },
  text: {
    fontSize: 18,
    letterSpacing: 1,
    fontFamily: 'Futura'
  }
});
