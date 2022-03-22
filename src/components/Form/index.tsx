import styles from "./styles.module.scss";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import { BsFillCartCheckFill } from "react-icons/bs";

export function Form() {
  const { setNewNameProduct } = useContext(ProductContext);

  const { setNewAmountProduct, newAmountProduct } = useContext(ProductContext);

  const { handleCreateNewProduct, products } = useContext(ProductContext);

  const [countReact, setCountReact] = useState(0)
  const [countAngular, setCountAngular] = useState(0)
  const [countVue, setCountVue] = useState(0)


  useEffect(() => {
    setNewAmountProduct(countReact);
  }, [countReact]);

  useEffect(() => {
    setNewAmountProduct(countVue);
  }, [countVue]);

  useEffect(() => {
    setNewAmountProduct(countAngular);
  }, [countAngular]);

  return (
    <main className={styles.form}>
      <label>Quais Stickers:</label>
      <div className={styles.inputContainer}>
        <div className={styles.inputGroup}>
          <div className={styles.inputType}>
            <input
              type="checkbox"
              value="React"
              onChange={(e) => setNewNameProduct(e.target.value)}
            />
            <label>React</label>
          </div>
          <div className={styles.inputAmount}>
            <div>Qntd.</div>
            <div>
              <button
                onClick={() =>
                  setCountReact(
                    countReact - 1 < 0 ? 0 : countReact - 1
                  )
                }
              >
                <FaLessThan />
              </button>
              <input disabled value={countReact} />
              <button onClick={() => setCountReact(countReact + 1)}>
                <FaGreaterThan />
              </button>
            </div>
            <div>
              <button onClick={() => setCountReact(0)}>REMOVER</button>
            </div>
          </div>
          <div className={styles.addCart}>
            <button onClick={handleCreateNewProduct}>
              {" "}
              <BsFillCartCheckFill /> Adicionar
            </button>
          </div>
        </div>
        <div className={styles.inputGroup}>
          <div className={styles.inputType}>
            <input
              type="checkbox"
              value="Vue"
              onChange={(e) => setNewNameProduct(e.target.value)}
            />
            <label>Angular</label>
          </div>
          <div className={styles.inputAmount}>
            <div>Qntd.</div>
            <div>
              <button
                onClick={() =>
                  setCountAngular(
                    countAngular - 1 < 0 ? 0 : countAngular - 1
                  )
                }
              >
                <FaLessThan />
              </button>
              <input disabled value={countAngular} />
              <button onClick={() => setCountAngular(countAngular + 1)}>
                <FaGreaterThan />
              </button>
            </div>
            <div>
              <button onClick={() => setCountAngular(0)}>REMOVER</button>
            </div>
          </div>
          <div className={styles.addCart}>
            <button onClick={handleCreateNewProduct}>
              {" "}
              <BsFillCartCheckFill /> Adicionar
            </button>
          </div>
        </div>
        <div className={styles.inputGroup}>
          <div className={styles.inputType}>
            <input
              type="checkbox"
              value="Angular"
              onChange={(e) => setNewNameProduct(e.target.value)}
            />
            <label>Vue</label>
          </div>
          <div className={styles.inputAmount}>
            <div>Qntd.</div>
            <div>
              <button
                onClick={() =>
                  setCountVue(
                    countVue - 1 < 0 ? 0 : countVue - 1
                  )
                }
              >
                <FaLessThan />
              </button>
              <input disabled value={countVue} />
              <button onClick={() => setCountVue(countVue + 1)}>
                <FaGreaterThan />
              </button>
            </div>
            <div>
              <button onClick={() => setCountVue(0)}>REMOVER</button>
            </div>
          </div>
          <div className={styles.addCart}>
            <button onClick={handleCreateNewProduct}>
              {" "}
              <BsFillCartCheckFill /> Adicionar
            </button>
          </div>
        </div>
        <label>Observações</label>
        <div className={styles.textArea}>
          <textarea placeholder="Alguma dúvida?"></textarea>
        </div>
      </div>
    </main>
  );
}
