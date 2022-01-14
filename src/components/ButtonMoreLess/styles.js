import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

export const Container = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
`;

export const ButtonLess = styled.TouchableOpacity`

`;

export const IconLess = styled(AntDesign).attrs({
    name: 'minuscircle',
    size: 20,
    color: '#fff',
})``;


export const Number = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular_400};
    color: ${({ theme }) => theme.colors.secondary};
`;

export const ButtonMore = styled.TouchableOpacity``;

export const IconMore = styled(AntDesign).attrs({
    name: 'pluscircle',
    size: 20,
    color: '#fff',
})``;
