import { Header } from "../../components/Header";
import styles from "./styles.module.scss";
import { BsCheckLg } from "react-icons/bs";

export default function Checkout() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header />
        <div className={styles.successMessage}>
          <h1>
            COMPRA FINALIZADA
            <span>
              <BsCheckLg />
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}
