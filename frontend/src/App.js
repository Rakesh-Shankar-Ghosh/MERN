import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PagenotfoundPage from "./pages/PagenotfoundPage";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashbord from "./pages/User/Dashbord";
import PrivateRoute from "./components/Routes/PrivateRoute";
import ForgotPasssword from "./pages/Auth/ForgotPassword";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminRoute from "./components/Routes/AdminRoute";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import Products from "./pages/Admin/Products";
import UpdateProduct from "./pages/Admin/UpdateProduct";
import Search from "./pages/Search";
import ProductDetails from "./pages/User/ProductDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/forgot-password" element={<ForgotPasssword />} />

        <Route path="/Dashbord" element={<PrivateRoute />}>
          <Route path="user" element={<Dashbord />}></Route>
        </Route>

        <Route path="/Dashbord" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />}></Route>
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
        </Route>

        <Route path="/About" element={<AboutPage />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Contact" element={<ContactPage />}></Route>
        <Route path="/*" element={<PagenotfoundPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
