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
        <Text style={styles.title}>SUPER SALE</Text>

        <TouchableOpacity onPress={ this.onPress0.bind(this) }>
          <Text style={styles.button}>Dữ liệu khách hàng</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ this.onPress1.bind(this) }>
          <Text style={styles.button}>Lịch sử</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ this.onPress2.bind(this) }>
          <Text style={styles.button}>Khách của tôi</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ this.onPress3.bind(this) }>
          <Text style={styles.button}>Tiến độ</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ this.onPress4.bind(this) }>
          <Text style={styles.button}>Checklist</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ this.onPress5.bind(this) }>
          <Text style={styles.button}>Tạo động lực</Text>
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

  onPress0() {
    this._toggleDrawer();
    this.props.navigator.resetTo({
      title: "Dữ liệu khách hàng",
      screen: "example.Database",
      animated: true
    });
  }
  onPress1() {
    this._toggleDrawer();
    this.props.navigator.resetTo({
      title: "Lịch sử",
      screen: "example.History",
      animated: true
    });
  }
  onPress2() {
    this._toggleDrawer();
    this.props.navigator.resetTo({
      title: "Khách của tôi",
      screen: "example.MyCustomer",
      animated: true
    });
  }
  onPress3() {
    this._toggleDrawer();
    this.props.navigator.resetTo({
      title: "Tiến độ",
      screen: "example.Target",
      animated: true
    });
  }
  onPress4() {
    this._toggleDrawer();
    this.props.navigator.resetTo({
      title: "Checklist",
      screen: "example.Checklist",
      animated: true
    });
  }
  onPress5() {
    this._toggleDrawer();
    this.props.navigator.resetTo({
      title: "Tạo động lực",
      screen: "example.Motivation",
      animated: true
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
