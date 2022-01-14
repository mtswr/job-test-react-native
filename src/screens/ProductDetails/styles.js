import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const ImgContainer = styled.View`
    background-color: ${({ theme }) => theme.colors.primary};
    height: ${RFValue(355)}px;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.Image`
    width: ${RFValue(300)}px;
    height: ${RFValue(300)}px;
`;

export const InfoContainer = styled.View`
    border-top-left-radius: 60px;
    border-top-right-radius: 60px;
    background-color: ${({ theme }) => theme.colors.background};
    padding: ${RFValue(20)}px;
    height: 100%;
`;

export const Title = styled.Text`
    font-size: ${RFValue(30)}px;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme}) => theme.fonts.bold_700};
`;
export const Seller = styled.Text`
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.colors.tertiary};
    font-family: ${({ theme}) => theme.fonts.regular_400};
    margin-top: -10px;
    margin-bottom: 10px;
`;
export const Description = styled.Text`
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.colors.secondary};
    font-family: ${({ theme}) => theme.fonts.regular_400};
`;
export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 30px;
`;

export const Price = styled.Text`
    font-size: ${RFValue(25)}px;
    color: ${({ theme }) => theme.colors.success};
    font-family: ${({ theme}) => theme.fonts.bold_700};
`;
export const Button = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8,
    })`
    background-color: ${({ theme }) => theme.colors.primary};
    width: ${RFValue(150)}px;
    height: ${RFValue(40)}px;
    border-radius: 30px;
    padding: ${RFValue(10)}px;
    align-items: center;
    justify-content: center;
`;
export const ButtonTitle = styled.Text`
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.colors.background};
`;
export const BackButtonContainer = styled.View`
    position: absolute;
    top: ${getStatusBarHeight() + RFValue(10)}px;
    left: ${RFValue(20)}px;
`;
