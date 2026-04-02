import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Card from './Components/Card/Card'
import Footer from './Components/Footer/Footer'
import NavBar from './Components/NavBar/NavBar'
import ProductsCard from './Components/ProductsCard/ProductsCard'
import Ratting from './Components/Ratting/Ratting'
import WorkFlow from './Components/WorkFlow/WorkFlow'


const fetchData = async() =>{
  const res = await fetch("/Data.json");
  return res.json();
};


function App() {

  const productsCardPromise = fetchData();
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Ratting></Ratting>
      <Suspense
        fallback={<span className="loading loading-dots loading-md"></span>}
      >
        <ProductsCard productsCardPromise={productsCardPromise}></ProductsCard>
      </Suspense>
      <Card></Card>
      <WorkFlow></WorkFlow>
      <Footer></Footer>
    </>
  );
}

export default App
