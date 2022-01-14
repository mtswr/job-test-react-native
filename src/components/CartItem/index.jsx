import React from 'react';
import { ButtonMoreLess } from '../ButtonMoreLess';

import {
    Container,
    Content,
    Image,
    ProductInfo,
    ProductName,
    ProductPrice,
    ButtonContainer,
    DeleteItemButton,
    Icon,
} from './styles';

import { useNavigation } from '@react-navigation/native';

export function CartItem({title, price, image}) {
    return (
        <Container>
            <Content>
                <Image
                    source={image}
                />
            </Content>
            <ProductInfo>
                <ProductName>
                    {title}
                </ProductName>
                <ProductPrice>
                    R$ {price}
                </ProductPrice>
                <ButtonContainer>
                    <ButtonMoreLess />
                </ButtonContainer>
            </ProductInfo>
            <DeleteItemButton>
                <Icon />
            </DeleteItemButton>
        </Container>
    );
}