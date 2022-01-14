import React from 'react';

import {
    Container,
    ImageContent,
    Image,
    ProductInfoContainer,
    Title,
    Description,
    ShoppingWrapper,
    Price,
    Content,
    MoreInfoButton,
    ButtonText,
} from './styles';
import { useNavigation } from '@react-navigation/native';

export function ProductCard({title, description, price, image, item}) {
    const navigation = useNavigation();
    return (
        <Container
            //onPress={() => navigation.navigate('ProductDetails', { item })}
        >
            <ImageContent>
                <Image 
                    source={image}
                    resizeMode="contain"    
                />
            </ImageContent>
            <Content>
                <ProductInfoContainer>
                    <Title>{title}</Title>
                    <Description>
                        {description}
                    </Description>
                </ProductInfoContainer>
                <ShoppingWrapper>
                        <Price>R$ {price}</Price>
                        <MoreInfoButton>
                            <ButtonText
                                onPress={() => navigation.navigate('ProductDetails', { item })}
                            >Ver detalhes</ButtonText>
                        </MoreInfoButton>
                </ShoppingWrapper>
            </Content>
        </Container>
    );
}