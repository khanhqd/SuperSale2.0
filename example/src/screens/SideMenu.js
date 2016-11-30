import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  AlertIOS,
  Image,
  Dimensions
} from 'react-native';
var {height, width} = Dimensions.get('window');
export default class SideMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>

        <Image style={{width:width*0.73, height:width*0.386}} source={require('../../img/logo-drawer.png')}/>

        <TouchableOpacity style={[styles.rowDrawer,{borderTopWidth:1}]} onPress={ this.onPress0.bind(this) }>
          <Text style={styles.button}>Dữ liệu khách hàng</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rowDrawer} onPress={ this.onPress1.bind(this) }>
          <Text style={styles.button}>Lịch sử</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rowDrawer} onPress={ this.onPress2.bind(this) }>
          <Text style={styles.button}>Khách của tôi</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rowDrawer} onPress={ this.onPress3.bind(this) }>
          <Text style={styles.button}>Tiến độ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rowDrawer} onPress={ this.onPress4.bind(this) }>
          <Text style={styles.button}>Checklist</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rowDrawer} onPress={ this.onPress5.bind(this) }>
          <Text style={styles.button}>Tạo động lực</Text>
        </TouchableOpacity>


      </View>
    );
  }
  onPress0() {
    this._toggleDrawer();
    this.props.navigator.resetTo({
      title: "Dữ liệu khách hàng",
      screen: "example.Database",
      animated: false
    });
  }
  onPress1() {
    this._toggleDrawer();
    this.props.navigator.resetTo({
      title: "Lịch sử",
      screen: "example.History",
      animated: false
    });
  }
  onPress2() {
    this._toggleDrawer();
    this.props.navigator.resetTo({
      title: "Khách của tôi",
      screen: "example.MyCustomer",
      animated: false
    });
  }
  onPress3() {
    this._toggleDrawer();
    this.props.navigator.resetTo({
      title: "Tiến độ",
      screen: "example.Target",
      animated: false
    });
  }
  onPress4() {
    this._toggleDrawer();
    this.props.navigator.resetTo({
      title: "Checklist",
      screen: "example.Checklist",
      animated: false
    });
  }
  onPress5() {
    this._toggleDrawer();
    this.props.navigator.resetTo({
      title: "Tạo động lực",
      screen: "example.Motivation",
      animated: false
    });
  }
  _toggleDrawer() {
    this.props.navigator.toggleDrawer({
      to: 'closed',
      side: 'left',
      animated: true
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    width: 300
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop:10,
    fontWeight: '500'
  },
  button: {
    paddingLeft: 30,
    fontSize: 17,
    marginBottom: 13,
    marginTop:13,
    color: '#336600'
  },
  rowDrawer:{
    borderBottomWidth:1,
    borderColor:'grey',
    width: width*0.75
  }
});
