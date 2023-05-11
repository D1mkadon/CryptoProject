import styles from "./Footer.module.scss";
import { motion } from "framer-motion";
import { container, li } from "@/styles/animation";
import Link from "next/link";

const Footer = () => {
  return (
    <motion.footer
      variants={container}
      initial="hidden"
      whileInView="show"
      className={styles.footer}
    >
      <div className={styles.MainBlock}>
        <div style={{ overflow: "hidden" }}>
          <motion.div variants={li}>
            <p>About Us</p>
            <Link href={"/about/Notices"}>Notices</Link>
            <Link href={"/about/Academy"}>Academy</Link>
            <Link href={"/about/Investors"}>Investors</Link>
            <Link href={"/about/Press"}>Press</Link>
          </motion.div>
        </div>

        <div style={{ overflow: "hidden" }}>
          <motion.div variants={li}>
            <p>Careers</p>
            <Link href={"/about/Job"}>Job Search</Link>
            <Link href={"/about/Professionals"}>Professionals</Link>
            <Link href={"/about/Graduates"}>Graduates</Link>
            <Link href={"/about/Students"}>Students</Link>
            <Link href={"/about/Talents"}>Talent Programs</Link>
          </motion.div>
        </div>

        <div style={{ overflow: "hidden" }}>
          <motion.div variants={li}>
            <p>Knowledge Center</p>
            <Link href={"/about/Consumption"}>Consumption & Emissions</Link>
            <Link href={"/about/Exchange"}>Exchange</Link>
            <Link href={"/about/Referral"}>Referral</Link>
            <Link href={"/about/Availability"}>Availability</Link>
            <Link href={"/about/Test"}>Test</Link>
          </motion.div>
        </div>

        <div style={{ overflow: "hidden", height: "250px", }}>
          <motion.div variants={li}>
            <p>Business Services</p>
            <Link href={"/about/FleetSales"}>Fleet Sales</Link>
            <Link href={"/about/DiplomaticSales"}>
              International Diplomatic Sales
            </Link>
            <Link href={"/about/Dealers"}>Training for Authorized Dealers</Link>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
