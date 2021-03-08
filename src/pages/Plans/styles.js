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

export const Card = styled.View`
  border: 2px solid #f2f2f2;
  background: #f2f2f2;
  margin: 10px;
  width: 200px;
  height: 250px;
  padding: 10px;
  margin-left: 20px;
  border-radius: 8px;
`;

export const Type = styled.Text`
  text-align: center;
  top: 30px;
  font-size: 20px;
`;

export const Price = styled.Text`
  text-align: center;
  top: 50px;
  color: #333;
  font-weight: bold;
  font-size: 25px;
`;

export const Name = styled.Text`
  text-align: center;
  top: 10px;
  color: #f45;
  font-size: 25px;
  font-weight: bold;
`;

export const ButtonBill = styled.TouchableOpacity`
  background: #f45;
  top: 80px;
  padding: 10px;
  border-radius: 5px;
`;

export const TextBill = styled.Text`
  text-align: center;
  color: #fff;
  font-weight: bold;
`;
