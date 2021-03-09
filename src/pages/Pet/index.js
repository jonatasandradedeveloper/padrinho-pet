/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {FlatList, View, Text} from 'react-native';
import {useNavigation, useRoute} from "@react-navigation/native";

import {
  Container,
  Content,
  Picture,
  Name,
  Information,
  Icon,
  TextInformation,
  ButtonAdote,
  TextAdote,
  Shared,
  InfoPet,
  Age,
  ContentAvatar,
  Avatar,
  TextDescription,
  TextGroomsmen,
} from './styles';

import Share from '../../assets/Icons/share.png';
import Location from '../../assets/Icons/placeholder.png';
import Video from '../../assets/Icons/play-button.png';

export default function Pet() {
  const navigation = useNavigation();
  const route = useRoute();

  const id = route.params.id;
  const name = route.params.name;
  const age = route.params.age;
  const sex = route.params.sex;
  const description = route.params.description;
  const image = route.params.image;
  const company = route.params.company;
  const groomsmen = route.params.groomsmen;
  console.log(groomsmen);

  return (
    <Container>
      <Content key={id}>
        <Picture style={{resizeMode: 'cover'}} source={{uri: image}} />
        <InfoPet>
          <Name>{name}</Name>
          <Age>{age}</Age>
        </InfoPet>
      </Content>
      <Information>
        <Shared>
          <Icon source={Share} />
        </Shared>
        <Shared>
          <Icon source={Location} />
        </Shared>
        <Shared>
          <Icon source={Video} />
        </Shared>
        <TextInformation numberOfLines={1}>{company}</TextInformation>
      </Information>

      <TextDescription numberOfLines={3}>
        {description}
      </TextDescription>

      {groomsmen == '' ? (
        <Text></Text>
      ) : (
        <TextGroomsmen>Meus Padrinhos</TextGroomsmen>
      )}

      {groomsmen === '' ? (
        <View></View>
      ) : (
        <FlatList
            horizontal={true}
            data={groomsmen}
            style={{marginLeft: 20, marginBottom: 20}}
            renderItem={({ item }) => (
              <ContentAvatar>
                <Avatar style={{resizeMode: 'cover'}} source={{uri: item.images}} />
              </ContentAvatar>
            )}
        />
      )}

      <ButtonAdote onPress={()=>navigation.navigate('SignIn', {
        image: image,
      })}>
        <TextAdote>Seja Meu Padrinho</TextAdote>
      </ButtonAdote>
    </Container>
  );
}
