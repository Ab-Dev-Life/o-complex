import { IProduct } from "@/components/home/interface";

export interface IProductProps {
  price: number;
  image: string;
  description: string;
  title: string;
  id: number;
  handlePickItemCount: () => void;
  handleChangeProductCount: (
    e: React.ChangeEvent<HTMLInputElement>,
    price: number,
    id: number
  ) => void;

  handleCountVariation: (id: number, price: number, action: string) => void;
  changeBtn: string;
  productPrice: IProduct[];
}
