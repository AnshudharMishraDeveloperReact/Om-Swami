// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const App = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/*Top Large Image */}
      <Image
        source={require('./src/assets/Images/profilePicture.png')}
        style={styles.sideMenuProfileIcon}
      />
      <Text style={styles.sideMenuProfileIcon1}>{'Danials Samson'}</Text>
      <Text style={styles.sideMenuProfileIcon2}>{'2418DA78UPJKG'}</Text>

      <DrawerContentScrollView
        style={{
          marginTop: hp('2%'),
        }}>
        <View style={styles.customItem}>
          <View style={styles.customItem1}>
            <Image
              source={require('./src/assets/Images/activehome.png')}
              style={styles.iconStyle}
            />
          </View>
          <TouchableOpacity
            style={styles.customItem2}
            onPress={() => {
              navigation.navigate('Booking');
            }}>
            <Text>Home</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.customItem}>
          <View style={styles.customItem1}>
            <Image
              source={require('./src/assets/Images/different-squares.png')}
              style={styles.iconStyle}
            />
          </View>
          <TouchableOpacity
            style={styles.customItem2}
            onPress={() => {
              navigation.navigate('Favrautes');
            }}>
            <Text>All Categories</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.customItem}>
          <View style={styles.customItem1}>
            <Image
              source={require('./src/assets/Images/search.png')}
              style={styles.iconStyle}
            />
          </View>
          <TouchableOpacity
            style={styles.customItem2}
            onPress={() => {
              navigation.navigate('Search');
            }}>
            <Text>Search</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.customItem}>
          <View style={styles.customItem1}>
            <Image
              source={require('./src/assets/Images/shopping-cart1.png')}
              style={styles.iconStyle}
            />
          </View>
          <TouchableOpacity
            style={styles.customItem2}
            onPress={() => {
              navigation.navigate('Mycart');
            }}>
            <Text>MyCart</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.customItem}>
          <View style={styles.customItem1}>
            <Image
              source={require('./src/assets/Images/vectorSmartObject.png')}
              style={styles.iconStyle}
            />
          </View>
          <TouchableOpacity
            style={styles.customItem2}
            onPress={() => {
              navigation.navigate('Notification');
            }}>
            <Text>Notification</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.customItem}>
          <View style={styles.customItem1}>
            <Image
              source={require('./src/assets/Images/phone.png')}
              style={styles.iconStyle}
            />
          </View>
          <TouchableOpacity
            style={styles.customItem2}
            onPress={() => {
              navigation.navigate('Contactus');
            }}>
            <Text>Contact Us</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.customItem}>
          <View style={styles.customItem1}>
            <Image
              source={require('./src/assets/Images/contractIcon.png')}
              style={styles.iconStyle}
            />
          </View>
          <TouchableOpacity
            style={styles.customItem2}
            onPress={() => {
              navigation.navigate('TandC');
            }}>
            <Text>Term and Condition</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.customItem}>
          <View style={styles.customItem1}>
            <Image
              source={require('./src/assets/Images/contractIcon.png')}
              style={styles.iconStyle}
            />
          </View>
          <TouchableOpacity
            style={styles.customItem2}
            onPress={() => {
              navigation.navigate('Privacypolicy');
            }}>
            <Text>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.customItem}>
          <View style={styles.customItem1}>
            <Image
              source={require('./src/assets/Images/4Db97970477F629244Bc5584Fdc00C97.png')}
              style={styles.iconStyle}
            />
          </View>
          <TouchableOpacity
            style={styles.customItem2}
            onPress={() => {
              navigation.navigate('AboutUs');
            }}>
            <Text>About Us</Text>
          </TouchableOpacity>
        </View>
        <DrawerItem
          label="Visit Us"
          onPress={() => Linking.openURL('https://aanaxagorasr.com/')}
        />
      </DrawerContentScrollView>
      <Text
             onPress={() => Linking.openURL('https://aanaxagorasr.com/')}
        style={{
          fontSize: 16,
          textAlign: 'center',
          color: 'grey',
        }}>
        Developed by
      </Text>
      <Text
             onPress={() => Linking.openURL('https://aanaxagorasr.com/')}
        style={{
          fontSize: 16,
          textAlign: 'center',
          color: 'grey',
        }}>
        www.aanaxagorasr.com
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
    marginTop: hp('2%'),
  },
  sideMenuProfileIcon1: {
    fontSize: hp('2.5%'),
    alignSelf: 'center',
    marginTop: hp('2%'),
    color: 'rgba(172,208,132,1)',
  },
  sideMenuProfileIcon2: {
    fontSize: hp('2%'),
    alignSelf: 'center',
    marginTop: hp('0.5%'),
    color: '#000',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('60%'),
    height: hp('5%'),
    marginVertical: hp('0.5%'),
  },
  customItem1: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('15%'),
    height: hp('5%'),
  },
  customItem2: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: wp('40%'),
    height: hp('5%'),
  },
});

export default App;
