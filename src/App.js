import React from "react";
import styled from "styled-components";

// Centrar Contenido :v
const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
`;

const App = () => {
  return (
    <Container>
      <h1>Hello world</h1>
    </Container>
  );
};

export default App;
