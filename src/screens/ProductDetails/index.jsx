import React, {useContext} from 'react';
import { BackButton } from '../../components/BackButton';
import { Alert } from 'react-native';
import {
    Container,
    ImgContainer,
    Image,
    InfoContainer,
    Title,
    Seller,
    Description,
    Footer,
    Price,
    Button,
    ButtonTitle,
    BackButtonContainer,
} from './styles';
import { StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CartContext } from '../../context/CartContext';

export function ProductDetails({route, navigation}) {
    const { addToCart } = useContext(CartContext);

    function handleAddToCart() {
        try {
            addToCart(route.params.item);
            navigation.navigate('Cart');
        } catch (error) {
            console.log(error);
            Alert.alert('Erro', 'Não foi possível adicionar o produto ao carrinho');
        }
    }

    return (
        <Container>
            <StatusBar
                barStyle="dark-content"
            />
            <ImgContainer>
                <BackButtonContainer>
                    <BackButton />
                </BackButtonContainer>
                <Image
                    source={route.params.item.image}
                />
            </ImgContainer>
            <InfoContainer>
                <Title>
                    {route.params.item.title}
                </Title>
                <Seller>Por vendedor</Seller>
                <Description>
                    {route.params.item.description}
                </Description>
                <Footer>
                    <Price>R$ {route.params.item.price}</Price>
                    <Button
                        onPress={handleAddToCart}
                    ><ButtonTitle>Adicionar ao carrinho</ButtonTitle></Button>
                </Footer>
            </InfoContainer>
        </Container>
    );
}