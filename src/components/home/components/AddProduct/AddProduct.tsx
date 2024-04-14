import { IProductPrice } from "./interface";
import { useAddProduct } from "./useAddProduct";
import styles from "./addProduct.module.scss";

const AddProduct = ({ productPrice }: IProductPrice) => {
  const {
    onSubmit,
    handleSubmit,
    register,
    phoneNumber,
    handleBlur,
    errors,
    errormessage,
  } = useAddProduct(productPrice);

  return (
    <section className={styles["add-product-section"]}>
      <div className="container-small">
        <div className={styles["section-main-panel"]}>
          <div className={styles["section-headline"]}>
            <h2>Добавленные товары</h2>
          </div>
          <div className={styles["product-infos"]}>
            <ul>
              {productPrice?.map((elem) => {
                return (
                  <li key={elem?.id}>
                    <span>товар {elem?.id}</span>
                    <span>x {elem?.count}</span>
                    <span>{elem?.price} ₽</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles["form-overlay"]}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles["form-group"]}>
                <div className={styles["input-overlay"]}>
                  <input
                    id="phoneNumber"
                    {...register("phoneNumber", {
                      required: "Phone number is required",
                      minLength: {
                        value: 16,
                        message:
                          "Номер телефона должен содержать не менее 11 символов.",
                      },
                      maxLength: {
                        value: 16,
                        message:
                          "Номер телефона не может превышать 11 символов.",
                      },
                    })}
                    value={phoneNumber || ""}
                    type="text"
                    placeholder="+7 (___) ___ __-__"
                    onBlur={handleBlur}
                  />
                  {errors?.phoneNumber && (
                    <span className={styles["error-message"]}>
                      {errormessage}
                    </span>
                  )}
                </div>
                <div className={styles["button-overlay"]}>
                  <button type="submit">заказать</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
