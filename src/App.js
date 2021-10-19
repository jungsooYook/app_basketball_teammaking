import React from "react";
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: pink;
`;

const Content = styled.Text`
  color: white;
  font-size: 50px;
  font-weight: bold;
  position: absolute;
  top: 40px;
`;

const Text = styled.Text`
  color: white;
  font-size: 30px;
`;

function App() {
  return (
    <Container>
      <Content>메인</Content>
      <Text>ㅎㅇㅌ</Text>
    </Container>
  );
}

export default App;
