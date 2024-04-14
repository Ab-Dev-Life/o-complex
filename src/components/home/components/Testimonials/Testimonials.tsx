import styles from "./testimonials.module.scss";

const Testimonials = () => {
  return (
    <section className={styles["section-testimonials"]}>
      <div className="container-small">
        <div className={styles["testimonials-main-panel"]}>
          <div className={styles["testimonials-item-overlay"]}>
            <div className={styles["testimonial-item"]}>
              <div className={styles["testimonial-item-headline"]}>
                <h1>Отзыв 1</h1>
              </div>
              <div className={styles["testimonial-item-body"]}>
                <p>
                  Но всё же должен выглядить красиво, на сколько возможно,
                  конечно
                </p>
              </div>
            </div>
          </div>
          <div className={styles["testimonials-item-overlay"]}>
            <div className={styles["testimonial-item"]}>
              <div className={styles["testimonial-item-headline"]}>
                <h1>Отзыв 2</h1>
              </div>
              <div className={styles["testimonial-item-body"]}>
                <p>
                  Но всё же должен выглядить красиво, на сколько возможно,
                  конечно
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
