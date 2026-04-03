import React, { useState, Suspense } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Card from "./Components/Card/Card";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import ProductsCard from "./Components/ProductsCard/ProductsCard";
import Ratting from "./Components/Ratting/Ratting";
import WorkFlow from "./Components/WorkFlow/WorkFlow";
import PricingCard from "./Components/PricingCard/PricingCard";

const fetchData = async () => {
  const res = await fetch("/Data.json");
  return res.json();
};

function App() {
  const [cart, setCart] = useState([]);
  
  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };
  const handleRemoveFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };
  const handleClearCart = () => {
    setCart([]);
  };

  const productsCardPromise = fetchData();
  return (
    <>
      <NavBar cartCount={cart.length}></NavBar>
      <Banner></Banner>
      <Ratting></Ratting>
      <Suspense
        fallback={<span className="loading loading-dots loading-md"></span>}
      >
        <ProductsCard
          productsCardPromise={productsCardPromise}
          cart={cart}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
          handleClearCart={handleClearCart}
        ></ProductsCard>
      </Suspense>
      <Card></Card>
      <PricingCard></PricingCard>
      <WorkFlow></WorkFlow>
      <Footer></Footer>
    </>
  );
}

export default App;
