import { useState, useEffect } from "react";
const BASE_URL = "http://localhost:3001";

export const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = () => {
    fetch(BASE_URL + "/api/users")
      .then((response) => response.json())
      .then((data) => setCategories(data.data));
  };
  return (
      <div className="w-full">
      <div className="flex justify-center">
        <p className="font-bold text-[1.5em] my-9 ml-4">Categories:</p>
      </div>
        <div className="flex justify-evenly items-center gap-4 flex-wrap ">
          {categories.map((category) => {
            return (
              <div className="flex flex-col items-center shadow-xl w-[20%]  p-4 h-[300px] rounded-md bg-white" key={category.id} >
                <p>{category.name}</p>
                <p>Total productos</p>
              </div>
            );
          })}
        </div>
      </div>
  );
};
