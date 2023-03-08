import { Button } from "~/client/components";
import { creditContainerStyle } from "./styles.css";

export function Credit() {
  return (
    <li className={creditContainerStyle}>
      <img
        src="https://elstar.themenate.net/img/others/img-8.png"
        alt="Imagem de cartão"
      />
      <div>
        <h4>Lucas Gonçalves **** 7895</h4>
        <small>Expira dia 19/05</small>
      </div>

      <Button style={{ marginLeft: "auto" }} variant="ghost">
        Editar
      </Button>
    </li>
  );
}
