import React, { useEffect, useState } from 'react';
import { Container, Logo, Form, CreateAcc, CreateAccText, ErrorText } from './styles';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { StatusBar } from 'react-native';
import { Alert } from 'react-native';

import { AuthContext } from '../../routes/AuthProvider';

export function SignIn() {
    const navigation = useNavigation();
    const { login } = React.useContext(AuthContext);
   
    const [email, setEmail] = useState('');
    const [emailValidError, setEmailValidError] = useState('');

    const [password, setPassword] = useState('');
    const [passwordValidError, setPasswordValidError] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const handleValidEmail = val => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (val.length === 0) {
            setEmailValidError('O campo e-mail é obrigatório');
        } else if (reg.test(val) === false) {
            setEmailValidError('E-mail inválido');
        } else if (reg.test(val) === true) {
            setEmailValidError('');
        }
    };

    const handleValidPassword = val => {
        if (val.length === 0) {
            setPasswordValidError('O campo senha é obrigatório');
        }
    };

    async function handleSubmit() {
        setIsLoading(true);
        try {
            await login(email, password);
        } catch (err) {
            Alert.alert('Erro', 'Falha na autenticação');
            setIsLoading(false);
        }

    }

    useEffect(() => {
        handleValidEmail(email);
        handleValidPassword(password);
    }, [email, password]);
    

    return (
        <Container>
            <StatusBar
                backgroundColor="transparent"
                barStyle="light-content"
                translucent
            />
            <Logo
                source={require('../../assets/logo.png')}
            />
            <Form>
                <Input
                    placeholder="E-mail"
                    placeholderTextColor="#cecece"
                    autoCorrect={false}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    labelValue={email}
                    onChangeText={value => {
                        setEmail(value);
                        handleValidEmail(value);
                    }}
                />
                {emailValidError ? <ErrorText>{emailValidError}</ErrorText> : null}
                <Input
                    placeholder="Senha"
                    placeholderTextColor="#cecece"
                    autoCorrect={false}
                    autoCapitalize="none"
                    passwordRules={true} // only works on iOS
                    secureTextEntry={true}
                    labelValue={password}
                    onChangeText={setPassword}
                />
                {passwordValidError ? <ErrorText>{passwordValidError}</ErrorText> : null}
                <Button
                    text="Entrar"
                    onPress={handleSubmit}
                    isLoading={isLoading}
                />

                <CreateAcc
                    onPress={() => { navigation.navigate('SignUp') }}
                >
                    <CreateAccText>Ainda não possui uma conta?</CreateAccText>
                </CreateAcc>
            </Form>
        </Container>
    );
}
