import React, {Component} from 'react';
import {Container} from '../../components/Containers/index';
import {
  AppView,
  AppText,
  Touchable,
  AppImage,
  AppbackgraoundImage,
} from '../../components/Atoms';
import styles from './styles';
import {
  LIGHT_GREEN,
  LIGHT_BROWN,
  WHITE_ONE,
  GREY_ONE,
} from '../../global/Colors';
import {hp, RF} from '../../global/Responsive';
import {notification_white} from '../../assets/Icon';
import {Dimensions, ImageBackground} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
const {height, width} = Dimensions.get('window');

export default class index extends Component {
  render() {
    return (
     <AppView 
     style={{
       flex:1,
       backgroundColor:"#fff"
     }}>
        <AppView style={[styles.maincontainer]}>
          <ScrollView>
            <AppbackgraoundImage
              source={require('../../assets/Images/image--000.jpg')}
              style={[styles.imageBack]}
              resizeMode="contain">
              <AppText style={[styles.GST]}>{' M.L. No : A-3648/04'}</AppText>
              <AppText style={[styles.GST]}>
                {'GST IN : 09AMGPK3299M1ZC'}
              </AppText>

              <AppText style={[styles.title]}>
                {' स्वस्थ जीवन का आधार - आयुर्वेद'}
              </AppText>
            </AppbackgraoundImage>
            <AppView style={[styles.logoLayout]}>
              <AppImage
                style={[styles.logo]}
                source={require('../../assets/Images/logoSy.png')}
                resizeMode="contain"
              />
              <AppText style={[styles.title1]}>{'आयुर्वेद अपनायें'}</AppText>
              <AppText style={[styles.GST1]}>
                {'  अंग्रेजी दवाइयों के दुष्प्रभाव से बचाएं.'}
              </AppText>
              <AppText style={[styles.GST2]}>{'PRODUCT LIST'}</AppText>
              <AppText style={[styles.GST3]}>{'वैद्यकिय उपयोग में'}</AppText>
            </AppView>
            <AppView style={[styles.logoLayout1]}>
              <AppImage
                style={[styles.logo1]}
                source={require('../../assets/Images/image--002.jpg')}
                resizeMode="contain"
              />
            </AppView>
       
            <AppView
              style={{
                borderBottomColor: '#FE5E91',
                borderBottomWidth: 4,
                marginVertical:("2%"),
                width:width * 0.9,
                marginHorizontal:("5%")
              }}></AppView>
         
            <AppView
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <AppText style={[styles.footer]}>
                Manufacturer & Supplier Of
              </AppText>

              <AppText style={[styles.footer]}>
                Ayuravadic & Sastrotak Medicine
              </AppText>
            </AppView>
            <AppView
              style={{
                flexDirection: 'row',
                marginTop: '2%',
              }}>
              <AppImage
                style={[styles.logo2]}
                source={require('../../assets/Images/image--017.png')}
                resizeMode="contain"
              />
              <AppView>
                <AppText style={[styles.footer1]}>
                  {' HERBS AGRO (REGISTERED)'}
                </AppText>
                <Touchable>
                  <AppText style={[styles.footer2]}>
                    {' www.herbsagro.in'}
                  </AppText>
                </Touchable>
              </AppView>
            </AppView>
            <AppText style={[styles.footer3]}>
              {'किसी भी परिवर्तन के अधिकार  हर्बल एग्रो में सुरक्षित हैं'}
            </AppText>
            <AppText style={[styles.footer4]}>
              {'किसी भी वाद के लिए न्याय केवल कासगंज (उ.प्र) ही होगा!'}
            </AppText>
            <AppView
              style={{
                borderBottomColor: '#FE5E91',
                borderBottomWidth: 4,
                marginVertical:("2%"),
                width:width * 0.9,
                marginHorizontal:("5%")
              }}></AppView>
              <AppView 
              style={{
                  alignItems:"center",
                  justifyContent:"center"
              }}>
                 <AppText style={[styles.GST4]}>{'ओम स्वामी आयुर्वेद'}</AppText>
                 <AppText style={[styles.GST5]}>{'नवरंग विहार, सहावर गेट, कासगंज (उ.प्र), भारत'}</AppText>
                 <AppText style={[styles.GST5]}>{'फोन Customer care: 09536909330'}</AppText>
                 <AppText style={[styles.GST5]}>{'बरेली मो. 07500742058 दिल्ली मो. 9313510766'}</AppText>
                 </AppView>

                 <AppView 
              style={{
                padding:("5%")
              }}>
                 <AppText style={[styles.GST5]}>{'स्थानीय-'}</AppText>
                 <AppText style={[styles.GST5]}>{'वितरक-'}</AppText>
               </AppView>
               <AppView 
              style={{
                  alignItems:"center",
                  justifyContent:"center",
                  width: width * 1,
                  height:height * 0.1,
                  backgroundColor:'#D2D8E6'
              }}>
                 <AppText style={[styles.GST6]}>{' आयुर्वेदिक व्यवसाय नहीं ,सेवा है। '}</AppText>
               </AppView>
            {/* <AppView
              style={{
                height: height * 0.01,
              }}></AppView> */}
          </ScrollView>
        </AppView>
        </AppView>
    );
  }
}
