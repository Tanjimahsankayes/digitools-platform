import React, { useState } from "react";
import CardImg from "../../assets/products/writing_2327400 1.png"

const AvailableProduct = ({ product }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleSelect = (name) => {
    if (selectedProducts.includes(name)) {
      setSelectedProducts(selectedProducts.filter((p) => p !== name));
    } else {
      setSelectedProducts([...selectedProducts, name]);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 ">
      {product.map((item, index) => (
        <div key={index}>
          <div className="space-y-5">
            <div className="card h-full flex flex-col gap-5 bg-base-100 shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ">
              <div className="card-body p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start mb-4 ">
                  <img
                    src={item.img}
                    alt=""
                    className="w-32 h-32 object-contain "
                  />
                  <span className="badge badge-xs badge-warning">
                    {item.type}
                  </span>
                </div>

                <div className="mb-4">
                  <h2 className="text-3xl font-boldtext-2xl md:text-3xl font-bold mb-2">
                    {item.heading}
                  </h2>
                  <p className="text-black/60 text-sm md:text-base ">
                    {item.description}
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-xl md:text-2xl mb-2">
                    ${item.price}
                  </h3>
                  <ul className="text-black/60 space-y-1 ">
                    {item.characteristics.map((char, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 text-green-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>

                        <span>{char}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <button className="btn btn-primary w-full transition-all duration-300 hover:scale-105">
                    {item.button}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailableProduct;
