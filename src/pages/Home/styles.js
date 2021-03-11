import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  background: #fff;
`;

export const Content = styled.View`
  flex-direction: column;
  margin: 10px;
  justify-content: space-between;
  border-radius: 10px;
  background: #f2f2f2;
  border: 1px solid #f2f2f2;
`;

export const Picture = styled.Image`
  width: 100%;
  height: 250px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Name = styled.Text`
  font-size: 38px;
  margin-top: -50px;
  margin-left: 20px;
  color: #fff;
  font-weight: bold;
`;

export const Adote = styled.TouchableOpacity``;

export const Company = styled.View`
  justify-content: space-between;
  flex-direction: row;
  padding: 20px;
`;

export const Icon = styled.Image`
  top: 7px;
`;

export const Shared = styled.TouchableOpacity``;

export const TextCompany = styled.Text`
  top: 10px;
  font-size: 18px;
  margin-left: 15px;
  width: 130px;
`;

export const ButtonAdote = styled.TouchableOpacity`
  background: #fff;
  padding: 10px 15px;
  border-radius: 5px;
`;

export const TextAdote = styled.Text`
  font-size: 18px;
  color: #f45;
`;

export const Search = styled.View`
  border: 1px solid #f2f2f2;
  border-radius: 100px;
  flex-direction: row;
  justify-content: space-around;
  height: 55px;
  margin: 10px;
`;
export const IconInput = styled.Image`
  top: 15px;
  width: 24px;
  height: 24px;
`;

export const Input = styled.TextInput`
  padding: 15px;
`;

export const Grup = styled.View`
  margin: 20px 0;
`;

export const Title = styled.Text`
  color: #f45;
  text-align: center;
  font-size: 30px;
`;

export const Logo = styled.Image`
  width: 60px;
  height: 60px;
  align-items: center;
  align-self: center;
`;
