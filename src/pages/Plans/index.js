import React from 'react';
import {FlatList} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import {
  Container,
  Title,
  Content,
  Card,
  Type,
  Price,
  Name,
  ButtonBill,
  TextBill,
} from './styles';

export default function Plans({navigation}) {
  const route = useRoute();
  const image = route.params.image;

  const plans = [
    {
      id: 1,
      name: 'Bronze',
      type: '3 Mêses',
      price: '150,00',
    },
    {
      id: 2,
      name: 'Prata',
      type: '6 Mêses',
      price: '250,00',
    },
    {
      id: 3,
      name: 'Ouro',
      type: '1 Ano',
      price: '500,00',
    },
  ];
  return (
    <Container>
      <Content>
        <Title>Padrinho Pet</Title>
        <FlatList
          horizontal={true}
          style={{top: 50, height: 350}}
          data={plans}
          keyExtractor={(item, index) => toString(index)}
          renderItem={({item}) => (
            <Card>
              <Name>{item.name}</Name>
              <Type>{item.type}</Type>
              <Price>R$ {item.price}</Price>

              <ButtonBill
                onPress={() =>
                  navigation.navigate('Payment', {
                    name: item.name,
                    type: item.type,
                    price: item.price,
                    image: image,
                  })
                }>
                <TextBill>Comprar</TextBill>
              </ButtonBill>
            </Card>
          )}
        />
      </Content>
    </Container>
  );
}
