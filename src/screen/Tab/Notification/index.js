import React, {Component} from 'react';
import {
  AppRegistry,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
} from 'react-native';
import flatListData from '../../../components/NotificationList/index';
import Swipeout from 'react-native-swipeout';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RF} from '@Global/Responsive';
import {AppText} from '../../../components/Molecules/index';
import {BLACK_SHADOW} from './../../../global/Colors';

class FlatListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRowKey: null,
    };
  }
  render() {
    const swipeSettings = {
      autoClose: true,
      onClose: (secId, rowId, direction) => {
        if (this.state.activeRowKey != null) {
          this.setState({activeRowKey: null});
        }
      },
      onOpen: (secId, rowId, direction) => {
        this.setState({activeRowKey: this.props.item.key});
      },
      right: [
        {
          onPress: () => {
            const deletingRow = this.state.activeRowKey;
            Alert.alert(
              'Alert',
              'Are you sure you want to delete ?',
              [
                {
                  text: 'No',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {
                  text: 'Yes',
                  onPress: () => {
                    flatListData.splice(this.props.index, 1);
                    //Refresh FlatList !
                    this.props.parentFlatList.refreshFlatList(deletingRow);
                  },
                },
              ],
              {cancelable: true},
            );
          },
          text: 'Delete',
          type: 'delete',
        },
      ],
      rowId: this.props.index,
      sectionId: 1,
    };
    return (
      <Swipeout {...swipeSettings}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
          }}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: this.props.index % 2 == 0 ? '#fff' : '#fff',
              // backgroundColor: 'mediumseagreen'
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                height: 100,
              }}>
              <Text style={styles.flatListItem}>{this.props.item.name}</Text>
            </View>
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: 'white',
            }}></View>
        </View>
      </Swipeout>
    );
  }
}
const styles = StyleSheet.create({
  flatListItem: {
    padding: wp('4%'),
    fontSize: RF(16),
    color: BLACK_SHADOW,
  },
  footer: {
    width: wp('10%'),
    height: hp('5%'),
    marginHorizontal: wp('7%'),
    marginTop: hp('0.8%'),
  },
  footer1: {
    color: '#fff',
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
    marginHorizontal: wp('5%'),
  },
});

export default class BasicFlatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deletedRowKey: null,
    };
  }
  refreshFlatList = (deletedKey) => {
    this.setState((prevState) => {
      return {
        deletedRowKey: deletedKey,
      };
    });
  };
  render() {
    return (
      <View>
        <View
          style={{
            width: wp('100%'),
            height: hp('100%'),
            backgroundColor: '#fff',
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                height: hp('10%'),
                width: wp('100%'),
                backgroundColor: 'rgba(172,208,132,1)',

                padding: wp('5%'),
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('SecondPage');
                }}>
                <Image
                  source={require('../../../assets/Images/vector_smart_object.png')}
                  style={{
                    width: wp('5.5%'),
                    height: hp('4%'),
                    marginHorizontal: wp('2%'),
                  }}
                />
              </TouchableOpacity>
              <View
                style={{
                  alignSelf: 'center',
                  height: hp('10%'),
                  width: wp('80%'),
                  justifyContnet: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: hp('3.5%'),
                    color: '#fff',
                    marginVertical: hp('2.5%'),
                  }}>
                  Notification
                </Text>
              </View>
            </View>
          </View>
          <View style={{flex: 1}}>
            <FlatList
              data={flatListData}
              renderItem={({item, index}) => {
                //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                return (
                  <FlatListItem
                    item={item}
                    index={index}
                    parentFlatList={this}></FlatListItem>
                );
              }}></FlatList>
          </View>
        </View>
      </View>
    );
  }
}
