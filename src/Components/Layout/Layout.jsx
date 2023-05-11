import { Container } from "@mui/material";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Container maxWidth="xl" sx={{ minHeight: "100vh" }}>
        <Header />
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
