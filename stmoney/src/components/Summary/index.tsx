import { Container } from "./style";
import {
  BsArrowUpCircle,
  BsArrowDownCircle,
  BsCurrencyDollar,
} from "react-icons/bs";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <BsArrowUpCircle className="green" />
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <BsArrowDownCircle className="red" />
        </header>
        <strong>- R$500,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <BsCurrencyDollar />
        </header>
        <strong>R$1000,00</strong>
      </div>
    </Container>
  );
}
