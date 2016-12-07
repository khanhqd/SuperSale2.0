import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  ListView
} from 'react-native';

import {Navigation} from 'react-native-navigation';
import DatePicker from 'react-native-datepicker';

var moment = require('moment');

var data = [
  {dateOfEvent: '11/12/1995', customerName: 'Nguyen Van A', phonenumber: '01292844648', status: 'Resolved' },
  {dateOfEvent: '11/12/1995', customerName: 'Nguyen Van A', phonenumber: '01292844648', status: 'Resolved' },
  {dateOfEvent: '11/12/1995', customerName: 'Nguyen Van A', phonenumber: '01292844648', status: 'Resolved' },
  {dateOfEvent: '11/12/1995', customerName: 'Nguyen Van A', phonenumber: '01292844648', status: 'Resolved' },
  {dateOfEvent: '11/12/1995', customerName: 'Nguyen Van A', phonenumber: '01292844648', status: 'Resolved' },
  {dateOfEvent: '11/12/1995', customerName: 'Nguyen Van A', phonenumber: '01292844648', status: 'Resolved' },
  {dateOfEvent: '11/12/1995', customerName: 'Nguyen Van A', phonenumber: '01292844648', status: 'Resolved' },
  {dateOfEvent: '11/12/1995', customerName: 'Nguyen Van A', phonenumber: '01292844648', status: 'Resolved' },
  {dateOfEvent: '11/12/1995', customerName: 'Nguyen Van A', phonenumber: '01292844648', status: 'Resolved' }
];

export default class History extends Component {
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
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    // if you want to listen on navigator events, set this up
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this.state = {
          dataSource: ds.cloneWithRows(data),
          date: new Date()
        };
        this._renderRow = this._renderRow.bind(this);
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

  _renderRow(data) {
      return (
        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignItems: 'center', borderBottomWidth: 1, borderColor: '#CFD8DC'}}>
          <Text style={{ padding: 7, fontSize: 11, fontWeight: 'bold'}}>{data.dateOfEvent}</Text>
          <Text style={{ padding: 7, fontSize: 11, fontWeight: 'bold'}}>{data.customerName}</Text>
          <Text style={{ padding: 7, fontSize: 11, fontWeight: 'bold'}}>{data.phonenumber}</Text>
          <Text style={{ padding: 7, fontSize: 11, fontWeight: 'bold'}}>{data.status}</Text>
        </TouchableOpacity>
      );
    }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#CFD8DC', justifyContent: 'center'}}>
        <View style={{backgroundColor: '#FAFAFA', padding: 12, marginTop: 12, marginBottom: 12, alignSelf: 'center', borderRadius: 6}}>
          <DatePicker
                style={{width: 200, marginBottom:10, alignSelf: 'center', marginTop: 12}}
                date={this.state.date}
                mode="date"
                duration={300}
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate= {moment().subtract(365, 'days').toDate()}
                maxDate= {this.state.date}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36,
                        backgroundColor: '#eee',
                        borderRadius: 8
                    }
                }}
                onDateChange={(date) => {this.setState({date: date})}}
            />
          <View style={{ marginTop: 20, alignSelf: 'center'}}>
                    <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, borderColor: '#CFD8DC'}}>
                      <Text style={{ padding: 7, fontSize: 11, fontWeight: 'bold'}}>Ngày</Text>
                      <Text style={{ padding: 7, fontSize: 11, fontWeight: 'bold'}}>Tên</Text>
                      <Text style={{ padding: 7, fontSize: 11, fontWeight: 'bold'}}>SĐT</Text>
                      <Text style={{ padding: 7, fontSize: 11, fontWeight: 'bold'}}>Tình trạng</Text>
                    </View>
                   <ListView
                     dataSource={this.state.dataSource}
                     renderRow={(data) => this._renderRow(data)}
                   />
                 </View>
        </View>
      </View>
    );
  }
}
