import { Header } from "../../components/Header";
import { Link } from "react-router-dom";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { FiArrowLeft } from "react-icons/fi";
import {
  Container,
  Form,
  SecondContainer,
  InputContainer,
  ContainerButtonPink,
  ContainerButtonBlack,
} from "./styles";

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <Link to="#">
              <SecondContainer>
                <FiArrowLeft />
                <span>Voltar</span>
              </SecondContainer>
            </Link>
            <h1>Novo filme</h1>
          </header>
          <div>
            <InputContainer>
              <input type="text" placeholder="Título" />
            </InputContainer>
            <InputContainer>
              <input type="text" placeholder="Sua nota (de 0 a 5)" />
            </InputContainer>
          </div>
          <Textarea placeholder="Observações" />
          <h2>Marcadores</h2>
          <div className="tags">
            <NoteItem value="React" />
            <NoteItem isnew placeholder="Novo marcador" />
          </div>
          <div className="buttons">
            <ContainerButtonPink>Salvar alterações</ContainerButtonPink>
            <ContainerButtonBlack>Excluir filme</ContainerButtonBlack>
          </div>
        </Form>
      </main>
    </Container>
  );
}
