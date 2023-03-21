// import { Button } from "~/client/components";
import { creditContainerStyle } from "./styles.css";

type CredirProps = {
  id: number;
  processor: string;
  holder: string;
  card_number: string;
  expiration_date: string;
  created_at: string;
};

export function Credit({ holder, card_number, expiration_date }: CredirProps) {
  return (
    <li className={creditContainerStyle}>
      <img
        src="https://elstar.themenate.net/img/others/img-8.png"
        alt="Imagem de cartão"
      />
      <div>
        <h4>
          {holder} {card_number}
        </h4>
        <small>Expira dia {expiration_date}</small>
      </div>

      {/* <Button style={{ marginLeft: "auto" }} variant="ghost">
        Editar
      </Button> */}
    </li>
  );
}
