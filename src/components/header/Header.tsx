import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles["app-header"]}>
      <div className="container">
        <div className={styles["header-message"]}>
          <h1>тестовое задание</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
