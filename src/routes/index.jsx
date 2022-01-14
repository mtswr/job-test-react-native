import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

import { AuthContext } from './AuthProvider';

export function Routes (){
    const { isLoggedIn } = useContext(AuthContext);
    return (
        <NavigationContainer>
            { isLoggedIn ? <AppRoutes/> : <AuthRoutes /> }
        </NavigationContainer>
    );
}