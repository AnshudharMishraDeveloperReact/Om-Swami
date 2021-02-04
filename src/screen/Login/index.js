import React, {useState, useEffect, useRef} from 'react';
import {Dimensions, Platform, Alert} from 'react-native';
import {Container} from '../../components/Containers/index';

import {
  logo,
  banner_signup,
  checked_box,
  unchecked_box,
  tw_img,
  mail_img,
  fb_img,
} from '@Image/Icon';
import {
  AppView,
  AppText,
  AppImage,
  Touchable,
  BottomSheet,
  SilentTouchable,
} from '../../components/Atoms';
import {ShortButton, SubmitButton, Card, Input} from '@Component/Molecules';
import styles from './style';
import {RF, wp, hp} from '../../global/Responsive';

import {handleValidations} from './validate';

const {height, width} = Dimensions.get('window');
// import { AppleButton, appleAuth, AppleAuthRequestOperation } from '@invertase/react-native-apple-authentication';

const index = ({navigation}) => {
  const refBottomSheet = useRef();

  const [errortxtEmail, setEmailError] = useState(null);
  const [errortxtPassword, setPasswordError] = useState(null);
  const [remember, setremember] = useState(false);
  let [inbuiltstate, setState] = useState({
    email: '',
    emailError: '',
    emailStatus: false,
    password: '',
    passwordStatus: false,
    passwordError: '',
  });

  const handlevalidate = async (text, type) => {
    let status = `${type}Status`;
    let errorText = `${type}Error`;
    let resp = handleValidations(text, type);
    await setState({
      ...inbuiltstate,
      [type]: resp.value,
      [errorText]: resp.errorText,
      [status]: resp.status,
    });
  };

  



  return (
    <Container
      Containerlayout={[styles.containerLayout]}
      scrollable
      header={false}>
      <AppView style={[styles.mainLayout]}>
        <AppView style={[styles.logoLayout]}>
          <AppImage source={logo} style={[styles.logo]} resizeMode="contain" />
        </AppView>
        <Card cardContainer={styles.adjustCard}>
          <AppView style={[styles.cardHeader]}>
            <AppText style={[styles.cardHeaderTxt]}>{'Sign_in'}</AppText>
          </AppView>
          <AppView
            style={
              inbuiltstate.emailError === ''
                ? {marginVertical: hp(1)}
                : {marginTop: hp(1)}
            }>
            <Input
              onChangeText={(text) => handlevalidate(text, 'email')}
              errortext={inbuiltstate.emailError}
              placeholder={'Email'}
              keyboardType="email-address"
              value={inbuiltstate.email.trim()}
              maxLength={45}
            />
          </AppView>
          <AppView
            style={
              inbuiltstate.passwordError === ''
                ? {marginVertical: hp(1)}
                : {marginTop: hp(1)}
            }>
            <Input
              secure={true}
              placeholder={'Password'}
              errortext={errortxtPassword}
              value={inbuiltstate.password.trim()}
              onChangeText={(text) => handlevalidate(text, 'password')}
              errortext={inbuiltstate.passwordError}
            />
          </AppView>

          <AppView style={[styles.signInActionsView]}>
            <Touchable
              style={[styles.forgotPasswordLayout]}
              onPress={() => {
                navigation.navigate('ForgotPassword');
              }}>
              <AppText style={[styles.forgotPasswordtxt]}>
                {'Forgot_Password'}
              </AppText>
            </Touchable>
          </AppView>

          <AppView style={[styles.btnView]}>
            <SubmitButton
              btnLayout={{width: wp(85)}}
              btnTxt={{fontSize: RF(17)}}
              // nameLayout={{ alignItems: 'center', paddingLeft: 22 }}
              name={'Continue'}
              // enableImgLeft
              enableImgRight
              source_one={mail_img}
              onPress={() => {
              navigation.navigate('SecondPage');
            }}
              // source_two={}
            />
          </AppView>
        </Card>
        <AppView style={[styles.alreadyAMemberLayout]}>
          <AppView style={[styles.alreadyTxtLayout]}>
            <AppText style={[styles.alreadyTxt]}>{'Dont_have_account'}</AppText>
          </AppView>
          <SilentTouchable
            onPress={() => {
              navigation.navigate('Signup');
            }}>
            <AppText style={[styles.signInTxt]}>{'Join_now'}</AppText>
          </SilentTouchable>
        </AppView>
      </AppView>
    </Container>
  );
};

export default index;
