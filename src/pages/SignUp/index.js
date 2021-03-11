import React from 'react';
import {
  Container,
  Title,
  Input,
  Continue,
  TextBtn,
  Facebook,
  Google,
  Register,
  TextRegister,
  Content,
  TitleLogo,
  Grup,
  Logo,
} from './styles';

import Love from '../../assets/Icons/love.png';

export default function SignUp({navigation}) {
  return (
    <Container>
      <Content>
        <Grup>
          <Logo source={Love} />
          <TitleLogo>Padrinho Pet</TitleLogo>
        </Grup>

        <Input placeholderTextColor="#ccc" placeholder="Digite seu Nome" />
        <Input placeholderTextColor="#ccc" placeholder="Digite seu CPF" />
        <Input placeholderTextColor="#ccc" placeholder="Digite seu Email" />
        <Input
          placeholderTextColor="#ccc"
          placeholder="Digite sua Senha"
          secureTextEntry={true}
        />

        <Continue>
          <TextBtn>Cadastrar</TextBtn>
        </Continue>

        <Register onPress={() => navigation.navigate('SignIn')}>
          <TextRegister>Já possui conta? Clique aqui!</TextRegister>
        </Register>
      </Content>
    </Container>
  );
}
