
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { LIGHT_BROWN, BLACK_ONE, WHITE_ONE, LIGHT_GREEN, BORDER_GREY } from '../../global/Colors';
import { RF } from '@Global/Responsive';
import { ROBOTO_BOLD, ROBOTO_REGULAR, SANS_PRO_REGULAR, Perpetua_Bold, Perpetua } from '../../global/FontFamilies';
const { height, width } = Dimensions.get('window');
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
    containerLayout: {
        backgroundColor: WHITE_ONE,
        // width,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
     
    },
    defaultText: {
        fontSize: RF(14),
        fontFamily: ROBOTO_REGULAR,
        color: LIGHT_BROWN
    },
    header: {
        height: 60,
        width: '100%',
        backgroundColor: 'rgba(172,208,132,1)',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      },
      back: {
        width: 30,
        height: 30,
      },
    referralimageview: {
        borderWidth: 0.5,
        borderColor: BORDER_GREY,
        marginVertical: 10,
        height: height * 0.25,
        width: width * 0.9,
        alignSelf: 'center',
    },



})