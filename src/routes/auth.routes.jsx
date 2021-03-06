import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const {Navigator, Screen} = createNativeStackNavigator();

import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';

// not authenticated routes 

export function AuthRoutes(){
    return(
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen name="SignIn" component={SignIn} />
            <Screen name="SignUp" component={SignUp} />
        </Navigator>
    )
}