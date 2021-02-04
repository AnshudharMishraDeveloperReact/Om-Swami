import React, {Component} from 'react';
import {Container} from '../../components/Containers/index';
import {AppView, AppText, Touchable, AppImage} from '../../components/Atoms';
import styles from './styles';
import {notification_white} from '../../assets/Icon';
import {Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

export default class index extends Component {
  render() {
    return (
     <AppView style={{
       flex:1,
       backgroundColor:"#fff"
     }}>
        <AppView style={[styles.maincontainer]}>
        <AppText style={[styles.dummyText]}>
                {'Lorem ipsum dolor sit amet, consecteturing piscing elit, sed do eiusmod temporkwasmt incididunt ut labore et dolore magna aliquam. Ut enim ad minim veniam, quis nostrudsaing exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excnderepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}
            </AppText>
        </AppView>
        </AppView>
    );
  }
}
