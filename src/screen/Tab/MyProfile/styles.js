import {StyleSheet, Dimensions} from 'react-native';
import {LIGHT_BROWN, WHITE_ONE, BORDER_GREY} from '../../../global/Colors';
import {RF} from '@Global/Responsive';
import {
  ROBOTO_BOLD,
  ROBOTO_REGULAR,
  ROBOTO_LIGHT,
} from '../../../global/FontFamilies';
const {height, width} = Dimensions.get('window');
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {LIGHT_GREEN} from '../../../global/Colors';

export default StyleSheet.create({
  containerLayout: {
    backgroundColor: WHITE_ONE,
    // width,
    flex: 1,
    // justifyContent: 'flex-start',
    // alignItems: 'center',
  },
  maincontainer:{
      height: height * 0.9,
      width:wp("100%"),
      backgroundColor:"#fff",
      alignItems:"center",
      justifyContent:"center"
  },
  submaincontainer:{
    height:height * 0.7,
    width:width* 0.85,
    backgroundColor:"#D1E7D1",
    alignItems:"center",
    // justifyContent:"center",
    borderRadius:wp("5%"),
    paddingTop:hp("2.5%")
    
  },
  submaincontainer1:{
    height:height * 0.05,
    width:width* 0.40,
    backgroundColor:"#fff",
    alignItems:"flex-start",
    justifyContent:"center",
    borderBottomLeftRadius:wp("2%"),
    borderTopLeftRadius:wp("2%"),
    paddingLeft:wp("5%")
  },
  submaincontainer2:{
    height:height * 0.05,
    width:width* 0.35,
    backgroundColor:"#fff",
    alignItems:"flex-start",
    justifyContent:"center",
    borderBottomRightRadius:wp("2%"),
    borderTopRightRadius:wp("2%")
  },
  AppText:{
      fontWeight:"bold",
      fontSize:RF(16)
  }
});
