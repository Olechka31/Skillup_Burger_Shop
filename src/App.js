import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import Footer from "./components/layout/Footer.jsx";
import Header from "./components/layout/Header.jsx";
import Contact from "./components/contact/Contact.jsx";
import Cart from "./components/cart/Cart.jsx";
import Shipping from "./components/cart/Shipping.jsx";

import Login from "./components/login/Login.jsx";
import Profile from "./components/profile/Profile.jsx";
// Add module imports for MY ORDERS

// import OrderDetails from "./components/myOrders/OrderDetails.jsx";
import About from "./components/about/About.jsx";


import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/table.scss";
import "./styles/orderDetails.scss";
import "./styles/about.scss";

function App() {
  return (
    <Router>
      <Header isAuthenticated={true} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/me" element={<Profile />} />
         {/* //           Add the Route for MY ORDERS */}

        {/* <Route path="/order/:id" element={<OrderDetails />} /> */}
      
       

        
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
