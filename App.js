import 'react-native-gesture-handler';

import * as React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import FirstPage from './src/screen/Tutorials/index';
import SecondPage from './src/screen/Tab/Booking/index';
import Login from './src/screen/Login/index';
import ForgotPassword from './src/screen/Forgotpassword/index';
import Signup from './src/screen/Signup/index';
import CreateAccount from './src/screen/CreateAccount/index';
import Booking from './src/screen/Tab/Booking/index';
import Upcoming from './src/screen/Upcoming/index';
import Notification from './src/screen/Tab/Notification/index';
import Demo from './src/screen/Demo/index';
import Search from './src/screen/Tab/Search/index';
import Profile from './src/screen/Tab/MyProfile/index';
import AboutUs from './src/screen/AboutUs/index';
import Contactus from './src/screen/Contactus/index';
import TandC from './src/screen/TandC/index';
import PrivacyPolicy from './src/screen/Privacy Policy/index';
import Favrautes from './src/screen/Tab/Favrautes/index';
import Mycart from './src/screen/Drawer/Mycart/index';
import Coupon from './src/screen/Coupon/index';

// Import Custom Sidebar
import CustomSidebarMenu from './CustomSidebarMenu';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{width: 25, height: 25, marginLeft: 5}}
        />
      </TouchableOpacity>
    </View>
  );
};

const BottomTabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#fff',
          height: '10%',
        },
        labelStyle: {
          textAlign: 'center',
          fontSize: 16,
        },
      }}>
      <Tab.Screen
        name="Booking"
        component={SecondPage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={
                focused
                  ? require('./src/assets/Images/activehome.png')
                  : require('./src/assets/Images/home.png')
              }
              style={{
                height: size,
                width: size,
                borderRadius: size,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={
                focused
                  ? require('./src/assets/Images/search.png')
                  : require('./src/assets/Images/search1.png')
              }
              style={{
                height: size,
                width: size,
                borderRadius: size,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Mycart}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={
                focused
                  ? require('./src/assets/Images/shopping-cart1.png')
                  : require('./src/assets/Images/shopping-cart.png')
              }
              style={{
                height: size,
                width: size,
                borderRadius: size,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={
                focused
                  ? require('./src/assets/Images/profile-user3.png')
                  : require('./src/assets/Images/profile-user2.png')
              }
              style={{
                height: size,
                width: size,
                borderRadius: size,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function firstScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Tutorial">
      <Stack.Screen
        name="Tutorial"
        component={FirstPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
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
        name="Favrautes"
        options={{headerShown: false}}
        component={Favrautes}
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
        name="Coupon"
        options={{headerShown: false}}
        component={Coupon}
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

const getHeaderTitle = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  switch (routeName) {
    case 'Home':
      return 'Booking';
    case 'Profile':
      return 'Profile';
    case 'Search':
      return 'Search';
    case 'Cart':
      return 'Cart';
  }
};

const secondScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="SecondPage">
      <Stack.Screen
        name="Booking"
        component={BottomTabStack}
        options={({route}) => ({
          headerTitle: getHeaderTitle(route),
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#ACD084', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            marginLeft: '30%', //Set Header text style
          },
        })}
      />
    </Stack.Navigator>
  );
};

function ProfileScreen({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: 'rgba(172,208,132,1)', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          marginLeft: '30%', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

function AboutUsScreen({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="AboutUs"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: 'rgba(172,208,132,1)', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          marginLeft: '30%', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="AboutUs"
        component={AboutUs}
        options={{
          title: 'About US', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

function ContactUsScreen({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="Contact Us"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: 'rgba(172,208,132,1)', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          marginLeft: '30%', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="Contact Us"
        component={Contactus}
        options={{
          title: 'Contact Us', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

function TandCScreen({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="TandC"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: 'rgba(172,208,132,1)', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          marginLeft: '20%', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="Term and Condition"
        component={TandC}
        options={{
          title: 'Term and Condition', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}
function PPScreen({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="Privacypolicy"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: 'rgba(172,208,132,1)', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          marginLeft: '20%', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="Privacy Policy"
        component={PrivacyPolicy}
        options={{
          title: 'Privacy Policy', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}
function upScreen({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="Upcoming"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: 'rgba(172,208,132,1)', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          marginLeft: '30%', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="Upcoming"
        component={Upcoming}
        options={{
          title: 'Upcoming', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

function FavScreen({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="Favrautes"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: 'rgba(172,208,132,1)', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          marginLeft: '25%', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="Favrautes"
        component={Favrautes}
        options={{
          title: 'All Categories', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: {marginVertical: 5},
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen
          name="FirstPage"
          options={{drawerLabel: ''}}
          component={firstScreenStack}
        />
        <Drawer.Screen
          name="SecondPage"
          options={{drawerLabel: 'Home'}}
          component={secondScreenStack}
        />
        <Drawer.Screen
          name="Profile"
          options={{drawerLabel: 'Profile'}}
          component={ProfileScreen}
        />
        <Drawer.Screen
          name="AboutUs"
          options={{drawerLabel: 'About Us'}}
          component={AboutUsScreen}
        />
        <Drawer.Screen
          name="Contactus"
          options={{drawerLabel: 'Contact Us'}}
          component={ContactUsScreen}
        />
        <Drawer.Screen
          name="TandC"
          options={{drawerLabel: 'Term And Condition'}}
          component={TandCScreen}
        />
        <Drawer.Screen
          name="Privacypolicy"
          options={{drawerLabel: 'Privacy Policy'}}
          component={PPScreen}
        />
        <Drawer.Screen
          name="Upcoming"
          options={{drawerLabel: 'Upcoming'}}
          component={upScreen}
        />
        <Drawer.Screen
          name="Mycart"
          options={{drawerLabel: 'Mycart'}}
          component={Mycart}
        />
        <Drawer.Screen
          name="Favrautes"
          options={{drawerLabel: 'Favrautes'}}
          component={FavScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
