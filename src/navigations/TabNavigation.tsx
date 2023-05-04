import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Intro from '../screen/intro/Index';
import Login from '../screen/login/Index';
import Register from '../screen/register/Index';
import ForgotPassword from '../screen/forgotPassword/Index';
import Dashboard from '../screen/dashboard/Index';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = ( ) => {
  return (
    <Tab.Navigator
      initialRouteName="CompanyDashboard"
      backBehavior="initialRoute"
    >
      <Tab.Screen name="dashboard" component={Dashboard} options={{headerShown:false}} />
      <Tab.Screen name="login" component={Login} options={{headerShown:false}} />
    </Tab.Navigator>
  );
}

const AppNavigation = () => {
	return (
		<Stack.Navigator>
      
      <Stack.Screen
        name="intro"
        component={Intro}
        options={{title: 'intro', headerShown:false}}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{title: 'Register', headerShown:false}}
      />
      <Stack.Screen
        name="forgotPassword"
        component={ForgotPassword}
        options={{title: 'Forgot Password', headerShown:false}}
      />
      <Stack.Screen
        name="Main"
        component={TabNavigation}
        options={{title: 'intro', headerShown:false}}
      />
    </Stack.Navigator>
	);
}

export default AppNavigation;