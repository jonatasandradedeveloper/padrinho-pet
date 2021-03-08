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
} from './styles';

import Shared from '../../assets/Icons/share.png';
import Facebook from '../../assets/Icons/facebook.png';
import Whatsapp from '../../assets/Icons/whatsapp.png';

export default function Finish({navigation}) {
  const route = useRoute();
  const image = route.params.image;

  return (
    <Container>
      <Content>
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
