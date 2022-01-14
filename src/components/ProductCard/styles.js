import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons'; 

export const Container = styled.View`
    width: 100%;
    height: ${RFValue(200)}px;
    background-color: ${({ theme }) => theme.colors.input};
    
    justify-content: space-between;
    flex-direction: row;

    padding: 10px;
    border-radius: 20px;
    margin-bottom: 15px;
`;

export const ImageContent = styled.View`
    /* background-color: ${({ theme }) => theme.colors.background}; */ 
    width: ${RFPercentage(15)}px;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
`;

export const Content = styled.View`
`;

export const Image = styled.Image`
    width: 150px;
    height: 150px;
`;

export const ProductInfoContainer = styled.View`
    width: ${RFPercentage(32)}px;
    height: 150px;
    padding: 10px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(17)}px;
    font-family: ${({ theme }) => theme.fonts.bold_700};
    color: ${({ theme }) => theme.colors.primary};
`;

export const Description = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.regular_400};
    color: ${({ theme }) => theme.colors.secondary};  
`;

export const ShoppingWrapper = styled.View`
    width: ${RFPercentage(30)}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    padding: 10px;
`;

export const Price = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.regular_400};
    color: ${({ theme }) => theme.colors.success};  
`;

export const MoreInfoButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7,
})`
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 20px;

    width: ${RFPercentage(15)}px;
    height: ${RFPercentage(5)}px;

    align-items: center;
    justify-content: center;
    
`;

export const ButtonText = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.regular_400};
    color: ${({ theme }) => theme.colors.background};
`;

