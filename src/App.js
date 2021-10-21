import React from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import Input from "./components/Input";

// Centrar Contenido :v
const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  background-color: #333;
`;

const Section = styled.section`
  background-color: #646464;
  border-top: solid 2px palevioletred;
  padding: 20px 25px;
  width: 600px;
  box-shadow: 0px 2px 3px rgb(0, 0, 0, 0.3);
`;

const App = () => {
  const handleSubmit = () => {};

  return (
    <Container>
      <Section>
        <Formik
          initialValues={{
            deposit: "",
            contribution: "",
            years: "",
            rate: "",
          }}
          onSubmit={handleSubmit}
        >
          <Form>
            <Input name='deposit' label='Depósito inicial' />
            <Input name='contribution' label='Contribución Anual' />
            <Input name='years' label='Años' />
            <Input name='rate' label='Interes estimado' />
          </Form>
        </Formik>
      </Section>
    </Container>
  );
};

export default App;
