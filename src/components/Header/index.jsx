import { Container, InputContainer, Profile } from "./styles";
import { Input } from "../Input";

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <InputContainer>
        <input type="text" placeholder="Pesquisar pelo título" />
      </InputContainer>

      <Profile to="/profile">
        <div>
          <strong>David Henrique</strong>
          <span>sair</span>
        </div>
        <img
          src="https://github.com/DavidSaintAnna.png"
          alt="Foto do usuário"
        />
      </Profile>
    </Container>
  );
}
