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

export const Input = styled.TextInput`
  border: 1px solid #ccc;
  height: 60px;
  width: 90%;
  padding: 15px;
  align-self: center;
  margin: 10px;
  border-radius: 5px;
`;

export const Continue = styled.TouchableOpacity`
  align-self: center;
  padding: 20px;
  width: 90%;
  background: #f45;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const Facebook = styled.TouchableOpacity`
  align-self: center;
  padding: 20px;
  width: 90%;
  background: #4294ff;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const Google = styled.TouchableOpacity`
  align-self: center;
  padding: 20px;
  width: 90%;
  background: #fbbc07;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const Register = styled.TouchableOpacity`
  align-self: center;
  padding: 20px;
  width: 90%;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const TextBtn = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const TextRegister = styled.Text`
  color: #333;
  font-size: 18px;
  font-weight: bold;
  top: 10px;
`;
