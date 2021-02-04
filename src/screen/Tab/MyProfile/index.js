import React, {Component} from 'react';
import {Container} from '../../../components/Containers/index';
import {AppView, AppText, Touchable, AppImage} from '../../../components/Atoms';
import styles from './styles';
import {
  LIGHT_GREEN,
  LIGHT_BROWN,
  WHITE_ONE,
  GREY_ONE,
} from '../../../global/Colors';
import {RF} from '../../../global/Responsive';
import {notification_white} from '../../../assets/Icon';
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const {height, width} = Dimensions.get('window');

export default class index extends Component {
  render() {
    return (
     <AppView style={{
       flex:1,
       backgroundColor:"#fff"
     }}>
        <AppView style={[styles.maincontainer]}>
      
          <AppView style={[styles.submaincontainer]}>
          <ScrollView>
            <AppView style={{flexDirection: 'row',marginTop: height * 0.005}}>
              <AppView style={[styles.submaincontainer1]}>
                <AppText style={[styles.AppText]}>App Id</AppText>
              </AppView>
              <AppView style={[styles.submaincontainer2]}>
                <AppText>: 864HGWMQ211</AppText>
              </AppView>
            </AppView>
            <AppView style={{flexDirection: 'row',marginTop:height * 0.009}}>
              <AppView style={[styles.submaincontainer1]}>
                <AppText style={[styles.AppText]}>Username</AppText>
              </AppView>
              <AppView style={[styles.submaincontainer2]}>
                <AppText>: John67</AppText>
              </AppView>
            </AppView>
            <AppView style={{flexDirection: 'row',marginTop:height * 0.009}}>
              <AppView style={[styles.submaincontainer1]}>
                <AppText style={[styles.AppText]}>Name</AppText>
              </AppView>
              <AppView style={[styles.submaincontainer2]}>
                <AppText>: John</AppText>
              </AppView>
            </AppView>
            <AppView style={{flexDirection: 'row',marginTop:height * 0.009}}>
              <AppView style={[styles.submaincontainer1]}>
                <AppText style={[styles.AppText]}>Date Of Birth</AppText>
              </AppView>
              <AppView style={[styles.submaincontainer2]}>
                <AppText>: 01-01-2000</AppText>
              </AppView>
            </AppView>
            <AppView style={{flexDirection: 'row',marginTop:height * 0.009}}>
              <AppView style={[styles.submaincontainer1]}>
                <AppText style={[styles.AppText]}>Address</AppText>
              </AppView>
              <AppView style={[styles.submaincontainer2]}>
                <AppText>: G-163, Noida</AppText>
              </AppView>
            </AppView>
            <AppView style={{flexDirection: 'row',marginTop:height * 0.009}}>
              <AppView style={[styles.submaincontainer1]}>
                <AppText style={[styles.AppText]}>City</AppText>
              </AppView>
              <AppView style={[styles.submaincontainer2]}>
                <AppText>: Noida</AppText>
              </AppView>
            </AppView>
            <AppView style={{flexDirection: 'row',marginTop:height * 0.009}}>
              <AppView style={[styles.submaincontainer1]}>
                <AppText style={[styles.AppText]}>State</AppText>
              </AppView>
              <AppView style={[styles.submaincontainer2]}>
                <AppText>: UP</AppText>
              </AppView>
            </AppView>
            <AppView style={{flexDirection: 'row',marginTop:height * 0.009}}>
              <AppView style={[styles.submaincontainer1]}>
                <AppText style={[styles.AppText]}>Zip Code</AppText>
              </AppView>
              <AppView style={[styles.submaincontainer2]}>
                <AppText>: 209004</AppText>
              </AppView>
            </AppView>
            <AppView style={{flexDirection: 'row',marginTop:height * 0.009}}>
              <AppView style={[styles.submaincontainer1]}>
                <AppText style={[styles.AppText]}>Gender</AppText>
              </AppView>
              <AppView style={[styles.submaincontainer2]}>
                <AppText>: Male</AppText>
              </AppView>
            </AppView>
            <AppView style={{flexDirection: 'row',marginTop:height * 0.009}}>
              <AppView style={[styles.submaincontainer1]}>
                <AppText style={[styles.AppText]}>Phone Number</AppText>
              </AppView>
              <AppView style={[styles.submaincontainer2]}>
                <AppText>: 9999******</AppText>
              </AppView>
            </AppView>
            <AppView style={{flexDirection: 'row',marginTop:height * 0.009}}>
              <AppView style={[styles.submaincontainer1]}>
                <AppText style={[styles.AppText]}>Email</AppText>
              </AppView>
              <AppView style={[styles.submaincontainer2]}>
                <AppText>: john65@gmail.com</AppText>
              </AppView>
            </AppView>
            </ScrollView>
          </AppView>
     
        </AppView>
        </AppView>
    );
  }
}
