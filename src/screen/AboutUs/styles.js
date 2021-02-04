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
  maincontainer: {
    height: height * 0.9,
    width: wp('100%'),
    backgroundColor: '#fff',
    // alignItems:"center",
    // justifyContent:"center"
  
  },
  imageBack: {
    width: width * 0.9,
    height: height * 0.16,
    transform: [{rotate: '180deg'}],
    zIndex: 1, // works on ios
    opacity: 0.7,
    paddingTop: '5%',
    marginLeft:wp("5%"),
    marginTop:hp("-1%")
  },
  logoLayout: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '-5%',
  },
  logo: {
    width: width * 0.4,
    height: height * 0.16,
  },
  logoLayout1: {
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  logo1: {
    width: width * 0.6,
    height: height * 0.35,
    marginLeft:("-5%")
  },
  logo2: {
    width: width * 0.15,
    height: height * 0.08,
    marginLeft:("5%")
  },
  GST: {
    width: width * 0.9,
    transform: [{rotate: '180deg'}],
    fontSize: RF(16),
    fontWeight: 'bold',
    color: '#000',
  },
  title: {
    width: width * 0.9,
    transform: [{rotate: '180deg'}],
    fontSize: RF(20),
    fontWeight: 'bold',
    color: 'red',
  },
  title1: {
    width: width * 0.9,
    fontSize: RF(20),
    fontWeight: 'bold',
    color: '#555F91',
    marginTop:("-2%"),
    marginLeft:("55%")
  },
  footer:{
    fontSize:RF(20),
   fontWeight:"bold",
   color:"#555F91",
   marginLeft:("-5%")
},
footer1:{
  fontSize:RF(20),
 color:"green",
 marginLeft:("3%")
},
footer2:{
  fontSize:RF(16),
 color:"#555F91",
 marginLeft:("18%")
},
footer3:{
  fontSize:RF(17),
 color:"#555F91",
 marginLeft:("5%"),


},
footer4:{
  fontSize:RF(17),
 color:"red",
 marginLeft:("2.5%"),
 

},
  GST1: {
    width: width * 0.9,
    fontSize: RF(16),
    fontWeight: 'bold',
    color: '#FE5E91',
    marginLeft:("20%")
  },
  GST2: {
  
    fontSize: RF(45),
    fontWeight: 'bold',
    color: '#555F91',
    marginLeft:("-6%")
  
  },
  GST3: {
  
    fontSize: RF(16),
    fontWeight: 'bold',
    color: '#000',
    marginLeft:("40%"),
    marginTop:("-3%")
  
  },
  GST4: {
  
    fontSize: RF(28),
    fontWeight: 'bold',
    color: 'green',
   
    
  
  },
  GST5: {
  
    fontSize: RF(18),
    fontWeight: 'bold',
    color: '#555F91',

    
  
  },
  GST6: {
  
    fontSize: RF(26),
    fontWeight: 'bold',
    color: '#555F91',
    marginLeft:("2%")

    
  
  },
  

  submaincontainer: {
    height: height * 0.8,
    width: width * 0.85,
    alignItems: 'center',
    borderRadius: wp('5%'),
  },
  submaincontainer1: {
    height: height * 0.06,
    width: width * 0.4,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderBottomLeftRadius: wp('2%'),
    borderTopLeftRadius: wp('2%'),
    paddingLeft: wp('5%'),
  },
  submaincontainer2: {
    height: height * 0.06,
    width: width * 0.35,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderBottomRightRadius: wp('2%'),
    borderTopRightRadius: wp('2%'),
  },
  AppText: {
    fontWeight: 'bold',
    fontSize: RF(16),
  },
});
