"use client";
import { ToastContainer } from "react-toastify";
import AddProduct from "./components/AddProduct/AddProduct";
import Products from "./components/Products/Products";
import Testimonials from "./components/Testimonials/Testimonials";
import { useHome } from "./useHome";

const Home = () => {
  const {
    handleChangeProductCount,
    handlePickItemCount,
    handleCountVariation,
    changeBtn,
    productPrice,
  } = useHome();

  return (
    <main className="wrapper">
      <ToastContainer />
      <Testimonials />
      <AddProduct productPrice={productPrice} />
      <Products
        handlePickItemCount={handlePickItemCount}
        handleCountVariation={handleCountVariation}
        handleChangeProductCount={handleChangeProductCount}
        changeBtn={changeBtn}
        productPrice={productPrice}
      />
    </main>
  );
};

export default Home;
