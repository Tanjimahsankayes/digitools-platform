 import { LuShoppingCart } from "react-icons/lu";

  const SelectedProduct = ({ products, handleRemove, handleClearCart }) => {
    const total = products.reduce((sum, item) => sum + item.price, 0);
    return (
      <div className="w-11/12 mx-auto pt-15 shadow-lg p-6 rounded-2xl ">
        <h2 className="text-2xl font-bold pb-4 ">Your Card</h2>
        {products.length === 0 ? (
          <div className="w-11/12 mx-auto pt-15 ">
            <div>
              <div className="flex justify-center pt-4 ">
                <LuShoppingCart className="h-30 w-30 text-black/20 " />
              </div>
              <p className="text-center py-5 text-xl text-black/50 ">
                Your cart is empty
              </p>
            </div>
          </div>
        ) : (
          products.map((item, ind) => (
            <div key={ind} className="shadow-sm bg-gray-50 rounded-2xl mb-6 p-6 ">
              <div className="flex justify-between">
                <div className="flex gap-8 items-center ">
                  <img src={item.img} alt="" className="md:w-20 md:h-20 w-12 h-12 " />
                  <div>
                    <h3 className=" text-ld md:text-xl font-semibold items-center">
                      {item.heading}
                    </h3>
                    <p className="text-black/60"> ${item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(ind)}
                  className="text-lg md:text-md text-red-600 cursor-pointer "
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
        <div className="flex justify-between ">
          <p className="text-black/50">Total :</p>
          <h2 className="font-bold text-xl ">${total}</h2>
        </div>
        <button
          onClick={handleClearCart}
          className="btn btn-primary rounded-full mt-6 w-full "
        >
          Proceed To Checkout
        </button>
      </div>
    );
  };

  export default SelectedProduct;
