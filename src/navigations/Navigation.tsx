import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../screen/login/Index';
import Register from '../screen/register/Index';
import ForgotPassword from '../screen/forgotPassword/Index';

const Stack = createNativeStackNavigator();

const Navigation = () => {
	return (
		<NavigationContainer>
      <Stack.Navigator initialRouteName='login'>
        <Stack.Screen
          name="login"
          component={Login}
          options={{title: 'Login', headerShown:false}}
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
      </Stack.Navigator>
    </NavigationContainer>
	);
}

export default Navigation;