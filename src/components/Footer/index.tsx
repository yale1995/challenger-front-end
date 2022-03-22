import styles from "./styles.module.scss";
import Link from "next/link";

export function Footer() {
  return (
    <footer className={styles.container}>
      <Link href="/resumo">
        <button>FINALIZAR COMPRA</button>
      </Link>
    </footer>
  );
}
