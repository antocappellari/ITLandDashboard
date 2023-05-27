import { useState, useEffect } from "react";

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    fetch("http://localhost:3001/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.data));
  };
  console.log(products);
  return (
    <div>
      <div>
        <p>cantidad: {products.length}</p>
      </div>
      <div>last product create</div>
      <div>
        list products:
        <div>{
            products.map(product => {
                return <p key={product.id}>{product.name}</p>
            })
            }</div>
      </div>
    </div>
  );
};

// background-color: #242424;
