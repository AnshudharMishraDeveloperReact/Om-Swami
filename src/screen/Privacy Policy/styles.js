import {StyleSheet, Dimensions} from 'react-native';
import {LIGHT_BROWN, WHITE_ONE, BORDER_GREY, BLACK_ONE} from '../../global/Colors';
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
import { BLACK_SHADOW } from './../../global/Colors';

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
    padding: wp('5%'),
  },

  dummyText: {
 color:BLACK_SHADOW,
    fontSize: RF(16),
  },
});
