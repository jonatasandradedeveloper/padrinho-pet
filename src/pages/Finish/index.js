import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

import {
  Container,
  Title,
  Content,
  ImagePet,
  TextShare,
  ContentIcons,
  Icon,
  TitleLogo,
  Grup,
  Logo,
} from './styles';

import Shared from '../../assets/Icons/share.png';
import Facebook from '../../assets/Icons/facebook.png';
import Whatsapp from '../../assets/Icons/whatsapp.png';
import Love from '../../assets/Icons/love.png';

export default function Finish({navigation}) {
  const route = useRoute();
  const image = route.params.image;

  return (
    <Container>
      <Content>
        <Grup>
          <Logo source={Love} />
          <TitleLogo>Padrinho Pet</TitleLogo>
        </Grup>

        <Title>Obrigado por se tornar meu Padrinho</Title>
        <ImagePet style={{resizeMode: 'cover'}} source={{uri: image}} />
        <TextShare>Compartilhe nas redes socias</TextShare>

        <ContentIcons>
          <Icon source={Shared} />
          <Icon source={Facebook} />
          <Icon source={Whatsapp} />
        </ContentIcons>
      </Content>
    </Container>
  );
}
