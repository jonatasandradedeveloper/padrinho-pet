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
  border: 2px solid #f45;
  align-self: center;
  font-size: 30px;
  color: #f45;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  margin-bottom: 30px;
`;

export const Information = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const Name = styled.Text`
  font-size: 25px;
  color: #333;
`;

export const Type = styled.Text`
  font-size: 25px;
  color: #333;
`;

export const Price = styled.Text`
  font-size: 25px;
  color: #333;
`;

export const Input = styled.TextInput`
  border: 1px solid #f2f2f2;
  margin: 10px 20px;
  padding: 15px;
  border-radius: 8px;
  top: 20px;
`;

export const Finish = styled.TouchableOpacity`
  background: #f45;
  margin: 20px;
  padding: 20px;
  border-radius: 8px;
`;

export const TextFinish = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  color: #fff;
`;
