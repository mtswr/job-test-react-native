import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons'; 
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8,
})`
    background-color: ${({ theme }) => theme.colors.background};
    width: 50px;
    height: 50px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
`;

export const Icon = styled(Ionicons).attrs({
    name: 'chevron-back',
    size: 30,
    color: '#fff',
})`
`;