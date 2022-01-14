import React, { useContext } from 'react';
import { StatusBar } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { CartItem } from '../../components/CartItem';
import { Button } from '../../components/Button';

import {
    Container,
    Header,
    ScreenTitle,
    Content,
    CartTitle,
    OrderInfoContainer,
    OrderInfoTitle,
    OrderInfoWrapper,
    TotalLabel,
    TotalValue,
    BackButtonContainer,
    Footer,
    Orders,
} from './styles';

import { CartContext } from '../../context/CartContext';

export function Cart(navigation) {
    const { cart } = useContext(CartContext);
    
    return (
        <Container>
            <StatusBar
                backgroundColor="transparent"
                translucent
                barStyle="light-content"
            />
            <Header>
                <BackButtonContainer>
                    <BackButton />
                </BackButtonContainer>
                <ScreenTitle>Detalhes da compra</ScreenTitle>
            </Header>
            <Content>
                <CartTitle>Meu carrinho</CartTitle>
                <Orders
                    data={cart}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => (
                        <CartItem
                            title={item.title}
                            price={item.price}
                            image={item.image}
                            quantity={item.quantity}
                        />
                    )}
                />
            </Content>

            <Footer>
                <OrderInfoContainer>
                    <OrderInfoTitle>Informações do pedido</OrderInfoTitle>
                    <OrderInfoWrapper>
                        <TotalLabel>Total</TotalLabel>
                        <TotalValue>R$ 20,00</TotalValue>
                    </OrderInfoWrapper>
                </OrderInfoContainer>
                <Button
                    text="Finalizar compra"
                />
            </Footer>
        </Container>
    );
}