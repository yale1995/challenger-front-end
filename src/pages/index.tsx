import { useContext, useEffect } from "react";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { Header } from "../components/Header";
import { ProductContext } from "../context/ProductContext";
import styles from "./home.module.scss";
export default function Home () {

  const {products}=useContext(ProductContext);
  
  useEffect(() => console.log(products), [products])
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
