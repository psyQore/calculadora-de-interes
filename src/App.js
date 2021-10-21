import React from "react";
import { Formik, Form } from "formik";
import Input from "./components/Input";
import Button from "./components/Button";
import Container from "./components/Container";
import Section from "./components/Section";

// formula para calcular el interes compuesto
const compoundInterest = (deposit, contribution, years, rate) => {
  let total = deposit;
  for (let i = 0; i < years; i++) {
    total = (total + contribution) * (rate + 1);
  }

  return Math.round(total);
};

const App = () => {
  const handleSubmit = ({ deposit, contribution, years, rate }) => {
    const val = compoundInterest(
      Number(deposit),
      Number(contribution),
      Number(years),
      Number(rate)
    );

    console.log(val);
  };

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
            <Button type='submit'>Calcular</Button>
          </Form>
        </Formik>
      </Section>
    </Container>
  );
};

export default App;
