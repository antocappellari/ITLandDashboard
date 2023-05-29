import { useState, useEffect } from "react";
const BASE_URL = "http://localhost:3001";

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    fetch(BASE_URL + "/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.data));
  };
  const lastProducts = products[products.length - 1];
  return (
    <div>
      <div className="flex justify-center  items-center m-3 h-52">
      <div className="w-[50%] flex flex-col items-center">
          <p className="font-bold text-xl m-4">Total products:</p>
          <div className="flex flex-col items-center shadow-xl  p-4 h-[200px] w-[80%] bg-white">
          <p className="text-[5em]">{products.length}</p>
          </div>
        </div>
        <div className="w-[50%] flex justify-center flex-col items-center">
          <p className="font-bold text-xl m-4">Last product created:</p>
          <div className="flex flex-col items-center shadow-xl  w-[80%] p-4 h-[200px] bg-white">
          <figure className="h-[70%] flex justify-center items-center ">
            <img 
            className="object-contain h-36"
              src={`${BASE_URL}/images/products/${lastProducts?.images[0].name}`}
              width={50}
            />
    
    </figure>
            <p className="font-bold">{lastProducts?.name}</p>
            <p className="text-green-600 font-bold">${lastProducts?.price}</p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-center">
      <p className="font-bold text-[1.5em] my-9 ml-4">Product list:</p>
        </div>
        <div className="flex justify-evenly items-center gap-4 flex-wrap ">
          {products.map((product) => {
            return (
              <div className="flex flex-col items-center shadow-xl w-[20%]  p-4 h-[300px] rounded-md bg-white" key={product.id} >
                <figure className="h-[70%] flex justify-center items-center ">
                <img
                className="object-contain h-36"
                  src={`${BASE_URL}/images/products/${product.images[0].name}`}
                  alt={product.name}
                  />
                </figure>
                <p>{product.name}</p>
                <p>{product.brands.name}</p>
                <p>Stock: {product.stock}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
