import { ChangeEvent } from "react";
import { IProduct } from "../../interface";

export interface IProducts {
  id: number;
  price: number;
  image_url: string;
  description: string;
  title: string;
}

export interface IProductsProps {
  handleChangeProductCount: (
    e: ChangeEvent<HTMLInputElement>,
    price: number,
    id: number
  ) => void;
  handlePickItemCount: (id: number, newPrice: number) => void;
  handleCountVariation: (id: number, price: number, mode: string) => void;
  productPrice: IProduct[];
  changeBtn: { [key: string | number]: string };
}
