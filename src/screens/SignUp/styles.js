import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.colors.background};
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
`;

export const Form = styled.View`
    margin-top: ${RFValue(40)}px;
    width: 100%;
    padding: 0 ${RFValue(20)}px;
`;

export const CreateAcc = styled.TouchableOpacity`
    width: 100%;

    margin-top: ${RFValue(20)}px;

    align-items: center;
    justify-content: center;
`;

export const CreateAccText = styled.Text`
    color: ${props => props.theme.colors.primary};
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.regular_400};
`;

export const ErrorText = styled.Text`
    margin-top: -20px;
    margin-bottom: 5px;
    color: ${props => props.theme.colors.error};
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.regular_400};
`;