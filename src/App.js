import { Route, Routes } from "react-router";
import "./App.css";
import AddProduct from "./DashBoard/AddProduct";
import AddReview from "./DashBoard/AddReview";
import DashBoard from "./DashBoard/Dashboard";
import MyProfile from "./DashBoard/MyProfile";
import Orders from "./DashBoard/Orders";
import ServiceList from "./DashBoard/ServiceList";
import Welcome from "./DashBoard/Welcome";
import Login from "./LoginSignup/Login";
import Signup from "./LoginSignup/Signup";
import Home from "./pages/Home/Home";
import Footer from "./pages/shared/Footer";
import Header from "./pages/shared/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllServiceList from "./DashBoard/AllServiceList";
import Allusers from "./DashBoard/Allusers";
import OrderServiceList from "./DashBoard/OrderServiceList";

function App() {
  return (
    <div className="">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="dashboard" element={<DashBoard></DashBoard>}>
          <Route index element={<Welcome></Welcome>}></Route>
          <Route path="order" element={<Orders></Orders>}></Route>
          <Route path="order/:Id" element={<Orders></Orders>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="orderservice" element={<OrderServiceList></OrderServiceList>}></Route>
          <Route path="serviceList" element={<ServiceList></ServiceList>}></Route>
          <Route path="alluser" element={<Allusers></Allusers>}></Route>
          <Route
            path="addnewitem"
            element={<AddProduct></AddProduct>}
          ></Route>{" "}
        </Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
