import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  AlertIOS
} from 'react-native';

export default class SideMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Night Pizza</Text>

        <TouchableOpacity onPress={ this.onPressGioiThieu.bind(this) }>
          <Text style={styles.button}>Giới thiệu</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ this.onPressMenu.bind(this) }>
          <Text style={styles.button}>Menu</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ this.onPressKhuyenMai.bind(this) }>
          <Text style={styles.button}>Khuyến mại</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ this.onPressLienHe.bind(this) }>
          <Text style={styles.button}>Liên hệ</Text>
        </TouchableOpacity>
      </View>
    );
  }
  // onReplaceTab2Press() {
  //   this._toggleDrawer();
  //   // push/pop navigator actions affect the navigation stack of the current screen only.
  //   // since side menu actions are normally directed at sibling tabs, push/pop will
  //   // not help us. the recommended alternative is to use deep links for this purpose
  //   this.props.navigator.handleDeepLink({
  //     link: "tab2/example.PushedScreen"
  //   });
  // }

  onPressGioiThieu() {
    this._toggleDrawer();
    this.props.navigator.resetTo({
      title: "Giới Thiệu",
      screen: "example.GioiThieu",
      animated:true
    });
  }
  onPressMenu() {
    this._toggleDrawer();
    this.props.navigator.resetTo({
      title: "Menu",
      screen: "example.Menu",
      animated:true
    });
  }
  onPressLienHe() {
    this._toggleDrawer();
    this.props.navigator.push({
      title: "Liên Hệ",
      screen: "example.LienHe",
      animated:true
    });
  }
  onPressKhuyenMai() {
    this._toggleDrawer();
    this.props.navigator.push({
      title: "Khuyến Mãi",
      screen: "example.KhuyenMai",
      animated:false
    });
  }
  _toggleDrawer() {
    this.props.navigator.toggleDrawer({
      to: 'closed',
      side: 'left',
      animated: false
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
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
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop:10,
    color: 'blue'
  }
});
