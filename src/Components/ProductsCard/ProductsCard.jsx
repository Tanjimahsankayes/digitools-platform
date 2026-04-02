import React, { use, useState } from 'react';
import AvailableProduct from '../AvailableProduct/AvailableProduct';

const ProductsCard = ({ productsCardPromise }) => {
  const product = use(productsCardPromise);

  const [isSelected, setSelected] = useState("product");
  console.log(isSelected);
  return (
    <div className="w-11/12 mx-auto mt-20 ">
      <div className="text-center space-y-4 ">
        <h2 className="text-3xl font-bold">Premium Digital Tools</h2>
        <p className="text-[#627382] text-[12px] md:text-[16px] text-center pb-10 px-4">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
        <div>
          <button
            onClick={() => {
              setSelected("product");
            }}
            className={`${
              isSelected === "product" ? "btn-primary" : "bg-transparent"
            } 
             btn rounded-r-none rounded-full  w-24 `}
          >
            Product
          </button>
          <button
            onClick={() => {
              setSelected("card");
            }}
            className={` ${
              isSelected === "card" ? "btn-primary" : "bg-transparent"
            } btn rounded-l-none rounded-full w-24`}
          >
            Card
          </button>
        </div>
      </div>
      <AvailableProduct
        product = {product}
      ></AvailableProduct>
    </div>
  );
};

export default ProductsCard;