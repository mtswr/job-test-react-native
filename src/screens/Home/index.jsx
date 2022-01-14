import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { ProductCard } from '../../components/ProductCard';

import { Button } from 'react-native';

import {
    Container,
    Header,
    HeaderContent,
    Title,
    Subtitle,
    ProductList,
    TextWrapper,
    LogoutButton,
    LogoutIcon,
    SearchBarContainer,
    IconSearchButton,
    IconSearch,
    InputSearch,
    SearchWrapper,
    FilterByName,
    FilterByDate,
    IconFilterByName,
    IconFilterByDate,
} from './styles';

import { AuthContext } from '../../routes/AuthProvider';
import { useNavigation } from '@react-navigation/native';

import products from '../../services/products';

export function Home() {
    const [list, setList ] = React.useState(products);
    const { logout } = React.useContext(AuthContext);
    const navigation = useNavigation();

    const handleOrderClickByName = (name) => {
        let newList = [...products];
        newList.sort((a, b) => (a.title > b.title)?1:(b.title > a.title)?-1:0);
        setList(newList);
    };

    const handleOrderClickByDate = (name) => {
        let newList = [...products];
        newList.sort((a, b) => (a.createdAt > b.createdAt)?1:(b.createdAt > a.createdAt)?-1:0);
        setList(newList);
    };

    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Header>
                <HeaderContent>
                    <TextWrapper>
                        <Title>Melhores suplementos</Title>
                        <Subtitle>Escolha perfeita!</Subtitle>
                    </TextWrapper>
                    <LogoutButton>
                        <LogoutIcon
                            onPress={() => logout()}
                        />
                    </LogoutButton>
                </HeaderContent>
                <SearchBarContainer>
                    <SearchWrapper>
                        <IconSearchButton>
                            <IconSearch />
                        </IconSearchButton>
                        <InputSearch />
                        <FilterByName
                            onPress={() => handleOrderClickByName()}
                        >
                            <IconFilterByName />
                        </FilterByName>
                        <FilterByDate
                            onPress={() => handleOrderClickByDate()}
                        >
                            <IconFilterByDate />
                        </FilterByDate>
                    </SearchWrapper>
                </SearchBarContainer>
            </Header>
            <ProductList
                data={list}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <ProductCard
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                        item={item}
                    />
                )}
            />
        </Container>
    );
}