import React, { useState, useEffect, useRef } from 'react';
import { Platform, Dimensions, Alert, ActivityIndicator, BackHandler } from 'react-native';

import { Container, } from '../../components/Containers/index';



import { logo, banner_signup, checked_box, unchecked_box, tw_img, mail_img, fb_img } from "@Image/Icon"
import { AppView, AppText, AppImage, Touchable, BottomSheet, SilentTouchable, AppModal, Indicator } from '../../components/Atoms';
import { ShortButton, SubmitButton, Card, Input, } from '@Component/Molecules';

import styles from './style';

import { LIGHT_GREEN, LIGHT_BROWN, BLACK_ONE, LIGHT_YELLOW, WHITE_ONE } from '../../global/Colors';

import { RF } from "../../global/Responsive";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { handleValidations } from './validate';

const { height, width } = Dimensions.get('window');

export default ForgotPassword = ({navigation}) => {
  
  
    let [inbuiltstate, setState] =
        useState({
            email: "",
            emailError: "",
            emailStatus: false,
            loading:false,
        });
    const [remember, setremember] = useState(false)
    const [isLoading, setIsLoading] = useState(null)

   
      useEffect(() => {
       
      }, []);


    const handlevalidate = async (text, type) => {
        let status = `${type}Status`;
        let errorText = `${type}Error`;
        let resp = handleValidations(text, type)
        await setState({
            ...inbuiltstate,
            [type]: resp.value,
            [errorText]: resp.errorText,
            [status]: resp.status,
        })
    }


   
    return (
        
      <AppView style={{
          flex:1,
          backgroundColor:"#fff",
          alignItems:"center",
        //   justifyContent:"center"
      }}>
        <AppView style={styles.header}>
        <Touchable
          style={{
            width: 30,
            height: 30,
          }}
          onPress={() => {
            navigation.navigate('Login');
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
        }}>Forgot Password</AppText>
        </AppView>
      </AppView>
          <AppView style={[styles.mainLayout]}>
                <Card cardContainer={styles.adjustCard}>
                    <AppView style={[styles.cardHeader]}>
                        <AppText style={[styles.cardHeaderTxt]}>{'We are here to help you.'}</AppText>
                    </AppView>
                    <AppView style={[styles.cardHeaderMsgView]}>
                        <AppText style={[styles.cardHeaderMsgTxt]}>{'Please enter your registered email here. We will help you to retrive your password.'}</AppText>
                    </AppView>
                    <AppView style={[styles.cardHeaderMsgView]}>
                        <AppText style={[styles.cardHeaderMsgTxt]}>{"Email"}</AppText>
                    </AppView>
                    <AppView style={{ marginBottom: hp(8), }}>
                        <Input
                            placeholder={"Enter your email address"}
                            errortext={inbuiltstate.emailError}
                            onChangeText={(text) => handlevalidate(text, "email")}
                            keyboardType='email-address'
                            value={inbuiltstate.email.trim()}
                            maxLength={45}
                        />

                    </AppView>
                </Card>
                <AppView style={[styles.btnView]}>
                    
                            <SubmitButton
                                btnLayout={{ width: '95%' }}
                                btnTxt={{ fontSize: RF(18) }}
                                nameLayout={{ alignItems: 'center', paddingLeft: 22 }}
                                name='Continue'
                                // enableImgLeft
                                enableImgRight
                                source_one={mail_img}
                                // source_two={}
                                onPress={() => {navigation.navigate("Login");}}
                            // onPress={() => refBottomSheet.current.open()}
                            />
                    
                </AppView>
                <BottomSheet />
            </AppView>
            <AppModal visible={inbuiltstate.loading} >
                <AppView style={[{ justifyContent: 'center', flex: 1 },]}>
                    <Indicator size="large" color={LIGHT_GREEN} />
                </AppView>
            </AppModal>
            </AppView>
    )
}