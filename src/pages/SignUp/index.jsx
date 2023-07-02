import { Container, Form, Background, SecondContainer } from "./styles";

import { Button } from "../../components/Button";

import { Link } from "react-router-dom";

import { Input } from "../../components/Input";

import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input type="text" placeholder="Name" icon={FiUser} />
        <Input type="text" placeholder="E-mail" icon={FiMail} />
        <Input type="password" placeholder="Senha" icon={FiLock} />
        <Button title="Cadastrar" />
        <Link to="/">
          <SecondContainer>
            <FiArrowLeft />
            Voltar para o Login
          </SecondContainer>
        </Link>
      </Form>
      <Background />
    </Container>
  );
}
