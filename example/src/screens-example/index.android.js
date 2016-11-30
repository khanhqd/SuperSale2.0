import {Navigation} from 'react-native-navigation';

import FirstTabScreen from './FirstTabScreen';
import SecondTabScreen from './SecondTabScreen';
import PushedScreen from './PushedScreen';
import StyledScreen from './StyledScreen';
import SideMenu from './SideMenu';
import ModalScreen from './ModalScreen';
import HomePizza from './HomePizza';
import GioiThieu from './GioiThieu';
import LienHe from './LienHe';
import Menu from './Menu';
import KhuyenMai from './KhuyenMai';
import CollapsingTopBarScreen from './CollapsingTopBarScreen';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.FirstTabScreen', () => FirstTabScreen);
  Navigation.registerComponent('example.SecondTabScreen', () => SecondTabScreen);
  Navigation.registerComponent('example.PushedScreen', () => PushedScreen);
  Navigation.registerComponent('example.StyledScreen', () => StyledScreen);
  Navigation.registerComponent('example.ModalScreen', () => ModalScreen);
  Navigation.registerComponent('example.SideMenu', () => SideMenu);
  Navigation.registerComponent('example.HomePizza', () => HomePizza);
  Navigation.registerComponent('example.GioiThieu', () => GioiThieu);
  Navigation.registerComponent('example.LienHe', () => LienHe);
  Navigation.registerComponent('example.Menu', () => Menu);
  Navigation.registerComponent('example.KhuyenMai', () => KhuyenMai);
  Navigation.registerComponent('example.CollapsingTopBarScreen', () => CollapsingTopBarScreen);
}
