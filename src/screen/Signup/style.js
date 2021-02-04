
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { LIGHT_BROWN, BLACK_ONE, LIGHT_GREEN, GREY_TWO } from '../../global/Colors';
import { RF } from '@Global/Responsive';
import { ROBOTO_BOLD, ROBOTO_REGULAR, VERDANA_BOLD } from '../../global/FontFamilies';
import { heightPercentageToDP as hp ,widthPercentageToDP as wp} from 'react-native-responsive-screen';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
    containerLayout: {
        // backgroundColor: "green",
        width,
        // justifyContent: 'flex-start',
        // alignItems: 'center',
    },
    mainLayout: {
        // backgroundColor: "cyan",
        width: width * 0.92,
        paddingVertical: width * 0.08
    },
    headerLayout: {
        // backgroundColor: "orange",
        flexDirection: 'row',
        alignSelf: 'center',
        width:wp ("90%"),
        justifyContent: 'space-between',
    },
    logoLayout: {
        alignSelf: 'flex-start',
        marginTop: width * 0.05,
        marginVertical: width * 0.05
    },
    logo: {
        // width:width * 0.15
        aspectRatio: 450 / 300,
        width:wp ("40%"),
        height: undefined,
    },
    headerTitleLayout: {
        // backgroundColor: "yellow",
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTxt: {
        fontSize: RF(18),
        // fontWeight: 'bold',
        color: LIGHT_BROWN,
        fontFamily:ROBOTO_BOLD
    },
    bannerLayout: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
      
        // backgroundColor:'orange'
    },
    bannerImg: {
        aspectRatio: 827 / 534,
        width: '90%',
        height: undefined,
    },
    pageMsgView: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        // backgroundColor:'red',
        width: '90%',
        alignSelf: 'center',
        paddingVertical: 12
    },
    pageMsgTxt: {
        color: BLACK_ONE,
        fontSize: RF(20),
        fontWeight: 'bold'
    },
    btnView: {
        marginVertical: 15,
        height:height*0.25,
        alignItems:"center",
        justifyContent:"center"
    },
    otherSignupTxtLayout: {
        alignItems: 'center'
    },
    orTxt: {
        fontSize: RF(14),
        color: LIGHT_BROWN,
        fontFamily:ROBOTO_REGULAR
    },
    alreadyAMemberLayout: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    alreadyTxtView: {

    },
    alreadyTxt: {
        color: LIGHT_BROWN
    },
    signInTxt: {
        fontSize: RF(15),
        color: LIGHT_GREEN
    },


    signUpContainerLayout: {
    },
    signUpHeaderTxt: {
        //'Roboto-Medium' is required instead of 'Roboto-Regular
        fontFamily: ROBOTO_BOLD,
        fontSize: RF(16),

    },
    signUpListItemContainer: {
        paddingVertical: hp(2),
        borderBottomWidth: 0.9,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: GREY_TWO,
        // backgroundColor:"red",
        width: wp("80%"),
    },
    signUpListUnselectedRadio: {
        height: 15,
        width: 15,
        borderRadius: 15 / 2,
        borderWidth: 1,
        alignSelf: 'center',
        borderColor: GREY_TWO
    },
    signUpListSelectedRadio: {
        height: 15,
        width: 15,
        borderRadius: 15 / 2,
        borderWidth: 1,
        backgroundColor: LIGHT_GREEN,
        alignSelf: 'center'
    },
    signUpTermsNConCheckBox: {
        height: 20,
        width: 20,
        borderWidth: 1
    },
    signUpTermsNConditionTxt: {
        marginHorizontal: 20
    },
    signUpText: {
        color: GREY_TWO,
        fontFamily: ROBOTO_REGULAR,
        fontSize: RF(13),
        width:wp("70%"),
     
    },
    selectview:{
    width: width * 0.9,
    alignSelf: 'center',
    borderWidth: 0.5,
    borderColor: LIGHT_BROWN,
    height: height * 0.05,
    marginVertical: hp("1%"),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.01,
    flexDirection: 'row',
    },
    mainContainer: {
        alignItems: "center",
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.8)',
        justifyContent: 'center'
    },
    Modalcontainer: {
        borderRadius: 10,
        alignItems: "center",
        alignSelf: 'center',
        width: wp("90%"),
        backgroundColor: "white",
       padding:15,
       height:hp("60%")
     

    },

})
