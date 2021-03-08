import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

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
} from './styles';

export default function index({navigation}) {
  const route = useRoute();

  const image = route.params.image;

  return (
    <Container>
      <Content>
        <Title>Padrinho Pet</Title>
        <Input placeholderTextColor="#ccc" placeholder="Digite seu Email" />
        <Input
          placeholderTextColor="#ccc"
          placeholder="Digite sua Senha"
          secureTextEntry={true}
        />

        <Continue onPress={() => navigation.navigate('Plans', {image: image})}>
          <TextBtn>Continuar</TextBtn>
        </Continue>

        <Facebook>
          <TextBtn>Facebook</TextBtn>
        </Facebook>

        <Google>
          <TextBtn>Google</TextBtn>
        </Google>

        <Register onPress={() => navigation.navigate('SignUp')}>
          <TextRegister>Não possui conta? Clique aqui!</TextRegister>
        </Register>
      </Content>
    </Container>
  );
}
