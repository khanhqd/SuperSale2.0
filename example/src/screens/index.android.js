import {Navigation} from 'react-native-navigation';

import SideMenu from './SideMenu';
import Home from './Home';
import Checklist from './Checklist';
import CustomerDetail from './CustomerDetail';
import Database from './Database';
import History from './History';
import Motivation from './Motivation';
import MyCustomer from './MyCustomer';
import Target from './Target';
// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.SideMenu', () => SideMenu);
  Navigation.registerComponent('example.Home', () => Home);
  Navigation.registerComponent('example.Checklist', () => Checklist);
  Navigation.registerComponent('example.CustomerDetail', () => CustomerDetail);
  Navigation.registerComponent('example.Database', () => Database);
  Navigation.registerComponent('example.History', () => History);
  Navigation.registerComponent('example.Motivation', () => Motivation);
  Navigation.registerComponent('example.MyCustomer', () => MyCustomer);
  Navigation.registerComponent('example.Target', () => Target);

}
