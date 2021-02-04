import React, {useState, useEffect} from 'react';
import {
  TextInput,
  Dimensions,
  Alert,
  ActivityIndicator,
  BackHandler,
} from 'react-native';
import {Container} from '../../../components/Containers/index';
import {
  AppView,
  AppText,
  AppImage,
  Touchable,
  List,
} from '../../../components/Atoms';
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
} from '../../../global/Colors';
import {hp, RF} from '../../../global/Responsive';
const {height, width} = Dimensions.get('window');
import {
  ROBOTO_BOLD,
  ROBOTO_REGULAR,
  ROBOTO_LIGHT,
} from '../../../global/FontFamilies';
import {Plusquantity, arrow_down, right_arrow} from '../../../assets/Icon';

export default Mycart = ({navigation}) => {
  const [inbuilstate, setState] = useState({
    // comment: ""
  });
  const [isrefresh, setrefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(null);
  const [cartitems, setcartitems] = useState([]);

  const GiftcardList = ({item, index}) => {
    return item.type == 'practitioner' ? (
      <AppView style={styles.referralimageview}>
        <AppView
          style={{
            alignSelf: 'center',
            width: width * 0.9,

            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <AppImage
            style={{
              width: width * 0.3,
              height: height * 0.08,
              marginLeft: 5,
            }}
            resizeMode="cover"
            source={item.image}
          />

          <AppView
            style={{
              // flexDirection: 'row',
              width: width * 0.55,
              // backgroundColor: "red",
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}>
            <AppText
              style={[
                styles.defaultText,
                {
                  fontSize: RF(15),
                  color: LIGHT_BROWN,
                  fontFamily: ROBOTO_REGULAR,
                },
              ]}>
              {item.name}
            </AppText>
            <AppText
              style={[
                styles.defaultText,
                {
                  fontSize: RF(14),
                  color: LIGHT_BROWN,
                  fontFamily: ROBOTO_LIGHT,
                  paddingVertical: 5,
                },
              ]}>
              {item.date}
            </AppText>
            <AppText
              style={[
                styles.defaultText,
                {
                  fontSize: RF(14),
                  color: LIGHT_BROWN,
                  fontFamily: ROBOTO_LIGHT,
                },
              ]}>
              {item.duration}
            </AppText>
          </AppView>
        </AppView>

        <AppView
          style={{
            width: width * 0.85,
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'space-between',
            marginTop: 5,
          }}>
          <AppText
            style={[
              styles.defaultText,
              {fontSize: RF(15), fontFamily: ROBOTO_BOLD},
            ]}>
            $ {item.cost}
          </AppText>
          <Touchable
            onPress={() => {}}
            style={{
              width: width * 0.28,
              height: 35,
              borderWidth: 0.4,
              borderColor: BORDER_GREY,
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <AppText
              style={[
                styles.defaultText,
                {
                  fontSize: RF(13),
                  color: LIGHT_BROWN,
                  fontFamily: ROBOTO_REGULAR,
                },
              ]}>
              {'Remove'}
            </AppText>
          </Touchable>
        </AppView>
      </AppView>
    ) : (
      <AppView style={styles.referralimageview}>
        <AppView
          style={{
            alignSelf: 'center',
            width: width * 0.9,

            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          {item.id == '1' ? (
            <AppView
              style={{
                width: width * 0.3,
                height: height * 0.08,
                marginLeft: 5,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <AppImage
                style={{
                  width: width * 0.1,
                  height: height * 0.08,
                  marginLeft: 5,
                }}
                resizeMode="cover"
                source={item.image}
              />
              <AppImage style={{width: 15, height: 15}} source={Plusquantity} />
              <AppImage
                style={{
                  width: width * 0.1,
                  height: height * 0.08,
                  marginLeft: 5,
                }}
                resizeMode="cover"
                source={item.attachimage}
              />
            </AppView>
          ) : (
            <AppImage
              style={{
                width: width * 0.3,
                height: height * 0.08,
                marginLeft: 5,
              }}
              resizeMode="cover"
              source={item.image}
            />
          )}
          <AppView
            style={{
              // flexDirection: 'row',
              width: width * 0.55,
              // backgroundColor: "red",
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}>
            <AppText
              style={[
                styles.defaultText,
                {
                  fontSize: RF(15),
                  color: LIGHT_BROWN,
                  fontFamily: ROBOTO_REGULAR,
                },
              ]}>
              {item.name}
            </AppText>

            <AppText
              style={[
                styles.defaultText,
                {
                  fontSize: RF(14),
                  color: LIGHT_BROWN,
                  fontFamily: ROBOTO_LIGHT,
                },
              ]}>
              {item.delivery}
            </AppText>
          </AppView>
        </AppView>

        <AppView
          style={{
            width: width * 0.85,
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'space-between',
            marginTop: 5,
          }}>
          <AppText
            style={[
              styles.defaultText,
              {fontSize: RF(15), fontFamily: ROBOTO_BOLD},
            ]}>
            $ {item.cost}
          </AppText>
          <AppView
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <AppText style={[styles.defaultText, {fontSize: RF(15)}]}>
              {'Quantity-'}
            </AppText>
            <Touchable>
              <AppImage
                style={{marginLeft: 5, width: 15, height: 15}}
                source={Plusquantity}
              />
            </Touchable>
            <AppText
              style={[styles.defaultText, {fontSize: RF(15), marginLeft: 5}]}>
              {item.Quantity}
            </AppText>
            <Touchable>
              <AppImage
                style={{marginLeft: 5, width: 15, height: 15}}
                source={Plusquantity}
              />
            </Touchable>
          </AppView>
          <Touchable
            onPress={() => {}}
            style={{
              width: width * 0.28,
              height: 35,
              borderWidth: 0.4,
              borderColor: BORDER_GREY,
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <AppText
              style={[
                styles.defaultText,
                {
                  fontSize: RF(13),
                  color: LIGHT_BROWN,
                  fontFamily: ROBOTO_REGULAR,
                },
              ]}>
              {'Remove'}
            </AppText>
          </Touchable>
        </AppView>
      </AppView>
    );
  };

  return (
    <AppView
      style={{
        flex: 1,
        backgroundColor: '#fff',
     
      }}>
      {
        <AppView>
          <AppView
            style={{
              flexDirection: 'row',
              width,
              height: height * 0.05,
              marginTop: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <AppText
              style={[
                styles.defaultText,
                {fontFamily: ROBOTO_LIGHT, fontSize: RF(12)},
              ]}>
              {'Delivered to Mr. Nayan'}
            </AppText>
            <Touchable
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <AppText
                style={[
                  styles.defaultText,
                  {
                    textDecorationLine: 'underline',
                    marginLeft: 10,
                    fontSize: RF(13),
                  },
                ]}>
                {'G-163, Aanaxa Street, 2301521'}
              </AppText>
              <AppImage
                style={{marginLeft: 5, width: 15, height: 10}}
                source={arrow_down}
              />
            </Touchable>
          </AppView>

          {isLoading == true ? (
            <ActivityIndicator size="small" color="green" />
          ) : (
            <List
              showsVerticalScrollIndicator={false}
              data={cartitems}
              renderItem={({item, index}) => GiftcardList({item, index})}
              keyExtractor={(item) => item.id}
              extraData={isrefresh}
            />
          )}

          <Touchable
        // onPress= {() => {navigation.navigate('Coupon');}}
            style={{
              width: width * 0.9,
              height: 30,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <AppText>{'Apply Coupon/Giftcard code'}</AppText>
            <AppImage style={{width: 20, height: 20}} source={right_arrow} />
          </Touchable>
          <AppView style={styles.referralimageview}>
            <AppView style={{width: width * 0.9, alignSelf: 'center'}}>
              <AppText
                style={[
                  styles.defaultText,
                  {
                    fontSize: RF(15),
                    fontFamily: ROBOTO_BOLD,
                    paddingTop: 5,
                    maxWidth: width * 0.4,
                    left: 8,
                  },
                ]}>
                {'Price Details(3 items)'}
              </AppText>
              <AppView
                style={{
                  width: width * 0.9,
                  alignSelf: 'center',
                  flexDirection: 'row',
                }}>
                <AppText
                  style={[
                    styles.defaultText,
                    {
                      textAlign: 'left',
                      fontSize: RF(15),
                      fontFamily: ROBOTO_REGULAR,
                      width: width * 0.75,
                      left: 8,
                    },
                  ]}>
                  {'Cart Total'}
                </AppText>
                <AppText
                  style={[
                    styles.defaultText,
                    {
                      textAlign: 'center',
                      fontSize: RF(15),
                      width: width * 0.15,
                    },
                  ]}>
                  $27
                </AppText>
              </AppView>
              <AppView
                style={{
                  marginTop: 10,
                  width: width * 0.9,
                  alignSelf: 'center',
                  flexDirection: 'row',
                }}>
                <AppText
                  style={[
                    styles.defaultText,
                    {
                      textAlign: 'left',
                      fontSize: RF(15),
                      fontFamily: ROBOTO_REGULAR,
                      width: width * 0.75,
                      left: 8,
                    },
                  ]}>
                  {'Coupon discount'}
                </AppText>
                <AppText
                  style={[
                    styles.defaultText,
                    {
                      textAlign: 'center',
                      fontSize: RF(15),
                      width: width * 0.15,
                    },
                  ]}>
                  $5
                </AppText>
              </AppView>
              <AppView
                style={{
                  marginTop: 10,
                  width: width * 0.9,
                  alignSelf: 'center',
                  flexDirection: 'row',
                }}>
                <AppText
                  style={[
                    styles.defaultText,
                    {
                      textAlign: 'left',
                      fontSize: RF(15),
                      fontFamily: ROBOTO_REGULAR,
                      width: width * 0.75,
                      left: 8,
                    },
                  ]}>
                  {'Tax'}
                </AppText>
                <AppText
                  style={[
                    styles.defaultText,
                    {
                      textAlign: 'center',
                      fontSize: RF(15),
                      width: width * 0.15,
                    },
                  ]}>
                  $2
                </AppText>
              </AppView>
              <AppView
                style={{
                  marginTop: 10,
                  width: width * 0.9,
                  alignSelf: 'center',
                  flexDirection: 'row',
                }}>
                <AppText
                  style={[
                    styles.defaultText,
                    {
                      textAlign: 'left',
                      fontSize: RF(15),
                      paddingTop: 8,
                      width: width * 0.75,
                      fontFamily: ROBOTO_BOLD,
                      left: 8,
                    },
                  ]}>
                  {'Total payable amount'}
                </AppText>
                <AppText
                  style={[
                    styles.defaultText,
                    {
                      textAlign: 'center',
                      fontSize: RF(15),
                      paddingTop: 8,
                      width: width * 0.15,
                      fontFamily: ROBOTO_BOLD,
                    },
                  ]}>
                  $33
                </AppText>
              </AppView>
            </AppView>
          </AppView>
          <Touchable style={[styles.btnLayout]}>
            <AppView
              style={{
                height: width * 0.1,
                height: width * 0.12,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AppText
                style={{
                  fontSize: RF(18),
                  color: WHITE_ONE,
                  fontFamily: ROBOTO_BOLD,
                  left: 6,
                }}>
                {'$33'}
              </AppText>
            </AppView>
            <AppView style={[styles.btnNameView]}>
              <AppText style={[styles.btnTxt]}>{'Place Order'}</AppText>
            </AppView>
            <AppView
              style={{
                height: width * 0.1,
                height: width * 0.12,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AppText>{''}</AppText>
            </AppView>
          </Touchable>
        </AppView>
      }
    </AppView>
  );
};
