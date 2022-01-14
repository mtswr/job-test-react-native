import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const {Navigator, Screen} = createNativeStackNavigator();

import { Home } from '../screens/Home';
import { ProductDetails } from '../screens/ProductDetails';
import { Cart } from '../screens/Cart';

export function AppRoutes(){
    return(
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen name="Home" component={Home} />
            <Screen name="ProductDetails" component={ProductDetails} />
            <Screen name="Cart" component={Cart} />
        </Navigator>
    )
}