import styles from "./styles.module.scss";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import { BsFillCartCheckFill } from "react-icons/bs";

export function Form() {
  const { setNewNameProduct } = useContext(ProductContext);

  const { setNewAmountProduct } = useContext(ProductContext);

  const { handleCreateNewProduct } = useContext(ProductContext);

  const [countReact, setCountReact] = useState(0);
  const [countAngular, setCountAngular] = useState(0);
  const [countVue, setCountVue] = useState(0);

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
              data-testid="react"
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
                data-testid="minus-amount-react"
                type="button"
                onClick={() =>
                  setCountReact(countReact - 1 < 0 ? 0 : countReact - 1)
                }
              >
                <FaLessThan />
              </button>
              <input
                type="number"
                data-testid="amount-input-react"
                disabled
                value={countReact}
              />
              <button
                data-testid="plus-amount-react"
                type="button"
                onClick={() => setCountReact(countReact + 1)}
              >
                <FaGreaterThan />
              </button>
            </div>
            <div>
              <button
                data-testid="remove-amount-react"
                type="button"
                onClick={() => setCountReact(0)}
              >
                REMOVER
              </button>
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
              data-testid="vue"
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
                data-testid="minus-amount-angular"
                type="button"
                onClick={() =>
                  setCountAngular(countAngular - 1 < 0 ? 0 : countAngular - 1)
                }
              >
                <FaLessThan />
              </button>
              <input
                type="number"
                data-testid="amount-input-angular"
                disabled
                value={countAngular}
              />
              <button
                data-testid="plus-amount-angular"
                type="button"
                onClick={() => setCountAngular(countAngular + 1)}
              >
                <FaGreaterThan />
              </button>
            </div>
            <div>
              <button
                data-testid="remove-amount-angular"
                type="button"
                onClick={() => setCountAngular(0)}
              >
                REMOVER
              </button>
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
              data-testid="angular"
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
                data-testid="minus-amount-vue"
                type="button"
                onClick={() => setCountVue(countVue - 1 < 0 ? 0 : countVue - 1)}
              >
                <FaLessThan />
              </button>
              <input
                type="number"
                data-testid="amount-input-vue"
                disabled
                value={countVue}
              />
              <button
                data-testid="plus-amount-vue"
                type="button"
                onClick={() => setCountVue(countVue + 1)}
              >
                <FaGreaterThan />
              </button>
            </div>
            <div>
              <button
                data-testid="remove-amount-vue"
                type="button"
                onClick={() => setCountVue(0)}
              >
                REMOVER
              </button>
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
