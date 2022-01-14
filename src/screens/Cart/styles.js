import styled from 'styled-components/native';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    flex-direction: row;
    margin-top: ${getStatusBarHeight() + 30}px;
    padding: 0 16px;
    align-items: center;
    justify-content: center;
`;

export const ScreenTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold_700};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(15)}px;    
`;

export const Content = styled.View`
    margin-top: 50px;
    padding: 0 16px;
`;

export const CartTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold_700};
    font-size: ${RFValue(15)}px;  
    color: ${({ theme }) => theme.colors.secondary}  
`;

export const OrderInfoContainer = styled.View`
    margin-top: 50px;
`;

export const OrderInfoTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold_700};
    font-size: ${RFValue(15)}px;  
    color: ${({ theme }) => theme.colors.secondary}   
`;

export const OrderInfoWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 40px;
`;

export const TotalLabel = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular_400};
    font-size: ${RFValue(15)}px;  
    color: ${({ theme }) => theme.colors.secondary};  
`;

export const TotalValue = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular_400};
    font-size: ${RFValue(15)}px;  
    color: ${({ theme }) => theme.colors.secondary}   
`;

export const BackButtonContainer = styled.View`
    position: absolute;
    left: ${RFValue(20)}px;
`;

export const Footer = styled.View`
    width: 100%;
    padding: 0 16px;
    position: absolute;
    bottom: ${getBottomSpace() + 20}px;
`;

export const Orders = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
    },
})``;