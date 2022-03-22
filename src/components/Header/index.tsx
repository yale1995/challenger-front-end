import styles from "./styles.module.scss";
export function Header() {
  return (
    <header className={styles.container}>
      <h1>
        Formulário
        <br />
        para compra de
        <br />
        <span>Pacote de Stickers</span>
      </h1>
    </header>
  );
}
