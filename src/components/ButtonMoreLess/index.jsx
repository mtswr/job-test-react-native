import React, { useState, useEffect } from 'react';

import {
    Container,
    ButtonLess,
    IconLess,
    Number,
    ButtonMore,
    IconMore,
} from './styles';

export function ButtonMoreLess(){
    const [number, setNumber] = useState(0);
    
    useEffect(() => {
        setNumber(0);
    }, [
        number,
    ]);

    function handleClickLess(){
        setNumber(number - 1);
    }
    function handleClickMore(){
        setNumber(number + 1);
    }

    return (
        <Container>
            <ButtonLess
                onClick={handleClickLess}
            >
                <IconLess />
            </ButtonLess>
            <Number>{number}</Number>
            <ButtonMore
                onClick={handleClickMore}
            >
                <IconMore />
            </ButtonMore>
        </Container>
    );
}