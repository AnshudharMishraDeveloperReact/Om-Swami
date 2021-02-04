import React, {useState, useEffect} from 'react';
import {TextInput, Dimensions, StatusBar} from 'react-native';
import {Container} from '../../components/Containers/index';
import {
  AppView,
  AppText,
  AppImage,
  Touchable,
  List,
} from '../../components/Atoms';
import styles from './style';
import {
  LIGHT_GREEN,
  LIGHT_BROWN,
  BLACK_ONE,
  LIGHT_YELLOW,
  WHITE_ONE,
  BORDER_GREY,
  BLUE_LIGHT,
  GREY_TWO,
  GREY_ONE,
} from '../../global/Colors';
import {RF} from '../../global/Responsive';
const {height, width} = Dimensions.get('window');
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ROBOTO_BOLD, ROBOTO_REGULAR} from '../../global/FontFamilies';
import {copy_bord} from '../../assets/Icon';
import {giftcardlist} from '../../components/commomList';

export default Coupon = ({navigation}) => {
  return (
      
    <AppView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
      }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(172,208,132,1)"
      />
       <AppView style={styles.header}>
          <Touchable
            style={{
              width: 30,
              height: 30,
            }}
            onPress={() => {
              navigation.navigate('SecondPage');
            }}>
            <AppImage
              source={require('../../assets/Images/vector_smart_object.png')}
              style={styles.back}
              resizeMode="contain"
            />
          </Touchable>
          <AppView style={{
              width: width * 0.75,
              height: height * 0.06,
              alignItems:"center",
              justifyContent:"center"
          }}>
          <AppText style={{
              fontSize:RF(22),
              color: "#fff"
          }}>Coupon</AppText>
          </AppView>
        </AppView>
      <AppView
        style={{
          borderRadius: 8,
          flexDirection: 'row',
          width: width * 0.9,
          height: height * 0.05,
          borderColor: BORDER_GREY,
          borderWidth: 0.5,
          marginTop: hp('10%'),
        }}>
        <TextInput
          style={{
            width: width * 0.7,
            height: height * 0.05,
            paddingLeft: 10,
            alignItems: 'center',
          }}
          placeholder={'Enter code here'}
          placeholderTextColor={BORDER_GREY}></TextInput>
        <Touchable
          style={{
            borderRadius: 8,
            width: width * 0.2,
            height: height * 0.05,
            backgroundColor: LIGHT_GREEN,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <AppText style={[styles.defaultText, {color: WHITE_ONE}]}>
            {'Apply'}
          </AppText>
        </Touchable>
      </AppView>

      <AppView
        style={[
          styles.containerLayout,
          {alignItems: 'center', justifyContent: 'center', width: width * 0.9},
        ]}>
        <AppText
          style={[
            styles.defaultText,
            {fontFamily: ROBOTO_BOLD, fontSize: RF(17)},
          ]}>
          Sorry ! You don't have any coupon in your bucket.
        </AppText>
      </AppView>

      <List
        showsVerticalScrollIndicator={false}
        data={giftcardlist}
        renderItem={({item, index}) => GiftcardList({item, index})}
        keyExtractor={(item) => item.id}
      />
    </AppView>
  );
};
