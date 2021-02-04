
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { LIGHT_BROWN, BLACK_ONE, WHITE_ONE, LIGHT_GREEN, BORDER_GREY } from '../../../global/Colors';
import { RF } from '@Global/Responsive';
import { ROBOTO_BOLD, ROBOTO_REGULAR, SANS_PRO_REGULAR, Perpetua_Bold, Perpetua } from '../../../global/FontFamilies';
const { height, width } = Dimensions.get('window');
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
    containerLayout: {
        backgroundColor: WHITE_ONE,
        // width,
        flex: 1
        // justifyContent: 'flex-start',
        // alignItems: 'center',
    },
    defaultText: {
        fontSize: RF(14),
        fontFamily: ROBOTO_REGULAR,
        color: LIGHT_BROWN
    },
    referralimageview: {
        borderWidth: 0.5,
        borderColor: BORDER_GREY,
        marginVertical: 10,
        // height: height * 0.25,
        width: width * 0.9,
        paddingVertical:10,
        alignSelf: 'center',
       
    },
    btnLayout: {
        backgroundColor: LIGHT_GREEN,
        borderRadius: width * 0.2,
        width: width * 0.8,
        height: width * 0.12,
        justifyContent: "space-evenly",
        // alignItems: "center",
        flexDirection: "row",
        alignSelf: "center",
        // paddingHorizontal: 28,
        // paddingVertical: 8,
      },
      btnNameView: {
        justifyContent: 'center',
        height: width * 0.12,
        alignItems:"center",
        width: width * 0.6,
      },
      btnTxt: {
        // marginTop: "7%",
        right:8,
        fontSize: RF(18),
        color: WHITE_ONE,
        fontFamily: ROBOTO_BOLD,
      },

})