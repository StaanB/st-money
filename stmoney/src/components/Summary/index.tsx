import { useContext } from "react";
import { Container } from "./style";
import {
  BsArrowUpCircle,
  BsArrowDownCircle,
  BsCurrencyDollar,
} from "react-icons/bs";
import { useTransactions } from "../hooks/useTransactions";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraw += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraw: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <BsArrowUpCircle className="green" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposits)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <BsArrowDownCircle className="red" />
        </header>
        <strong>
          -{new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.withdraw)}
        </strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <BsCurrencyDollar />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
