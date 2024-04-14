import { IButtonBuyProps } from "./interface";
import styles from "./buyButton.module.scss";

const ButtonBuy = ({ handlePickItemCount }: IButtonBuyProps) => {
  return (
    <>
      <button onClick={handlePickItemCount} className={styles["buy-button"]}>
        купить
      </button>
    </>
  );
};

export default ButtonBuy;
