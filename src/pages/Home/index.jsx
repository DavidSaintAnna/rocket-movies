import { Header } from "../../components/Header";
import { FiPlus } from "react-icons/fi";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import {
  Container,
  ContainerButtonPink,
  Form,
  SecondContainer,
  InputContainer,
} from "./styles";

export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1> Meus filmes</h1>
            <ContainerButtonPink>
              <FiPlus />
              Adicionar filme
            </ContainerButtonPink>
          </header>
          <div className="movies">
            <SecondContainer>
              <h2>Interestellar</h2>
              <div className="stars">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStarOutline />
              </div>
              Pragas nas colheitas fizeram a civilização humana regredir para
              uma sociedade agrária em futuro de data desconhecida. Cooper,
              ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a
              filha de dez anos de Cooper, acredita que seu quarto está
              assombrado por um fantasma que tenta se...
              <div className="tags">
                <InputContainer>Ficção Cientifica</InputContainer>
                <InputContainer>Drama</InputContainer>
                <InputContainer>Família</InputContainer>
              </div>
            </SecondContainer>
            <SecondContainer>
              <h2>Interestellar</h2>
              <div className="stars">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStarOutline />
              </div>
              Pragas nas colheitas fizeram a civilização humana regredir para
              uma sociedade agrária em futuro de data desconhecida. Cooper,
              ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a
              filha de dez anos de Cooper, acredita que seu quarto está
              assombrado por um fantasma que tenta se...
              <div className="tags">
                <InputContainer>Ficção Cientifica</InputContainer>
                <InputContainer>Drama</InputContainer>
                <InputContainer>Família</InputContainer>
              </div>
            </SecondContainer>
            <SecondContainer>
              <h2>Interestellar</h2>
              <div className="stars">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStarOutline />
              </div>
              Pragas nas colheitas fizeram a civilização humana regredir para
              uma sociedade agrária em futuro de data desconhecida. Cooper,
              ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a
              filha de dez anos de Cooper, acredita que seu quarto está
              assombrado por um fantasma que tenta se...
              <div className="tags">
                <InputContainer>Ficção Cientifica</InputContainer>
                <InputContainer>Drama</InputContainer>
                <InputContainer>Família</InputContainer>
              </div>
            </SecondContainer>
          </div>
        </Form>
      </main>
    </Container>
  );
}
