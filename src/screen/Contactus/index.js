import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

import Communications from 'react-native-communications';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  AppView,
  AppText,
  BottomSheet,
  SilentTouchable,
  Indicator,
  AppModal,
} from '../../components/Atoms';
const {height, width} = Dimensions.get('window');
import {RF} from '../../global/Responsive';
import {LIGHT_BROWN, BLACK_ONE, LIGHT_GREEN} from '../../global/Colors';
const App = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <AppView
        style={{
          height: height * 0.1,
          width: width * 0.8,
          // backgroundColor: 'red',
          marginTop: hp('8%'),
        }}>
        <AppView
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <AppText
            style={{
              fontSize: RF(16),
              color: BLACK_ONE,
            }}>
            We always love to hear our faimly
          </AppText>
        </AppView>
        <AppView
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <AppText
            style={{
              fontSize: RF(16),
              color: BLACK_ONE,
            }}>
            please contact through the our
          </AppText>
        </AppView>
        <AppView
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <AppText
            style={{
              fontSize: RF(16),
              color: BLACK_ONE,
            }}>
            modes.
          </AppText>
        </AppView>
      </AppView>

      <View style={styles.wide}>
        <View style={styles.wide1}>
          <TouchableOpacity
            onPress={() =>
              Communications.email(
                ['info@aanaxagorasr.com', 'info@aanaxagorasr.com'],
                null,
                null,
                'Demo Subject',
                'Demo Content for the mail',
              )
            }>
            <Image
              source={require('../../assets/Images/gmail-logo.png')}
              resizeMode="contain"
              style={styles.call}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.wide21}
          onPress={() =>
            Communications.email(
              ['info@aanaxagorasr.com', 'info@aanaxagorasr.com'],
              null,
              null,
              'Demo Subject',
              'Demo Content for the mail',
            )
          }>
          <Text style={styles.buttonTextStyle}>info@omswami.com</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.wide2}>
        <View style={styles.wide1}>
        <TouchableOpacity onPress={() => Communications.text('8929601450')}>
          <Image
            source={require('../../assets/Images/chatbot.png')}
            resizeMode="contain"
            style={styles.call}
          />
        </TouchableOpacity>
</View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.wide21}
          onPress={() => Communications.text('8929601450')}>
          <Text style={styles.buttonTextStyle}>+918929601450</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.wide2}>
        <View style={styles.wide1}>
        <TouchableOpacity
          onPress={() => Communications.phonecall('01204380777', true)}>
          <Image
            source={require('../../assets/Images/phone.png')}
            resizeMode="contain"
            style={styles.call}
          />
        </TouchableOpacity>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.wide21}
          onPress={() => Communications.phonecall('01204380777', true)}>
          <Text style={styles.buttonTextStyle}>120-4380777</Text>
        </TouchableOpacity>
      </View>

      {/* Web: web(address = null)*/}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    marginTop: hp('5.5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  wide: {
    flexDirection: 'row',
    height: height * 0.06,
    width: width * 0.8,

    marginTop: hp('5%'),
  },
  wide2: {
    flexDirection: 'row',
    height: height * 0.06,
    width: width * 0.8,

    marginTop: hp('1%'),
  },
  wide1: {
    height: height * 0.06,
    width: width * 0.2,

    alignItems: 'center',
    justifyContent: 'center',
  },
  wide21: {
    height: height * 0.06,
    width: width * 0.5,

    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  buttonTextStyle: {
    fontSize: RF(16),
    color: BLACK_ONE,
  },
  call: {
    width: wp('20%'),
    height: hp('5%'),
    marginVertical: hp('2.5%'),
  },
  call1: {
    width: wp('12%'),
    height: hp('4%'),
    marginVertical: hp('2.5%'),
  },
});
