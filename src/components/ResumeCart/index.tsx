import styles from "./styles.module.scss";
import { BsFillCartCheckFill } from "react-icons/bs";
import { BiCreditCard } from "react-icons/bi";
import { MdArrowBackIos } from "react-icons/md";

import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import Link from "next/link";

export function ResumeCart() {
  const { products } = useContext(ProductContext);
  const { handleRemoveProduct } = useContext(ProductContext);

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <div>
          <h1>
            <BsFillCartCheckFill /> RESUMO DA COMPRA
          </h1>
          <p>Stickers Selecionados:</p>
        </div>
        {products.map((product) => (
          <div key={product.nameSticker} className={styles.descriptionContainer}>
            <h2>{product.nameSticker}</h2>
            <div className={styles.amountDescription}>
              <div>Qntd.</div>
              <div>
                <h3>{product.amount}</h3>
              </div>
              <div>
                <button
                  onClick={() => handleRemoveProduct(product.nameSticker)}
                >
                  REMOVER
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <section className={styles.paymentContainer}>
        <div className={styles.paymentContent}>
          <div>
            {" "}
            <h1>
              <span>
                <BiCreditCard size="1.1em" />
              </span>
              INFORMAÇÕES DE PAGAMENTO
            </h1>
          </div>
          <div>
            <form>
              <div className={styles.personalInfos}>
                <input placeholder="Nome impresso no cartão" />
                <input placeholder="Número do cartão" />
              </div>
              <div className={styles.numbersInfos}>
                <input placeholder="Validade" />
                <input placeholder="Código CVV" />
                <input placeholder="CPF Titular" />
                <input placeholder="DD/MM/AA" />
              </div>
              <div className={styles.paymentMode}>
                <select>
                  <option>Á vista - Até 10% desconto - R$ 900,00</option>
                  <option>2x sem juros - R$ 1000,00 </option>
                  <option>3x sem juros - R$ 1000,00 </option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </section>
      <div className={styles.btnFinal}>
        <Link href="/">
          <button className={styles.btnBack}>
            <MdArrowBackIos />
          </button>
        </Link>
        <Link href="/checkout">
          <button>FINALIZAR</button>
        </Link>
      </div>
    </main>
  );
}
