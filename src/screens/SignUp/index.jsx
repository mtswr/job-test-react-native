import React, { useEffect, useState, useContext } from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Container, Logo, Form, CreateAcc, CreateAccText, ErrorText } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { AuthContext } from '../../routes/AuthProvider';

export function SignUp() {
    const navigation = useNavigation();
    const { register } = React.useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [emailValidError, setEmailValidError] = useState('');

    const [password, setPassword] = useState('');
    const [passwordValidError, setPasswordValidError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

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
            await register(email, password);
        } catch (err) {
            Alert.alert('Erro', 'Falha ao registrar usuário');
            setIsLoading(false);
        }

    }

    return (
        <Container>
            <Logo
                source={require('../../assets/logo.png')}
            />
            <Form>
                <Input
                    placeholder="E-mail"
                    placeholderTextColor="#cecece"
                    autoCorrect={false}
                    autoCapitalize="none"
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
                    onChangeText={setPassword}
                />
                {passwordValidError ? <ErrorText>{passwordValidError}</ErrorText> : null}
                <Input
                    placeholder="Confirmar Senha"
                    placeholderTextColor="#cecece"
                    autoCorrect={false}
                    autoCapitalize="none"
                    passwordRules={true} // only works on iOS
                    secureTextEntry={true}
                    onChangeText={setConfirmPassword}
                />
                {passwordValidError ? <ErrorText>{passwordValidError}</ErrorText> : null}
                <Button
                    text="Cadastrar"
                    onPress={handleSubmit}
                    disabled={isLoading}
                />

                <CreateAcc
                    onPress={() => { navigation.navigate('SignIn') }}
                >
                    <CreateAccText>Já possui uma conta?</CreateAccText>
                </CreateAcc>
            </Form>
        </Container>
    );
}
