import React, {Component} from 'react';
import {Text, View, Dimensions} from 'react-native';
import {
  AppView,
  AppText,
  AppImage,
  Touchable,
  AppbackgraoundImage,
} from '../../components/Atoms';
const {height, width} = Dimensions.get('window');
import {logo, Slide_one} from '@Image/Icon';
import {Container} from '../../components/Containers/index';
import styles from './style';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Skip_button} from '../../assets/Icon';
import {
  LIGHT_GREEN,
  LIGHT_BROWN,
  BLACK_ONE,
  LIGHT_YELLOW,
  WHITE_ONE,
} from '../../global/Colors';

const App = ({navigation}) => {
  const slides = [
    {
      key: 1,
      title: 'आयुर्वेदिक दवा को स्वीकार करें',
      text:
        '      स्वस्थ जीवन का आधार - आयुर्वेद, आयुर्वेद को स्वीकार करें और अंग्रेजी दवाइयों के दुष्प्रभाव से बचाएं.',
      image: Slide_one,
    },
    {
      key: 2,
      title: 'आप भरोसा कर सकते हैं',
      text:
        ' आयुर्विज्ञान, विज्ञान की वह शाखा है जिसका सम्बन्ध मानव शरीर को निरोग रखने, रोग हो जाने पर रोग से मुक्त करने अथवा उसका शमन करने तथा आयु बढ़ाने से है।',
      image: Slide_one,
    },
  ];

  const _renderItem = ({item}) => {
    return (
      <AppView style={[styles.sliderLayout]}>
        <AppView style={[]}>
          <AppImage style={[styles.itemImg]} source={item.image} />
        </AppView>
        <AppView style={[styles.itemHeadingView]}>
          <AppText style={[styles.itemHeadingTxt]}>{item.title}</AppText>
        </AppView>
        <AppView style={[styles.itemDiscription]}>
          <AppText style={[styles.itemDescriptionTxt]}>{item.text}</AppText>
        </AppView>
      </AppView>
    );
  };

  return (
    <Container
      Containerlayout={[styles.containerLayout]}
      scrollable
      header={false}>
      <AppView style={[styles.logoImgView]}>
        <AppImage source={logo} style={[styles.logoImg]}
        resizeMode="contain"
         />
      </AppView>
      <AppView style={[styles.sliderLayoutContainer]}>
        <AppIntroSlider
          dotStyle={{backgroundColor: LIGHT_BROWN}}
          activeDotStyle={{backgroundColor: LIGHT_GREEN}}
          renderItem={_renderItem}
          nextLabel={false}
          doneLabel={false}
          data={slides}
          keyExtractor={(item) => item.key.toString()}
        />
      </AppView>
      <AppView style={[styles.btnView]}>
      
        <Touchable 
          onPress = {() => { navigation.navigate("Login");}}
        >
          <AppbackgraoundImage
            resizeMode="contain"
            style={styles.shortBtnLayout}
            source={Skip_button}>
            <AppText style={[styles.shortBtnTxt]}>{'Skip'}</AppText>
          </AppbackgraoundImage>
        </Touchable>
      </AppView>
    </Container>
  );
};

export default App;
