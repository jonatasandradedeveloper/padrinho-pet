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
