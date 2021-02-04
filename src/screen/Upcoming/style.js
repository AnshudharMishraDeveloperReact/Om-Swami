import {StyleSheet, Dimensions} from 'react-native';
import {LIGHT_BROWN, WHITE_ONE, BORDER_GREY} from '../../global/Colors';
import {RF} from '@Global/Responsive';
import {
  ROBOTO_BOLD,
  ROBOTO_REGULAR,
  ROBOTO_LIGHT,
} from '../../global/FontFamilies';
const {height, width} = Dimensions.get('window');
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {LIGHT_GREEN} from '../../global/Colors';

export default StyleSheet.create({
  containerLayout: {
    backgroundColor: WHITE_ONE,
    // width,
    flex: 1,
    // justifyContent: 'flex-start',
    // alignItems: 'center',
  },
  defaultText: {
    fontSize: RF(14),
    fontFamily: ROBOTO_REGULAR,
    color: LIGHT_BROWN,
  },
  defaultView: {
    width: width * 0,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: WHITE_ONE,
    flexDirection: 'row',
    borderRadius: 10,
    marginVertical: 8,
    borderColor: BORDER_GREY,
    borderWidth: 0.5,
  },
  flatListPage: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatListPageDesign: {
    flexDirection: 'row',
    width: wp('45%'),
    height: hp('25%'),
    borderColor: 'grey',
    borderRadius: wp('2%'),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
    marginVertical: hp('1%'),
    backgroundColor: '#fff',
    paddingTop: '2%',
    marginHorizontal: wp('2%'),
  },
  personalcare:{
      color:LIGHT_GREEN,
      fontSize: RF(16),
      fontWeight:"bold"
  },
  flatListItem: {
    fontFamily: ROBOTO_BOLD,
    fontSize: RF(18),
    marginTop: hp('1%'),
    color: LIGHT_GREEN,
    marginLeft: wp('2%'),
  },
  flatListItem1: {
    fontFamily: ROBOTO_BOLD,
    fontSize: RF(14),
    marginTop: hp('1.5%'),
    color: LIGHT_BROWN,
  },
  flatListItem2: {
    fontFamily: ROBOTO_BOLD,
    fontSize: RF(14),
    color: LIGHT_BROWN,
    marginLeft: wp('2%'),
    fontWeight: 'bold',
  },
  flatListItem3: {
    fontFamily: ROBOTO_BOLD,
    fontSize: RF(14),
    color: LIGHT_BROWN,
  },
  medicine: {
    width: wp('30%'),
    height: hp('5%'),
  },
  price: {
    width: wp('29%'),
    height: hp('5%'),
  },

  toptabview: {
    height: height * 0.09,
    width,
    alignSelf: 'center',
    borderBottomWidth: 0.4,
    borderTopWidth: 0.4,
    borderTopColor: BORDER_GREY,
    borderBottomColor: BORDER_GREY,
    // backgroundColor: "red",
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  iamge: {
    width: wp('45%'),
    height: hp('15%'),
  },
  tapView: {
    // borderWidth: 0.5,
    // borderColor: BORDER_GREY,
    width: width * 0.45,
    backgroundColor: WHITE_ONE,
    height: 45,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Buttonview: {
    width: width * 0.25,
    height: 35,
    borderWidth: 0.4,
    borderColor: BORDER_GREY,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  staticContainerLayout: {
    width,
    alignSelf: 'center',
  },
  staticHeaderTxt: {
    //'Roboto-Medium' is required instead of 'Roboto-Regular
    fontFamily: ROBOTO_BOLD,
    fontSize: RF(17),
    color: LIGHT_BROWN,
  },
  staticBodyTxt: {
    textAlign: 'justify',
    marginBottom: hp(4),
    marginTop: hp(2),
    fontFamily: ROBOTO_LIGHT,
    color: LIGHT_BROWN,
  },
  staticHeaderWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width * 0.9,
    alignSelf: 'center',
    // backgroundColor:"red"
  },

  mainContainer: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
  },
  Modalcontainer: {
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    width: wp('90%'),
    backgroundColor: 'white',
    padding: 15,
  },
});
