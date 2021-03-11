/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList, View, Text} from 'react-native';
import {useNavigation, useRoute} from "@react-navigation/native";

import {
  Container,
  Content,
  Picture,
  Name,
  Company,
  Icon,
  TextCompany,
  ButtonAdote,
  TextAdote,
  Shared,
  Search,
  IconInput,
  Input,
  Title,
  Grup,
  Logo,
} from './styles';
import Share from '../../assets/Icons/share.png';
import SearchIcon from '../../assets/Icons/search.png';
import Love from '../../assets/Icons/love.png';

export default function index() {
  const navigation = useNavigation();

  const data = [
    {
      id: 1,
      name: 'Zeca',
      age: '3 Anos',
      sex: 'Macho',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.',
      image:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*',
      company: 'Clube dos Vira Latas',
      groomsmen: [],
    },
    // {
    //   id: 2,
    //   name: 'Marvel',
    //   age: '3 Anos',
    //   sex: 'Macho',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.',
    //   image:
    //     'https://www.petz.com.br/blog/wp-content/uploads/2020/08/cat-sitter-felino.jpg',
    //   company: 'Ong Adote Já',
    //   groomsmen: [],
    // },
    {
      id: 3,
      name: 'Pingo',
      age: '3 Anos',
      sex: 'Macho',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.',
      image:
        'https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp',
      company: 'Uipa União',
      groomsmen: [],
    },
  ];

  return (
    <Container>
      <Grup>
      <Logo source={Love} />
      <Title>Padrinho Pet</Title>
      </Grup>

      <Search>
        <Input
          placeholderTextColor="#000"
          placeholder="Digite sua Cidade ou Organização"
        />
        <IconInput source={SearchIcon} />
      </Search>

      {data.length > 0 ? (
        <FlatList
          data={data}
          keyExtractor={(item, index) => toString(index)}
          renderItem={({item}) => (
            <Content key={item.id}>
              <Picture
                style={{resizeMode: 'cover'}}
                source={{uri: item.image}}
              />
              <Name>{item.name}</Name>

              <Company>
                <Shared>
                  <Icon source={Share} />
                </Shared>
                <TextCompany numberOfLines={1}>{item.company}</TextCompany>

                <ButtonAdote onPress={() => navigation.navigate('Pet', {
                  id: item.id,
                  name: item.name,
                  age: item.age,
                  sex: item.sex,
                  description: item.description,
                  image: item.image,
                  company: item.company,
                  groomsmen: item.groomsmen,
                })}>
                  <TextAdote>Seja Meu Padrinho</TextAdote>
                </ButtonAdote>
              </Company>
            </Content>
          )}
        />
      ) : (
        <View></View>
      )}
    </Container>
  );
}
