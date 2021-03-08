/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList, View} from 'react-native';
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
} from './styles';
import Share from '../../assets/Icons/share.png';
import SearchIcon from '../../assets/Icons/search.png';

export default function Adopted({navigation}) {
  const data = [
    {
      id: 1,
      name: 'Pitter',
      age: '3 Anos',
      sex: 'Macho',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.',
      image:
        'https://www.petz.com.br/blog/wp-content/uploads/2019/06/polivitaminico-para-caes.jpg',
      company: 'Ong Adote Já',
      groomsmen: [
        {images: 'https://www.contentwriter.com.my/wp-content/uploads/2020/09/user.png'},
        {images: 'https://www.contentwriter.com.my/wp-content/uploads/2020/09/user.png'},
        {images: 'https://www.contentwriter.com.my/wp-content/uploads/2020/09/user.png'},
        {images: 'https://www.contentwriter.com.my/wp-content/uploads/2020/09/user.png'},
        {images: 'https://www.contentwriter.com.my/wp-content/uploads/2020/09/user.png'},
        {images: 'https://www.contentwriter.com.my/wp-content/uploads/2020/09/user.png'},
        {images: 'https://www.contentwriter.com.my/wp-content/uploads/2020/09/user.png'},
        {images: 'https://www.contentwriter.com.my/wp-content/uploads/2020/09/user.png'},
        {images: 'https://www.contentwriter.com.my/wp-content/uploads/2020/09/user.png'},
        {images: 'https://www.contentwriter.com.my/wp-content/uploads/2020/09/user.png'},
        {images: 'https://www.contentwriter.com.my/wp-content/uploads/2020/09/user.png'},
        {images: 'https://www.contentwriter.com.my/wp-content/uploads/2020/09/user.png'},
        {images: 'https://www.contentwriter.com.my/wp-content/uploads/2020/09/user.png'},
      ],
    },
    {
      id: 2,
      name: 'Bug',
      age: '3 Anos',
      sex: 'Macho',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.',
      image: 'https://live.staticflickr.com/2923/14160829306_2f5fdfdb1c_b.jpg',
      company: 'Ong Adote Já',
      groomsmen: [
        {images: 'https://www.contentwriter.com.my/wp-content/uploads/2020/09/user.png'},
        {images: 'https://www.contentwriter.com.my/wp-content/uploads/2020/09/user.png'},
        {images: 'https://www.contentwriter.com.my/wp-content/uploads/2020/09/user.png'},
        {images: 'https://www.contentwriter.com.my/wp-content/uploads/2020/09/user.png'},
        {images: 'https://www.contentwriter.com.my/wp-content/uploads/2020/09/user.png'},
        {images: 'https://www.contentwriter.com.my/wp-content/uploads/2020/09/user.png'},
        {images: 'https://www.contentwriter.com.my/wp-content/uploads/2020/09/user.png'},
        {images: 'https://www.contentwriter.com.my/wp-content/uploads/2020/09/user.png'},
        {images: 'https://www.contentwriter.com.my/wp-content/uploads/2020/09/user.png'},
        {images: 'https://www.contentwriter.com.my/wp-content/uploads/2020/09/user.png'},
        {images: 'https://www.contentwriter.com.my/wp-content/uploads/2020/09/user.png'},
        {images: 'https://www.contentwriter.com.my/wp-content/uploads/2020/09/user.png'},
        {images: 'https://www.contentwriter.com.my/wp-content/uploads/2020/09/user.png'},
      ],
    },
    {
      id: 3,
      name: 'Laika',
      age: '3 Anos',
      sex: 'Macho',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.',
      image:
        'https://i.pinimg.com/236x/ef/5f/ea/ef5feaba914366055fc6ceb8ce5cdeea.jpg',
      company: 'Imaginarium',
      groomsmen: [
        {images: 'https://www.contentwriter.com.my/wp-content/uploads/2020/09/user.png'},
        {images: 'https://www.contentwriter.com.my/wp-content/uploads/2020/09/user.png'},
        {images: 'https://www.contentwriter.com.my/wp-content/uploads/2020/09/user.png'},
        {images: 'https://www.contentwriter.com.my/wp-content/uploads/2020/09/user.png'},
        {images: 'https://www.contentwriter.com.my/wp-content/uploads/2020/09/user.png'},
        {images: 'https://www.contentwriter.com.my/wp-content/uploads/2020/09/user.png'},
        {images: 'https://www.contentwriter.com.my/wp-content/uploads/2020/09/user.png'},
        {images: 'https://www.contentwriter.com.my/wp-content/uploads/2020/09/user.png'},
        {images: 'https://www.contentwriter.com.my/wp-content/uploads/2020/09/user.png'},
        {images: 'https://www.contentwriter.com.my/wp-content/uploads/2020/09/user.png'},
        {images: 'https://www.contentwriter.com.my/wp-content/uploads/2020/09/user.png'},
        {images: 'https://www.contentwriter.com.my/wp-content/uploads/2020/09/user.png'},
        {images: 'https://www.contentwriter.com.my/wp-content/uploads/2020/09/user.png'},
      ],
    },
  ];

  return (
    <Container>
      <Grup>
      <Title>Padrinho Pet</Title>
      <Search>
        <Input
          placeholderTextColor="#000"
          placeholder="Digite sua Cidade ou Organização"
        />
        <IconInput source={SearchIcon} />
      </Search>
      </Grup>
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
