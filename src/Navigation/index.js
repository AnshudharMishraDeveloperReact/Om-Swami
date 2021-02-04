import 'react-native-gesture-handler';
import * as React from 'react';
import {Dimensions, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createStackNavigator();
import Tutorial from '../screen/Tutorials/index';
import Login from '../screen/Login/index';
import ForgotPassword from './../screen/Forgotpassword/index';
import Signup from '../screen/Signup/index';
import CreateAccount from '../screen/CreateAccount/index';
import Booking from './../screen/Tab/Booking/index';
import Upcoming from '../screen/Upcoming/index';
import Notification from '../screen/Tab/Notification/index';
import Demo from '../screen/Demo/index';
import Search from '../screen/Tab/Search/index';
import Profile from '../screen/Tab/MyProfile/index';
import AboutUs from '../screen/AboutUs/index';
import Contactus from '../screen/Contactus/index';
import TandC from '../screen/TandC/index';
import PrivacyPolicy from '../screen/Privacy Policy/index'



function AuthNavigator({navigation, route}) {
  return (
    <Stack.Navigator initialRouteName="Tutorial">
      <Stack.Screen
        name="Tutorial"
        options={{headerShown: false}}
        component={Tutorial}
      />
       <Stack.Screen
        name="Login"
        options={{headerShown: false}}
        component={Login}
      />
       <Stack.Screen
        name="ForgotPassword"
        options={{headerShown: false}}
        component={ForgotPassword}
      />
      <Stack.Screen
        name="Signup"
        options={{headerShown: false}}
        component={Signup}
      />
        <Stack.Screen
        name="CreateAccount"
        options={{headerShown: false}}
        component={CreateAccount}
      />
       <Stack.Screen
        name="Booking"
        options={{headerShown: false}}
        component={Booking}
      />
       <Stack.Screen
        name="Upcoming"
        options={{headerShown: false}}
        component={Upcoming}
      />
        <Stack.Screen
        name="Notification"
        options={{headerShown: false}}
        component={Notification}
      />
        <Stack.Screen
        name="Demo"
        options={{headerShown: false}}
        component={Demo}
      />
        <Stack.Screen
        name="Search"
        options={{headerShown: false}}
        component={Search}
      />
        <Stack.Screen
        name="Profile"
        options={{headerShown: false}}
        component={Profile}
      />
       <Stack.Screen
        name="AboutUs"
        options={{headerShown: false}}
        component={AboutUs}
      />
      <Stack.Screen
        name="Contactus"
        options={{headerShown: false}}
        component={Contactus}
      />
        <Stack.Screen
        name="TandC"
        options={{headerShown: false}}
        component={TandC}
      />
       <Stack.Screen
        name="PrivacyPolicy"
        options={{headerShown: false}}
        component={PrivacyPolicy}
      />
      
      
    </Stack.Navigator>
  );
}

// const Drawer = createDrawerNavigator();
// function SideDrawer() {
//   return (

//      <Drawer.Navigator>
//       {/* <Drawer.Screen name="Login" component={Login} />
//             <Drawer.Screen name="Forgot" component={Forgot} />
//             <Drawer.Screen name="Signup" component={Signup} /> */}
//       <Drawer.Screen name="Home" component={Home} />
//       <Drawer.Screen name="ContactUs" component={ContactUs} />
//       <Drawer.Screen name="OnlinePayment" component={OnlinePayment} />
//       <Drawer.Screen name="Portfolio" component={Portfolio} />
//       <Drawer.Screen name="Service" component={Service} />
//       <Drawer.Screen name="Blog" component={Blog} />
//       <Drawer.Screen name="Logout" component={Logout} />

//     </Drawer.Navigator>

//   );
// }

function AuthToHome() {
  return (
    <NavigationContainer independent={true}>
      <AuthNavigator />
    </NavigationContainer>
  );
}
export default AuthToHome;
