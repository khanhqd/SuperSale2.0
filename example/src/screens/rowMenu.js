import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default class rowMenu extends Component{
  render(){
    return(
      <View style={{flexDirection:'row',justifyContent:'center'}}>
          <View style={[{flex:4},styles.firstRow]}>
            <Text>Bánh đường kính 24cm</Text>
          </View>
          <View style={[{flex:1},styles.firstRow]}>
            <Text>{this.props.price}</Text>
          </View>
        </View>

    )
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
  firstRow: {
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderColor:'grey',
    paddingTop:10,
    paddingBottom:10
  }
});
