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
import flatListData from '../../../components/PersonalCareList/index';
const {height, width} = Dimensions.get('window');
import {Container} from '../../../components/Containers/index';
import {AppView, AppText, Touchable, AppImage} from '../../../components/Atoms';
import styles from './style';
import {LIGHT_GREEN, LIGHT_BROWN, WHITE_ONE} from '../../../global/Colors';
import {RF} from '../../../global/Responsive';
import {notification_white} from '../../../assets/Icon';
import {GREY_ONE} from './../../../global/Colors';
import flatListDataOne from '../../../components/Disease/index';
import flatListDataTwo from '../../../components/Orthocare/index';

class FlatListItem extends Component {
  render() {
    return (
      <AppView style={[styles.flatListPage]}>
        <AppView style={[styles.flatListPageDesign]}>
          <AppView
            style={{
              flex: 1,
              flexDirection: 'column',
            }}>
            <AppImage
              style={[styles.iamge]}
              source={this.props.item.images}
              resizeMode="contain"
            />
            <AppView style={{flexDirection: 'row'}}>
              <AppView style={[styles.medicine]}>
                <AppText style={[styles.flatListItem]}>
                  {this.props.item.name}
                </AppText>
              </AppView>
              <AppView style={[styles.type]}>
                <AppText style={[styles.flatListItem1]}>
                  {this.props.item.names}
                </AppText>
              </AppView>
            </AppView>
            <AppView style={{flexDirection: 'row'}}>
              <AppView style={[styles.price]}>
                <AppText style={[styles.flatListItem2]}>
                  {this.props.item.namess}
                </AppText>
              </AppView>
              <AppView style={[styles.model]}>
                <AppText style={[styles.flatListItem3]}>
                  {this.props.item.namessss}
                </AppText>
              </AppView>
            </AppView>
          </AppView>
        </AppView>
        <AppView
          style={{
            height: 1,
            backgroundColor: 'white',
          }}></AppView>
      </AppView>
    );
  }
}

class FlatListItemOne extends Component {
  render() {
    return (
      <AppView style={[styles.flatListPage]}>
        <AppView style={[styles.flatListPageDesign]}>
          <AppView
            style={{
              flex: 1,
              flexDirection: 'column',
            }}>
            <AppImage
              style={[styles.iamge]}
              source={this.props.item.images}
              resizeMode="contain"
            />
            <AppView style={{flexDirection: 'row'}}>
              <AppView style={[styles.medicine]}>
                <AppText style={[styles.flatListItem]}>
                  {this.props.item.name}
                </AppText>
              </AppView>
              <AppView style={[styles.type]}>
                <AppText style={[styles.flatListItem1]}>
                  {this.props.item.names}
                </AppText>
              </AppView>
            </AppView>
            <AppView style={{flexDirection: 'row'}}>
              <AppView style={[styles.price]}>
                <AppText style={[styles.flatListItem2]}>
                  {this.props.item.namess}
                </AppText>
              </AppView>
              <AppView style={[styles.model]}>
                <AppText style={[styles.flatListItem3]}>
                  {this.props.item.namessss}
                </AppText>
              </AppView>
            </AppView>
          </AppView>
        </AppView>
        <AppView
          style={{
            height: 1,
            backgroundColor: 'white',
          }}></AppView>
      </AppView>
    );
  }
}

class FlatListItemTwo extends Component {
  render() {
    return (
      <AppView style={[styles.flatListPage]}>
        <AppView style={[styles.flatListPageDesign]}>
          <AppView
            style={{
              flex: 1,
              flexDirection: 'column',
            }}>
            <AppImage
              style={[styles.iamge]}
              source={this.props.item.images}
              resizeMode="contain"
            />
            <AppView style={{flexDirection: 'row'}}>
              <AppView style={[styles.medicine]}>
                <AppText style={[styles.flatListItem]}>
                  {this.props.item.name}
                </AppText>
              </AppView>
              <AppView style={[styles.type]}>
                <AppText style={[styles.flatListItem1]}>
                  {this.props.item.names}
                </AppText>
              </AppView>
            </AppView>
            <AppView style={{flexDirection: 'row'}}>
              <AppView style={[styles.price]}>
                <AppText style={[styles.flatListItem2]}>
                  {this.props.item.namess}
                </AppText>
              </AppView>
              <AppView style={[styles.model]}>
                <AppText style={[styles.flatListItem3]}>
                  {this.props.item.namessss}
                </AppText>
              </AppView>
            </AppView>
          </AppView>
        </AppView>
        <AppView
          style={{
            height: 1,
            backgroundColor: 'white',
          }}></AppView>
      </AppView>
    );
  }
}

export default class index extends Component {
  render() {
    return (
      <AppView style={{
        flex:1,
        backgroundColor:"#fff"
      }}>
        <AppView style={styles.toptabview}>
          <Touchable style={[styles.tapView, {backgroundColor: LIGHT_GREEN}]}>
            <AppText
              style={[
                styles.defaultText,
                {
                  fontSize: RF(16),
                  color: WHITE_ONE,
                },
              ]}>
              {'Past'}
            </AppText>
          </Touchable>
          <Touchable
          onPress = {() =>{ this.props.navigation.navigate("Upcoming");}}
            style={[
              styles.tapView,
              {
                backgroundColor: WHITE_ONE,
              },
            ]}>
            <AppText
              style={[
                styles.defaultText,
                {
                  fontSize: RF(16),
                  color: GREY_ONE,
                },
              ]}>
              {'Upcoming'}
            </AppText>
          </Touchable>
        </AppView>
        <ScrollView>
          <AppView
            style={{
              paddingLeft: wp('4%'),
              paddingBottom: hp('1%'),
              paddingTop: hp('2%'),
            }}>
            <AppText style={[styles.personalcare]}>{'Personal Care'}</AppText>
          </AppView>

          <AppView
            style={{
              marginHorizontal: wp('2%'),
              justifyContent: 'space-between',
            }}>
            <FlatList
              data={flatListData}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => {
                return (
                  <FlatListItem
                    item={item}
                    index={index}
                    showsHorizontalScrollIndicator={false}
                    parentFlatList={this}></FlatListItem>
                );
              }}></FlatList>
          </AppView>
          <AppView
            style={{
              paddingLeft: wp('4%'),
              paddingBottom: hp('1%'),
              paddingTop: hp('2%'),
            }}>
            <AppText style={[styles.personalcare]}>{'Disease'}</AppText>
          </AppView>

          <AppView
            style={{
              marginHorizontal: wp('2%'),
              justifyContent: 'space-between',
            }}>
            <FlatList
              data={flatListDataOne}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => {
                return (
                  <FlatListItemOne
                    item={item}
                    index={index}
                    showsHorizontalScrollIndicator={false}
                    parentFlatList={this}></FlatListItemOne>
                );
              }}></FlatList>
          </AppView>
          <AppView
            style={{
              paddingLeft: wp('4%'),
              paddingBottom: hp('1%'),
              paddingTop: hp('2%'),
            }}>
            <AppText style={[styles.personalcare]}>{'Orthocare'}</AppText>
          </AppView>

          <AppView
            style={{
              marginHorizontal: wp('2%'),
              justifyContent: 'space-between',
            }}>
            <FlatList
              data={flatListDataTwo}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => {
                return (
                  <FlatListItemTwo
                    item={item}
                    index={index}
                    showsHorizontalScrollIndicator={false}
                    parentFlatList={this}></FlatListItemTwo>
                );
              }}></FlatList>
          </AppView>
        </ScrollView>
        </AppView>
    );
  }
}
