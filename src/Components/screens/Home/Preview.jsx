import { Button } from "@mui/material";
import styles from "./Preview.module.scss";
import { motion } from "framer-motion";

const Preview = () => {
  return (
    <motion.div className={styles.preview}>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className={styles.h1}
      >
        Dmytro Tarasenko coin
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className={styles.btnParent}
      >
        <Button variant="outlined" color="secondary">
          To trade
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default Preview;
