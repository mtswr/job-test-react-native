import React from 'react';

import {
    Container,
    Icon,
} from './styles';
import { useNavigation } from '@react-navigation/native';

export function BackButton(){
    const navigation = useNavigation();
    function handleGoBack(){
        navigation.goBack();
    }

    return (
        <Container
            onPress={handleGoBack}
        >
            <Icon />
        </Container>    
    );
}