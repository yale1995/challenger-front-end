import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { Header } from "../components/Header";
import styles from "./home.module.scss";
export default function Home () {

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header/>
        <Form/>
        <Footer/>
      </div>
    </div>
  );
}
