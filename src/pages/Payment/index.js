import React from 'react';
import {useRoute} from '@react-navigation/native';

import {
  Container,
  Title,
  Content,
  Information,
  Name,
  Type,
  Price,
  Input,
  TextFinish,
  Finish,
} from './styles';

export default function Payment({navigation}) {
  const route = useRoute();

  const name = route.params.name;
  const type = route.params.type;
  const price = route.params.price;
  const image = route.params.image;

  return (
    <Container>
      <Content>
        <Title>Comprar Planos</Title>
        <Information>
          <Name>{name}</Name>
          <Type>{type}</Type>
          <Price>R$ {price}</Price>
        </Information>

        <Input placeholderTextColor="#333" placeholder="Número do Cartão" />

        <Input placeholderTextColor="#333" placeholder="Nome do seu Banco" />

        <Input placeholderTextColor="#333" placeholder="Conta com Dígito" />

        <Input placeholderTextColor="#333" placeholder="Digite sua Agência" />

        <Finish onPress={() => navigation.navigate('Finish', {image: image})}>
          <TextFinish>Finalizar Compra</TextFinish>
        </Finish>
      </Content>
    </Container>
  );
}
