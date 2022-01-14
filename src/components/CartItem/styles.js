import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons'; 
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    margin-top: 20px;
`;

export const Content = styled.View`
    width: 30%;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.Image`
    width: ${RFValue(100)}px;
    height: ${RFValue(100)}px;
`;

export const ProductInfo = styled.View`
`;

export const ProductName = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.regular_400};
    color: ${({ theme }) => theme.colors.secondary};
`;

export const ProductPrice = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.regular_400};
    color: ${({ theme }) => theme.colors.secondary};
`;

export const ButtonContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 30px;
`;

export const DeleteItemButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8,
    })`
    width: 40px;
    height: 40px;
    position: absolute;
    right: 0;
    top: 0;
    background-color: ${({ theme }) => theme.colors.secondary_ligh};
    border-radius: 50px;
    justify-content: center;
    align-items: center;
`;

export const Icon = styled(FontAwesome).attrs({
    name: 'trash',
    size: 20,
})`
    color: #cececece;
`;
