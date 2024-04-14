import { useEffect, useState } from "react";
import { ChangeEvent } from "react";
import { IChangeBtn, IProduct } from "./interface";

export const useHome = () => {
  const [changeBtn, setChangeBtn] = useState({});
  const [productPrice, setProductPrice] = useState<IProduct[]>([]);

  const handlePickItemCount = (id: number, newPrice: number) => {
    setChangeBtn((prevActions: IChangeBtn) => ({
      ...prevActions,
      [id]: prevActions[id] === "button" ? "input" : "input",
    }));

    setProductPrice((prevProductPrice) => {
      const existingProductIndex = prevProductPrice.findIndex(
        (product) => product.id === id
      );
      if (existingProductIndex !== -1) {
        return prevProductPrice.map((product, index) => {
          if (index === existingProductIndex) {
            return { ...product, price: newPrice };
          }
          return product;
        });
      } else {
        const newProduct = {
          id,
          price: newPrice,
          count: 1,
        };
        return [...prevProductPrice, newProduct];
      }
    });
  };

  const handleCountVariation = (id: number, price: number, mode: string) => {
    setProductPrice((items) => {
      let productUpdated = false;
      const updatedItems = items.map((product) => {
        if (product.id === id && !productUpdated) {
          productUpdated = true;

          let newCount = product.count;
          let newPrice = product.price;

          if (mode === "increment") {
            newCount += 1;
            newPrice += price;
          } else if (mode === "decrement") {
            newCount = product.count > 0 ? product.count - 1 : product.count;
            newPrice = product.price - price > 0 ? product.price - price : 0;
          }

          return {
            ...product,
            count: newCount,
            price: newPrice,
          };
        }
        return product;
      });
      return updatedItems;
    });
  };

  const handleChangeProductCount = (
    e: ChangeEvent<HTMLInputElement>,
    price: number,
    id: number
  ) => {
    const inputValueAsNumber = parseFloat(e.target.value);

    setProductPrice((prevProducts) => {
      return prevProducts.map((product) => {
        if (product.id === id) {
          // Calculate new count and price
          const newCount = inputValueAsNumber;
          const newPrice = inputValueAsNumber * price;

          return {
            ...product,
            count: newCount,
            price: newPrice,
          };
        }

        return product;
      });
    });
  };

  useEffect(() => {
    if (productPrice.length) {
      localStorage.setItem("product", JSON.stringify(productPrice));
    }
  }, [productPrice]);

  useEffect(() => {
    const productData: string | null = localStorage.getItem("product");
    if (productData) setProductPrice(JSON.parse(productData));
  }, []);

  return {
    handleChangeProductCount,
    handlePickItemCount,
    handleCountVariation,
    changeBtn,
    productPrice,
  };
};
