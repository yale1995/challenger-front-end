import { Header } from "../../components/Header";
import { ResumeCart } from "../../components/ResumeCart";
import styles from "./styles.module.scss";

export default function Resumo () {

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header />
        <ResumeCart/>
      </div>
    </div>
  );
}
