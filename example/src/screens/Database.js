import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  Dimensions,
  TextInput,
  Picker
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import InfoBox from './_Subtance/InfoBox';
var {height, width} = Dimensions.get('window');
const Item = Picker.Item;
export default class Database extends Component {
  static navigatorButtons = {
    leftButtons: [{
      icon: require('../../img/navicon_menu.png'),
      id: 'menu'
    }]
  };
  static navigatorStyle = {
    navBarBackgroundColor: '#336600',
    navBarTextColor: 'white',
    navBarSubtitleTextColor: '#ff0000',
    navBarButtonColor: '#ffffff',
    statusBarTextColorScheme: 'light',
    tabBarBackgroundColor: '#4dbce9',
    tabBarButtonColor: '#ffffff',
    tabBarSelectedButtonColor: '#ffff00'
  };

  constructor(props) {
    super(props);
    this.state={
      content :'Trong này ghi nội dung tương tác lần 1',
      plan: 'Kế hoạch cho lần gọi tới',
      selected0: 'key0'
    }
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
  onValueChange(key, value) {
    const newState = {};
    newState[key] = value;
    this.setState(newState);
  };


  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row', width:width}}>
          <View style={{flex:1}}>
              <InfoBox title='Mã KH:' content='M12345' />
              <InfoBox title='Họ tên:' content='Thanh niên chuyên cần' />
              <InfoBox title='Điện thoại' content='0123.456.789' />
          </View>
          <View style={{flex:1}}>
              <InfoBox title='Địa chỉ:' content='612 La Thành - Hà Nội' />
              <InfoBox title='Tình trạng:' content='Khách đã đặt hẹn' />
              <InfoBox title='Ngày sinh:' content='11.22.1989' />
          </View>
        </View>
        <InfoBox title='Nhân viên phụ trách:' content='Quách Khánh' />

        <View style={styles.box}>
          <View style={styles.titleContainer}>
            <Text style={styles.textTitle}>Nội dung tương tác:</Text>
          </View>
          <TextInput
          style={styles.textBox}
          onChangeText={(content) => this.setState({content})}
          value={this.state.content}/>
        </View>

        <View style={styles.box}>
          <View style={styles.titleContainer}>
            <Text style={styles.textTitle}>Trạng thái:</Text>
          </View>
        <View style={{paddingLeft:25, flexDirection:'row'}}>
          <Picker
              style={styles.picker}
              selectedValue={this.state.selected0}
              onValueChange={this.onValueChange.bind(this, 'selected0')}>
              <Item label="Chưa xử lý" value="key0" />
              <Item label="Gọi không thành công" value="key1" />
              <Item label="Đã hẹn" value="key2" />
              <Item label="Đã gặp trực tiếp" value="key3" />
          </Picker>
        </View>
        </View>

        <View style={styles.box}>
          <View style={styles.titleContainer}>
            <Text style={styles.textTitle}>Kế hoạch:</Text>
          </View>
          <TextInput
          style={styles.textBox}
          onChangeText={(plan) => this.setState({plan})}
          value={this.state.plan}/>
        </View>


      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
    color: 'blue'
  },
  container:{
    backgroundColor: '#e9eaed',
    flex: 1,
    justifyContent:'flex-start'
  },
  titleContainer:{
    borderBottomWidth: 0.5,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 2.5,
    borderBottomColor: '#d6d7da',
    backgroundColor: '#f6f7f8',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  textTitle:{
    color:'black',
    paddingLeft:20,
    fontSize:15,
    fontWeight:'bold'
  },
  textBox:{
    fontSize:15,
    padding:10,
    paddingLeft:30
  },
  box:{
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: '#ffffff',
    margin: 5,
    marginVertical: 1,
    overflow: 'hidden',
  },
  picker: {
    width: width,
    backgroundColor:'white',
    paddingLeft:30,
  },
});
