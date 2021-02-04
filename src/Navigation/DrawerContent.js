import React ,{ useState, useEffect }from "react"
import {
    DrawerContentScrollView,
    DrawerItemList
} from '@react-navigation/drawer';
import { StyleSheet,Alert ,Modal ,ImageBackground} from "react-native";
// import { normalizeFont, scale, scaleHeight } from '@GlobalStyles/responsive';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
  AppView,
  AppText,
  AppImage,
  Touchable,
 
} from "../components/Atoms/index";
// import { useSelector } from 'react-redux';
// import { logo, phoneIcon, downIcon ,AppLogo } from "@Assets/Icon"
import {ProfileImage ,Home_Icon,TimeSheet_Icon,Invoice_Icon ,Logout_Icon} from "../assets/Icon"
 import { CustomLogOutModal } from '../components/Molecules/index';
import Profile from "../screens/Profile";
// import AsyncStorage from "@react-native-community/async-storage"
import {RF} from "../global/Responsive"

export function DrawerContent(props) {

    // const state = useSelector(state => state).reducer
    // const { TERMS_CONDITIONS, PRIVACY_POLICY,CONTACT_US,CHECK_ESTABLISHMENT,REPORT_ESTABLISHMENT ,HotSpots ,FEEDBACK} = state.language.COMMON_TEXT
    // const { GUEST_REPORT, EMPLOYER_REPORT,EMPLOYEE_REPORT,MY_LOCATIONS,MY_COVID,CORRECT_AN_ERROR,ABOUT_US,FAQS,COVID_SERVICES,SETTINGS } = state.language.Drawer

    // let [toggleEstab, setToggleEstab] = useState(false);
    let [isModalVisible,setModalVisible] = useState(false)

  //  const alertModal =(body,title)=>{
  //   Alert.alert(
  //       title,
  //       body,
  //     [
  //       { text: 'OK', onPress: () => console.log('OK Pressed') },
  //     ],
  //     { cancelable: false },
  //   );
  //  }

    return(
        <AppView style={{flex:1}}>
        <DrawerContentScrollView {...props}>
       
          <AppView style={styles.ImageContainer}>
          <Touchable onPress={ ()=> props.navigation.navigate("Profile") }  >
              <AppImage 
              source={ProfileImage}
              resizeMode ="contain"
              style={styles.ImageStye} 
                 ></AppImage>
                 
                 <AppText style={styles.ProfileText} >Nishtha Mishra </AppText>
                 <AppText style={ [ styles.ProfileText,{fontSize:18, } ]}>Bellerose ,NY </AppText>
                 </Touchable>
          </AppView>
          
        <Touchable  onPress={()=>props.navigation.navigate("Home")}>
          <AppView style={styles.TextContainer}>
              <AppImage source={Home_Icon} /> 
              <AppText style={styles.textStyle}>{"Home"}</AppText>
          </AppView>
          </Touchable>
          <Touchable  onPress={()=>props.navigation.navigate("TimeSheet")}>
          <AppView style={styles.TextContainer}>
          <AppImage source={Invoice_Icon} /> 
              <AppText style={styles.textStyle}>{"TimeSheet"}</AppText>
          </AppView>
          </Touchable>
          <Touchable  onPress={()=>props.navigation.navigate("Invoices")}>
          <AppView style={styles.TextContainer}>
          <AppImage source={TimeSheet_Icon} /> 
              <AppText style={styles.textStyle}>{"Invoices"}</AppText>
          </AppView>
          </Touchable>
       
          <Touchable 
           onPress={()=>setModalVisible(true)}
          >
          <AppView style={styles.TextContainer}>
          <AppImage source={Logout_Icon} /> 
         <AppText style={styles.textStyle}>{"Log Out"}</AppText>
          </AppView>
          </Touchable>
          
           <Modal transparent={true} 
           visible={isModalVisible}
           >
           <AppView
              style={{
                width: "90%",
                height: "25%",
                backgroundColor: "rgba(255,255,255,0.8)",
                marginTop: hp("35%"),
                alignSelf: "center",
                 
                borderRadius: wp("5%"),
              }}
            >
              <AppView
                style={{
                  width: wp(90),
                  alignSelf: "center",
                  height: hp("5%"),
                  marginVertical: "2%",
                  flexDirection: "row",
                }}
              >
                <AppView
                  style={{
                    width: wp(83),
                    alignSelf: "center",
                    height: hp("5%"),
                    // marginVertical: "2%",
                    justifyContent: 'center',
                  }}
                >
                  <AppText
                    style={{
                      fontSize: RF(20),
                      // fontFamily: ROBOTO_REGULAR,
                      textAlign: "center",
                      fontWeight: "bold",
          
                      color: "#090819",
                    }}
                  >
                    LOGOUT?
                  </AppText>
                </AppView>
                {/* <Touchable>
                <AppImage
                  resizeMode="contain"
                  source={require("../assets/Images/layer1.png")}
                />
                </Touchable> */}
              </AppView>
              

              <AppView
                style={{
                  borderBottomColor: "black",
                  borderWidth: .5
                }}
              />

              <AppView
                style={{
                  width: wp(90),
                  alignSelf: "center",
                  height: hp("5%"),
                  marginVertical: "10%",
                }}
              >
                <AppText
                  style={{
                    fontSize: RF(16),
                    // fontFamily: ROBOTO_REGULAR,
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#090819",
                  }}
                >
                  Are you sure want to logout?
                </AppText>
              </AppView>
              <AppView
                style={{
                  width: wp("80%"),
                  height: hp("1%"),

                   alignSelf: "center",
                  flexDirection: "row",
                }}
              >
                <Touchable
                  style={{
                    width: wp("37.5%"),
                    height: hp("6%"),
                    backgroundColor: "#090819",
                    alignSelf: "center",
                    borderRadius: wp("3%"),
                    justifyContent: 'center',
                  }}
                  onPress={()=>props.navigation.navigate("Login")}
                >
                  <AppText
                    style={{
                      fontSize: RF(20),
                      // fontFamily: ROBOTO_REGULAR,
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "white",
                      justifyContent: 'center',
                      alignSelf: 'center',
                      // marginVertical: hp("1.5%"),
                    }}
                  >
                    YES
                  </AppText>
                </Touchable>
                <Touchable
                  style={{
                    width: wp("37.5%"),
                    height: hp("6%"),

                    alignSelf: "center",
                    borderRadius: wp("3%"),
                    backgroundColor: "rgb(249, 134, 141)",

                     marginHorizontal: wp("5%"),
                  }}
                  onPress={ ()=> setModalVisible(!isModalVisible)}
                >
                  <AppText
                    style={{
                      fontSize: RF(20),
                      // fontFamily: ROBOTO_REGULAR,
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "white",
                      marginVertical: hp("1.5%"),
                    }}
                  >
                    NO
                  </AppText>
                </Touchable>
              </AppView>
            </AppView>
          {/* </ImageBackground> */}
          </Modal> 
        </DrawerContentScrollView>
        </AppView>
    );
}




  const styles = StyleSheet.create({
    textStyle:{
        color:'rgb(0,0,42)',
        fontSize: 16, 
        marginHorizontal: wp(5),
    },
    ImageContainer:{
        justifyContent: 'center',
         width:wp(70) ,
         height: hp(35),
         borderBottomWidth: 1
    },
    ImageStye:
    {
        alignSelf: 'center' ,
        height: hp(21),
    },
    TextContainer:{
        paddingHorizontal:wp(5) ,
        justifyContent: 'flex-start',
         borderBottomWidth: 1,
         borderBottomColor:'rgb(0,0,42)',
         paddingVertical:hp(2),
         flexDirection: 'row',
    },
    ProfileText:{
        textAlign:"center" ,
        alignSelf: 'center',
        color:'rgb(0,0,42)',
         fontSize: 26, 
       marginHorizontal: wp(5),
    }

})
