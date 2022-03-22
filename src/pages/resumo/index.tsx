import { useContext, useEffect } from "react";
import { Header } from "../../components/Header";
import { ResumeCart } from "../../components/ResumeCart";
import { ProductContext } from "../../context/ProductContext";
import styles from "./styles.module.scss";

export default function Resumo () {

  const {products}=useContext(ProductContext);
  
  useEffect(() => console.log(products), [products])

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header />
        <ResumeCart/>
      </div>
    </div>
  );
}
