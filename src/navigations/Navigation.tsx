import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../screen/login/Index';
import Register from '../screen/register/Index';

const Stack = createNativeStackNavigator();

const Navigation = () => {
	return (
		<NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login', headerShown:false}}
        />
				<Stack.Screen
          name="Register"
          component={Register}
          options={{title: 'Register', headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
	);
}

export default Navigation;