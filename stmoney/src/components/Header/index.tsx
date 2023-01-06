import logoImg from "../../assets/logo.png";

import { Container, Content } from "./style";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="st money" />
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
}
