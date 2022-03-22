import { createContext, ReactNode, useState } from "react";

interface ProductProviderProps {
  children: ReactNode;
}

interface ProductContextType {
  products: Product[];
  setProducts: (newState: any) => void;
  newNameProduct: string;
  setNewNameProduct: (newState: string) => void;
  newAmountProduct: number;
  setNewAmountProduct: (newState: number) => void;
  obsProduct: string;
  setObsProduct: (newState: string) => void;
  handleCreateNewProduct: () => void;
  handleRemoveProduct: (nameSticker: string) => void;
}

interface Product {
  nameSticker: string;
  amount: number;
  obs: string;
}

const initialValue = {
  products: [],
  setProducts: () => {},
  newNameProduct: "",
  setNewNameProduct: () => {},
  newAmountProduct: 0,
  setNewAmountProduct: () => {},
  obsProduct: "",
  setObsProduct: () => {},
  handleCreateNewProduct: () => {},
  handleRemoveProduct: () => {}
};

export const ProductContext = createContext<ProductContextType>(initialValue);

export function ProductProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [newNameProduct, setNewNameProduct] = useState("");
  const [newAmountProduct, setNewAmountProduct] = useState(0);
  const [obsProduct, setObsProduct] = useState("");

  function handleCreateNewProduct() {
    const newProduct: Product = {
      nameSticker: newNameProduct,
      amount: newAmountProduct,
      obs: obsProduct,
    };

    setProducts((oldState: any) => [...oldState, newProduct]);

    setNewAmountProduct(0)
  }

  function handleRemoveProduct(nameSticker: string) {
    const filteredProducts = products.filter((product) => product.nameSticker !== nameSticker);
    setProducts(filteredProducts);
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        newNameProduct,
        setNewNameProduct,
        newAmountProduct,
        setNewAmountProduct,
        handleCreateNewProduct,
        handleRemoveProduct,
        obsProduct,
        setObsProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
