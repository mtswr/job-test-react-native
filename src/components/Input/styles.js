import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TextInput)`
    padding: 16px 18px;
    color: #c3c3c3;
    background-color: #1F1E25;
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.regular_400};
    border-radius: 7px;
    margin-bottom: ${RFValue(20)}px;
`;