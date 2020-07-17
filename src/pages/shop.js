import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ShoeDataContext } from "../context/globalContext";

function Shop() {
  const { shoes } = useContext(ShoeDataContext);
  return (
    <>
      <h2 className="text-primary text-center text-4xl ">Products</h2>

      <div className="mx-2 mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {shoes.map((shoes) => (
          <div
            key={shoes.id}
            className="shoe-card bg-secondary-200 rounded mx-2 my-2"
          >
            <div className="rounded overflow-hidden">
              <img
                className="shop-img w-full"
                src={shoes.image}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4 text-primary text-center">
                <div className="font-bold  text-2xl mb-2">{shoes.shoeName}</div>
                <p className="text-white text-base">{shoes.price}.0 Rs</p>
              </div>
              <div className="flex pb-4 justify-center">
                <Link
                  to={`${shoes.slug}`}
                  className="transition duration-500 border-primary border-2 bg-primary text-secondary-100 text-sm px-8 py-1 rounded hover:border-2 hover:bg-secondary-100 hover:text-primary"
                >
                  Buy
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Shop;
