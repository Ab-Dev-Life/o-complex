import ButtonBuy from "./components/ButtonBuy/BuyButton";
import { useProduct } from "./useProduct";
import { IProductProps } from "./interface";
import styles from "./product.module.scss";
import "aos/dist/aos.css";

const Product = ({
  price,
  image,
  description,
  title,
  handlePickItemCount,
  changeBtn,
  handleCountVariation,
  productPrice,
  handleChangeProductCount,
  id,
}: IProductProps) => {
  useProduct();

  return (
    <div data-aos="fade-up" className={styles["product-overlay"]}>
      <div className={styles["product-content"]}>
        <div className={styles["product-image"]}>
          <img src={image} alt="" />
        </div>
        <div className={styles["product-name"]}>
          <h3>{title}</h3>
        </div>
        <div className={styles["product-description"]}>
          <p>{description}</p>
        </div>
        <div className={styles["product-price"]}>
          <h4>цена: {price}₽</h4>
        </div>
        <div className={styles["prodcut-action"]}>
          {changeBtn === "button" ? (
            <ButtonBuy handlePickItemCount={handlePickItemCount} />
          ) : (
            <div className={styles["product-count"]}>
              <button onClick={() => handleCountVariation(id, price, "increment")}>
                +
              </button>
              <input
                type="number"
                defaultValue={
                  productPrice.find((item) => item.id === id)?.count || 0
                }
                value={productPrice.find((item) => item.id === id)?.count || 0}
                onChange={(e) => handleChangeProductCount(e, price, id)}
              />
              <button onClick={() => handleCountVariation(id, price, "decrement")}>
                -
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
