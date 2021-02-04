import React, {useState, useEffect, useRef} from 'react';
import {Platform, Dimensions, Alert, BackHandler} from 'react-native';

import {Container} from '../../components/Containers/index';

import {mail_img} from '@Image/Icon';
import {
  AppView,
  AppText,
  BottomSheet,
  SilentTouchable,
  Indicator,
  AppModal,
} from '../../components/Atoms';
import {SubmitButton, Card, Input} from '@Component/Molecules';

import styles from './style';

import {LIGHT_GREEN} from '../../global/Colors';
import {RF} from '../../global/Responsive';
import {handleValidations} from './validate';

const {height, width} = Dimensions.get('window');

export default CreateAccount = ({navigation}) => {
  const refBottomSheet = useRef();
  const [isLoading, setIsLoading] = useState(false);
  let [inbuiltstate, setState] = useState({
    name: '',
    nameStatus: false,
    nameError: '',
    email: '',
    emailStatus: false,
    emailError: '',
    phonenumber: '',
    phonenumberStatus: false,
    phonenumberError: '',
    password: '',
    passwordStatus: false,
    passwordError: '',
    companyidStatus: false,
    companyidError: '',
    companyid: '',
    referalCodeStatus: false,
    referalCodeError: '',
    referalCode: '',
    loading: '',
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
    // console.log("resppp=>>", resp, inbuiltstate)
  };

  return (
    <Container
      Containerlayout={[styles.containerLayout]}
      scrollable
      header={false}>
      <AppView style={[styles.mainLayout]}>
        <AppView style={{marginVertical: width * 0.1}}></AppView>
        <Card style={[styles.test]}>
          <AppView style={[styles.cardHeader]}>
            <AppText style={[styles.cardHeaderTxt]}>Create Account</AppText>
          </AppView>
          <Input
            placeholder={'Enter your full name'}
            maxLength={30}
            value={inbuiltstate.name}
            onChangeText={(text) => handlevalidate(text, 'name')}
            errortext={inbuiltstate.nameError}
            keyboardType="default"
          />
          <Input
            placeholder={'Enter your email address'}
            maxLength={45}
            value={inbuiltstate.email.trim()}
            onChangeText={(text) => handlevalidate(text, 'email')}
            errortext={inbuiltstate.emailError}
          />
          <Input
            placeholder={'Enter your phone number'}
            maxLength={12}
            value={inbuiltstate.phonenumber.trim()}
            onChangeText={(text) => handlevalidate(text, 'phonenumber')}
            keyboardType="number-pad"
            errortext={inbuiltstate.phonenumberError}
          />
          <Input
            placeholder={'Enter your company Id (optional)'}
            maxLength={20}
            value={inbuiltstate.companyid.trim()}
            onChangeText={(text) => handlevalidate(text, 'companyid')}
          />
          <Input
            placeholder={'Enter your password'}
            maxLength={16}
            secure={true}
            value={inbuiltstate.password.trim()}
            onChangeText={(text) => handlevalidate(text, 'password')}
            errortext={inbuiltstate.passwordError}
          />

          <AppView
            style={{
              alignSelf: 'center',
              width: width * 0.75,
            }}>
            <AppText
              style={[
                styles.cardHeaderTxt,
                {fontSize: RF(15), paddingVertical: 10},
              ]}>
              Have a referral code?
            </AppText>
            <Input
              placeholder={'Enter referral code'}
              maxLength={20}
              value={inbuiltstate.referalCode}
              onChangeText={(text) => handlevalidate(text, 'referalCode')}
              errortext={inbuiltstate.referalCodeError}
            />
          </AppView>
        </Card>
        <AppView style={[styles.btnView]}>
          <SubmitButton
            nameLayout={{alignItems: 'center', paddingLeft: 22}}
            name="Continue"
            btnTxt={{fontSize: RF(18)}}
            enableImgRight
            source_one={mail_img}
            onPress={() => {
              navigation.navigate('Login');
            }}

          />
        </AppView>
        <AppView style={[styles.alreadyAMemberLayout]}>
          <AppView style={[styles.alreadyTxtLayout]}>
            <AppText style={[styles.alreadyTxt]}>
              {'Already a member ?'}
            </AppText>
          </AppView>
          <SilentTouchable
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <AppText style={[styles.signInTxt]}>{' Sign in'}</AppText>
          </SilentTouchable>
        </AppView>

        <BottomSheet adr={refBottomSheet}>
          <AppView style={[]}>
            <AppText>Bottom Sheet</AppText>
          </AppView>
        </BottomSheet>
      </AppView>
      <AppModal visible={inbuiltstate.loading}>
        <AppView style={[{justifyContent: 'center', flex: 1}]}>
          <Indicator size="large" color={LIGHT_GREEN} />
        </AppView>
      </AppModal>
    </Container>
  );
};
