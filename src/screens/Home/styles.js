import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: 320px;
    background-color: ${({ theme }) => theme.colors.background};    
    justify-content: flex-end;
    padding: 32px 24px;
`;

export const HeaderContent = styled.View`
    margin-bottom: 20px;
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.Text`
    font-size: ${RFValue(32)}px;
    font-family: ${({ theme}) => theme.fonts.bold_700};
    color: ${({ theme }) => theme.colors.primary};
`;

export const Subtitle = styled.Text`
    font-size: ${RFValue(17)}px;
    font-family: ${({ theme}) => theme.fonts.regular_400};
    color: ${({ theme }) => theme.colors.secondary};
`;

export const ProductList = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        padding: 21,
    },
})``;

export const TextWrapper = styled.View``;

export const LogoutButton = styled.TouchableOpacity`
    margin-top: ${RFValue(10)}px;
    height: 24px;
    width: 24px;
    border-radius: 12px;
`;

export const LogoutIcon = styled(AntDesign).attrs({
    name: 'logout',
    size: 24,
})`
    color: ${({ theme }) => theme.colors.primary};
`;

export const SearchBarContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

export const SearchWrapper = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

export const IconSearchButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8,
    })`
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;
    background-color: ${({ theme }) => theme.colors.input};
    justify-content: center;
    align-items: center;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`;

export const IconSearch = styled(FontAwesome).attrs({
    name: 'search',
    size: 22,
    color: '#fff',
})``;

export const InputSearch = styled.TextInput.attrs({
    placeholderTextColor: '#fff',
})`
    width: ${RFValue(190)}px;
    color: #c3c3c3;
    background-color: ${({ theme }) => theme.colors.input};
    font-size: ${RFValue(16)}px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
`;

export const FilterByName = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7,
    })`
    width: ${RFValue(45)}px;
    height: ${RFValue(45)}px;
    justify-content: center;
    align-items: center;
`;

export const IconFilterByName = styled(FontAwesome).attrs({
    name: 'filter',
    size: 24,
    color: '#fff',
})``;

export const FilterByDate = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7,
    })`
    width: ${RFValue(45)}px;
    height: ${RFValue(45)}px;
    justify-content: center;
    align-items: center;
`;

export const IconFilterByDate = styled(FontAwesome).attrs({
    name: 'calendar',
    size: 24,
    color: '#fff',
})``;
