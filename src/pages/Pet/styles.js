import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background: #fff;
`;

export const Content = styled.View`
  flex-direction: column;
  background: #f2f2f2;
`;

export const Picture = styled.Image`
  width: 100%;
  height: 350px;
`;

export const Name = styled.Text`
  font-size: 38px;
  margin-left: 20px;
  color: #fff;
  font-weight: bold;
`;

export const Adote = styled.TouchableOpacity``;

export const Information = styled.View`
  justify-content: space-between;
  flex-direction: row;
  padding: 20px;
  align-content: center;
  flex: 1;
`;

export const Icon = styled.Image`
  top: 7px;
`;

export const Shared = styled.TouchableOpacity`
  flex-direction: row;
`;

export const TextInformation = styled.Text`
  top: 10px;
  font-size: 18px;
  margin-left: 15px;
`;

export const ButtonAdote = styled.TouchableOpacity`
  background: #fff;
  width: 90%;
  border-radius: 5px;
  background: #f45;
  padding: 20px;
  margin-bottom: 30px;
  align-items: center;
  align-self: center;
`;

export const TextAdote = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

export const InfoPet = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-top: -50px;
`;

export const Age = styled.Text`
  font-size: 25px;
  top: 10px;
  margin-right: 20px;
  color: #fff;
  font-weight: bold;
`;

export const ContentAvatar = styled.View`
  border: 1px solid #ccc;
  background: #f2f2f2;
  width: 80px;
  height: 80px;
  margin-right: 10px;
  border-radius: 100px;
  padding: 14px;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
`;

export const TextDescription = styled.Text`
  margin: 20px 20px;
  font-size: 16px;
  line-height: 25px;
  flex-wrap: nowrap;
`;

export const TextGroomsmen = styled.Text`
  margin: 0 20px 20px;
  font-size: 18px;
  font-weight: bold;
`;
