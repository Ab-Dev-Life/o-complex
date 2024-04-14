"use client";
import Product from "./components/Product/Product";
import { useProduct } from "./useProducts";
import { IProductsProps, IProducts } from "./interface";
import styles from "./products.module.scss";

const Products = ({
  handleChangeProductCount,
  handlePickItemCount,
  changeBtn,
  handleCountVariation,
  productPrice,
}: IProductsProps) => {
  const { products, handleAddMoreProducts } = useProduct();

  return (
    <section className={styles["products-section"]}>
      <div className="container-small">
        <div className={styles["product-main-panel"]}>
          {products.map(
            ({ id, price, image_url, description, title }: IProducts) => {
              return (
                <Product
                  key={id}
                  id={id}
                  price={price}
                  image={image_url}
                  description={description}
                  title={title}
                  handlePickItemCount={() => handlePickItemCount(id, price)}
                  changeBtn={changeBtn[id] || "button"}
                  handleCountVariation={handleCountVariation}
                  productPrice={productPrice}
                  handleChangeProductCount={handleChangeProductCount}
                />
              );
            }
          )}
        </div>
        <div className={styles["add-more-button"]}>
          <button onClick={handleAddMoreProducts}>Add 20 More Products</button>
        </div>
      </div>
    </section>
  );
};

export default Products;
