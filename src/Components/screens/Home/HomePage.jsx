import Layout from "@/Components/Layout/Layout";
import axios from "axios";
import styles from "./HomePage.module.scss";
import { useState } from "react";
import Product from "./Product";
import { useQuery } from "react-query";
import { Button } from "@mui/material";
import Preview from "./Preview";
import { motion } from "framer-motion";
import { container } from "@/styles/animation";
async function fetchCoins(skip = 1) {
  const { data } = await axios.get(
    `https://openapiv1.coinstats.app/coins?page=${skip}`,
    {
      headers: {
        accept: "application/json",
        "X-API-KEY": "zxWIGTikZOpsa0xlNO2LZ4kpXL3tvpvRCoX3lkVoClI=",
      },
    }
  );
  return data.result;
}
const HomePage = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useQuery(
    ["coins", page],
    () => fetchCoins(page),
    { keepPreviousData: true }
  );
  if (isLoading) {
    return <p className={styles.loading}>Loading...</p>;
  }
  if (isError) {
    return <p className={styles.error}>error</p>;
  }
  if (!data) {
    return <p className={styles.noData}>There is no data...</p>;
  }

  return (
    <Layout>
      <div style={{ overflow: "hidden", marginTop: "20%" }}>
        <motion.div
          initial={{ y: "100%" }}
          whileInView={{ y: "0%" }}
          transition={{ delay: 0.3 }}
          className={styles.info}
        >
          <p className="name">Name</p>
          <p className="price">Last price</p>
          <p className={styles.HChange}>1h change</p>
          <p className={styles.HChange}>24h Change</p>
          <p>Market Cap</p>
        </motion.div>
      </div>
      <motion.div variants={container} initial="hidden" animate="show">
        {data.map((e) => (
          <Product key={e.id} product={e} />
        ))}
      </motion.div>
      <div className={styles.pagination}>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => setPage((p) => p - 1)}
          disabled={!page}
        >
          back
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => setPage((p) => p + 1)}
        >
          next
        </Button>
      </div>
      <Preview />
    </Layout>
  );
};

export default HomePage;
