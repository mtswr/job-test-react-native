import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity.attrs({
        activeOpacity: 0.6,
    })`
    padding: 16px 18px;
    background-color: ${({ theme }) => theme.colors.primary};

    border-radius: 8px;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.background};
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.regular_400};
`;