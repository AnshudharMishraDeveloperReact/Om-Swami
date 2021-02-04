import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const {height, width} = Dimensions.get('window');
import {Container} from '../../../components/Containers/index';
import {AppView, AppText, Touchable, AppImage} from '../../../components/Atoms';
import styles from './style';
import {LIGHT_GREEN, LIGHT_BROWN, WHITE_ONE} from '../../../global/Colors';
import {RF} from '../../../global/Responsive';
import {notification_white} from '../../../assets/Icon';
import {GREY_ONE} from './../../../global/Colors';
import flatListDataOnee from '../../../components/Category/List';
import flatListDataTwoo from '../../../components/Category/Listm';


export default class index extends Component {
  render() {
    return (
      <AppView
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <ScrollView>
          <AppView
            style={{
              marginHorizontal: wp('2%'),
              justifyContent: 'space-between',
              marginTop: hp('5%'),
              flexDirection: 'row',
            }}>
            <AppView style={[styles.flatListPage]}>
              <AppView style={[styles.flatListPageDesign]}>
                <Touchable
                 onPress= {() => {this.props.navigation.navigate("SecondPage")}}
                  style={{
                    flex: 1,
                    flexDirection: 'column',
                  }}>
                  <AppImage
                    style={[styles.iamge]}
                    source={require('../../../assets/Images/Beauty.jpg')}
                    resizeMode="contain"
                  />
                  <AppView
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: hp('1%'),
                    }}>
                    <AppView style={[styles.medicine]}>
                      <AppText style={[styles.flatListItem]}>
                        {'सौंदर्य सम्बद्ध'}
                      </AppText>
                    </AppView>
                  </AppView>
                </Touchable>
              </AppView>
              <AppView
                style={{
                  height: 1,
                  backgroundColor: 'white',
                }}></AppView>
            </AppView>
            <AppView style={[styles.flatListPage]}>
              <AppView style={[styles.flatListPageDesign]}>
                <Touchable
                   onPress= {() => {this.props.navigation.navigate("SecondPage")}}
                  style={{
                    flex: 1,
                    flexDirection: 'column',
                  }}>
                  <AppImage
                    style={[styles.iamge]}
                    source={require('../../../assets/Images/baby.jpg')}
                    resizeMode="contain"
                  />
                  <AppView
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: hp('1%'),
                    }}>
                    <AppView style={[styles.medicine]}>
                      <AppText style={[styles.flatListItem]}>
                        {'शिशु सम्बद्ध'}
                      </AppText>
                    </AppView>
                  </AppView>
                </Touchable>
              </AppView>
              <AppView
                style={{
                  height: 1,
                  backgroundColor: 'white',
                }}></AppView>
            </AppView>
          </AppView>
          <AppView
            style={{
              marginHorizontal: wp('2%'),
              justifyContent: 'space-between',
              marginTop: hp('5%'),
              flexDirection: 'row',
            }}>
            <AppView style={[styles.flatListPage]}>
              <AppView style={[styles.flatListPageDesign]}>
                <Touchable
                   onPress= {() => {this.props.navigation.navigate("SecondPage")}}
                  style={{
                    flex: 1,
                    flexDirection: 'column',
                  }}>
                  <AppImage
                    style={[styles.iamge]}
                    source={require('../../../assets/Images/Ortho.jpg')}
                    resizeMode="contain"
                  />
                  <AppView
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: hp('1%'),
                    }}>
                    <AppView style={[styles.medicine]}>
                      <AppText style={[styles.flatListItem]}>
                        {'हड्डी व्याधि'}
                      </AppText>
                    </AppView>
                  </AppView>
                </Touchable>
              </AppView>
              <AppView
                style={{
                  height: 1,
                  backgroundColor: 'white',
                }}></AppView>
            </AppView>
            <AppView style={[styles.flatListPage]}>
              <AppView style={[styles.flatListPageDesign]}>
                <Touchable
                   onPress= {() => {this.props.navigation.navigate("SecondPage")}}
                  style={{
                    flex: 1,
                    flexDirection: 'column',
                  }}>
                  <AppImage
                    style={[styles.iamge]}
                    source={require('../../../assets/Images/pet.jpg')}
                    resizeMode="contain"
                  />
                  <AppView
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: hp('1%'),
                    }}>
                    <AppView style={[styles.medicine]}>
                      <AppText style={[styles.flatListItem]}>
                        {'आमाशय व्याधि'}
                      </AppText>
                    </AppView>
                  </AppView>
                </Touchable>
              </AppView>
              <AppView
                style={{
                  height: 1,
                  backgroundColor: 'white',
                }}></AppView>
            </AppView>
          </AppView>
        </ScrollView>
      </AppView>
    );
  }
}
