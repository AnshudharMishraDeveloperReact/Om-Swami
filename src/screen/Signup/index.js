import React, {useState, useEffect, useRef} from 'react';
import {
  Platform,
  Dimensions,
  NativeModules,
  Alert,
  BackHandler,
  TextInput,
} from 'react-native';
import {Container} from '../../components/Containers/index';
import AppIntroSlider from 'react-native-app-intro-slider';
import HTML from 'react-native-render-html';
import {logo, banner_signup, tw_img, mail_img, fb_img} from '@Image/Icon';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  AppView,
  AppText,
  AppImage,
  Touchable,
  SilentTouchable,
  BottomSheet,
  AppModal,
  Indicator,
} from '../../components/Atoms';
import {SubmitButton} from '@Component/Molecules';
import styles from './style';
import {LIGHT_GREEN, BLACK_ONE, LIGHT_BROWN} from '../../global/Colors';
import {RF} from '../../global/Responsive';
import {StaticBottomSheet} from '../../components/CommonComponents/index';
import {FlatList} from 'react-native-gesture-handler';
import {
  checked_box,
  unchecked_box,
  Downarrow_icon,
  cross_icon,
} from '../../assets/Icon';
const {height, width} = Dimensions.get('window');
const cityList = ['London', 'Brimingham', 'Paris', 'North West & Yorkshire'];

export default Signup = ({navigation}) => {
  // const dispatch = useDispatch()
  const refBottomSheet = useRef();
  //   const [inbuilstate, setState] = useState({
  //     statictermcontent:""
  // })

  const [selected, setSelected] = useState(-1);
  const [termsNconStatus, setTermsNconStatus] = useState(false);
  const [temrs, settemrs] = useState(false);
  const [offers, setoffers] = useState(false);
  const [error, seterror] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const refBottomSheetStatic = useRef();
  const [On, setOn] = useState(false);
  const [Country, setCountry] = useState(false);
  const [sstate, setstate] = useState(false);
  const [City, setCity] = useState(false);
  const [isrefreshing, setisrefreshing] = useState(false);
  const [valustate, setState] = useState({
    countryvalue: 'Please select your country',
    statevalue: 'Please select your state',
    cityvalue: 'Please select your city',
    country_array: '',
    countrysearchData: '',
    loading: false,
    statictermcontent: '',
  });
  const [statelist, setstatelist] = useState({
    state_array: '',
    statesearchData: '',
  });
  const [citylist, setcitylist] = useState({
    city_array: '',
    citysearchData: '',
  });
  const handlevalidate = () => {
    if (termsNconStatus == true) {
      seterror(false);
    } else {
      seterror(true);
    }
  };

  const handleValidate = (item, index) => {
    setSelected(index === selected ? -1 : index);
    if (Country === true) {
      setSelected(-1);
      setOn(!On);
      setState({
        ...valustate,
        countryvalue: item.countryName,
      });

      setisrefreshing(!isrefreshing);
      let countryID = `countryId=${item.countryId}`;
      getStatelist(countryID);
    }
    if (sstate == true) {
      setSelected(-1);
      setState({
        ...valustate,
        statevalue: item.stateName,
      });
      setOn(!On);
      let stateID = `stateId=${item.stateId}`;
      getCitylist(stateID);
      setisrefreshing(!isrefreshing);
    }
    if (City == true) {
      setSelected(-1);
      setTermsNconStatus(true);
      seterror(false);
      setState({
        ...valustate,
        cityvalue: item.cityName,
      });
      setOn(!On);
      // AsyncStorage.setItem()

      setisrefreshing(!isrefreshing);
    }
  };

  return (
    <Container
      Containerlayout={[styles.containerLayout]}
      scrollable
      header={false}>
      {console.log('hellooo==>', valustate)}
      <AppView style={[styles.mainLayout]}>
        <AppView style={styles.headerLayout}>
          <AppView style={[styles.logoLayout]}>
            <AppImage
              source={logo}
              style={[styles.logo]}
              resizeMode="contain"
            />
          </AppView>
          <AppView style={[styles.headerTitleLayout]}>
            <Touchable>
              <AppText style={[styles.headerTxt]}>
                {'Continue as a guest'}
              </AppText>
            </Touchable>
          </AppView>
        </AppView>
        <AppView style={{
          alignItems:"center",
          justifyContent:"center",
          width:wp("100%")
        }}>
        <AppView style={[styles.bannerLayout]}>
          <AppImage source={banner_signup} style={[styles.bannerImg]} />
        </AppView>
        <AppView style={[styles.pageMsgView]}>
          <AppText style={[styles.pageMsgTxt]}>{'Glad to meet you.'}</AppText>
        </AppView>
</AppView>
        <AppView style={[styles.btnView, {}]}>
          <SubmitButton
            name="Sign up with Email"
            enableImgLeft
            btnTxt={{fontSize: RF(17)}}
            source_one={mail_img}
            onPress={() => refBottomSheet.current.open()}
          />
          <AppView
            style={[styles.alreadyAMemberLayout, {marginTop: height * 0.01}]}>
            <AppView style={[styles.alreadyTxtLayout]}>
              <AppText style={[styles.alreadyTxt]}>
                {'Already a member ?'}
              </AppText>
            </AppView>
            <SilentTouchable onPress={() => {navigation.navigate("Login");}}>
              <AppText style={[styles.signInTxt]}>{' Sign in'}</AppText>
            </SilentTouchable>
          </AppView>
        </AppView>

        <StaticBottomSheet
          adr={refBottomSheetStatic}
          title={'Terms of Use'}
          date={'Updated 23 jun 2020'}
          //  <HTML html
          body={valustate.statictermcontent}
          baseFontStyle={styles.defaultText}
          imagesMaxWidth={width * 0.9}
          //  />
          imagesMaxWidth={width * 0.9}
          understandSubmit={() => {
            refBottomSheetStatic.current.close();
            setTimeout(() => {
              refBottomSheet.current.open();
            }, 200);
          }}
        />
        <BottomSheet
          adr={refBottomSheet}
          sheetHeight={termsNconStatus && height * 0.55}
          scrollable={true}>
          <AppView style={styles.signUpContainerLayout}>
            <AppText style={styles.signUpHeaderTxt}>Select your city</AppText>

            <AppModal animationType="fade" visible={On}>
              <AppView style={[styles.mainContainer]}>
                <AppView style={[styles.Modalcontainer]}>
                  <AppView
                    style={{
                      justifyContent: 'center',
                      width: wp('80%'),
                      alignItems: 'flex-start',
                      alignSelf: 'center',
                    }}>
                    <AppView style={{width: wp('80%'), alignItems: 'flex-end'}}>
                      <Touchable onPress={() => setOn(!On)}>
                        <AppImage
                          source={cross_icon}
                          resizeMode="contain"
                          style={{width: wp(3), height: hp(2)}}
                        />
                      </Touchable>
                    </AppView>
                    <TextInput
                      style={{
                        marginVertical: wp('1%'),
                        width: wp('80%'),
                        height: hp('4%'),
                        color: BLACK_ONE,
                      }}
                      placeholder={'Search here...'}
                      placeholderTextColor={LIGHT_BROWN}></TextInput>
                  </AppView>
                </AppView>
              </AppView>
            </AppModal>
            {termsNconStatus && (
              <AppView>
                <AppView style={{flexDirection: 'row', marginVertical: 15}}>
                  <Touchable>
                    <AppImage source={temrs ? checked_box : unchecked_box} />
                  </Touchable>
                  <Touchable>
                    <AppText style={styles.signUpTermsNConditionTxt}>
                      {'Accept terms & condition'}
                    </AppText>
                  </Touchable>
                </AppView>
                <AppView style={{flexDirection: 'row', marginVertical: 15}}>
                  <Touchable>
                    <AppImage source={offers ? checked_box : unchecked_box} />
                  </Touchable>
                  <AppText style={styles.signUpTermsNConditionTxt}>
                    {
                      "If you don't want to receive exclusive offers, news and completions tick this box."
                    }
                  </AppText>
                </AppView>
              </AppView>
            )}
            {error ? (
              <AppText style={{color: 'red'}}>
                Please select a city to proceed
              </AppText>
            ) : null}
            <AppView style={{marginVertical: 15}}>
              {termsNconStatus ? (
                <SubmitButton
                  nameLayout={{
                    alignItems: 'center',
                    paddingLeft: 22,
                    paddingVertical: 5,
                  }}
                  name="Continue"
                  enableImgRight
                />
              ) : (
                <SubmitButton
                  nameLayout={{
                    alignItems: 'center',
                    paddingLeft: 22,
                    paddingVertical: 5,
                  }}
                  name="Continue"
                  onPress={() => {navigation.navigate("CreateAccount")}}
                />
              )}
            </AppView>
          </AppView>
        </BottomSheet>
      </AppView>
      <AppModal visible={valustate.loading}>
        <AppView style={[{justifyContent: 'center', flex: 1}]}>
          <Indicator size="large" color={LIGHT_GREEN} />
        </AppView>
      </AppModal>
    </Container>
  );
};
