import React from 'react';
import { Container, Title } from './styles';

export function Button({text, ...rest}){
    return (
        <Container {...rest}>
            <Title>{text}</Title>
        </Container>
    )
}