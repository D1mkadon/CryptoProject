import { li } from "@/styles/animation";
import styles from "./Product.module.scss";
function formatCompactNumber(number) {
  if (number < 1000) {
    return number;
  } else if (number >= 1000 && number < 1_000_000) {
    return (number / 1000).toFixed(2) + "K";
  } else if (number >= 1_000_000 && number < 1_000_000_000) {
    return (number / 1_000_000).toFixed(2) + "M";
  } else if (number >= 1_000_000_000 && number < 1_000_000_000_000) {
    return (number / 1_000_000_000).toFixed(2) + "B";
  } else if (number >= 1_000_000_000_000 && number < 1_000_000_000_000_000) {
    return (number / 1_000_000_000_000).toFixed(2) + "T";
  }
}
import { motion } from "framer-motion";

const Product = ({ product }) => {
  return (
    <div style={{ overflow: "hidden" }}>
      <motion.div
        variants={li}
        transition={{ duration: 0.5 }}
        className={styles.block}
      >
        <img className={styles.icon} src={product.icon} alt="/" />
        <p className={"name"}>{product.name}</p>
        <p className={"price"}>
          {new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "USD",
          }).format(product.price)}
        </p>
        <p
          className={
            product.priceChange1h === 0
              ? "grey"
              : product.priceChange1h > 0
              ? "green"
              : "red"
          }
        >
          {product.priceChange1h}%
        </p>
        <p
          className={
            product.priceChange1d === 0
              ? "grey"
              : product.priceChange1d > 0
              ? "green"
              : "red"
          }
        >
          {product.priceChange1d}%
        </p>
        <p>{formatCompactNumber(product.marketCap)} $</p>
      </motion.div>
    </div>
  );
};

export default Product;
