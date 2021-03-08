import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  justify-content: center;
  align-content: center;
  flex: 1;
  background: #fff;
`;

export const Content = styled.ScrollView`
  top: 50px;
`;

export const Title = styled.Text`
  align-self: center;
  font-size: 30px;
  color: #333;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  margin-bottom: 30px;
`;

export const ImagePet = styled.Image`
  width: 300px;
  height: 250px;
  background: #f2f2f2;
  align-content: center;
  align-self: center;
  border-radius: 5px;
`;

export const TextShare = styled.Text`
  font-size: 18px;
  color: #333;
  margin-left: 20px;
  top: 20px;
`;

export const ContentIcons = styled.View`
  margin: 40px 20px 20px;
  flex-direction: row;
`;

export const Icon = styled.Image`
  margin-right: 20px;
`;
