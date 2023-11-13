import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <main style={{minHeight:"80vh"}}>{children}</main>
      <Footer></Footer>
    </> 
  );
};

export default Layout;
