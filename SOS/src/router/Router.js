import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../components/Login/Login';
import Warning from '../components/Warning/Warning';
import SelectRole from '../components/SelectRole/SelectRole';
import InfoUser from '../components/InfoUser/InfoUser';
import UserProfile from '../components/UserProfile/UserProfile';

const Stack = createStackNavigator();

export default class Router extends React.Component{
    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator headerMode="none">
                    <Stack.Screen name="Screen_Login" component={Login} />
                    <Stack.Screen name="Screen_Warning" component={Warning} />
                    <Stack.Screen name="Screen_SelectRole" component={SelectRole} />
                    <Stack.Screen name="Screen_InfoUser" component={InfoUser} />
                    <Stack.Screen name="Screen_UserProfile" component={UserProfile} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
