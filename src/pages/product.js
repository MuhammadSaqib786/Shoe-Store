import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";

import { ShoeDataContext } from "../context/globalContext";

function Product() {
  const { shoes } = useContext(ShoeDataContext);
  const { slug } = useParams();

  const shoeData = shoes.filter((shoe) => shoe.slug === slug);

  return (
    <>
      {shoeData.map((shoe) => (
        <div key={shoe.id} className=" my-4 mx-4 ">
          <div className="flex justify-center w-full">
            <img src={shoe.image} alt="Product 1" />
          </div>
          <div className="col-span-2 bg-secondary-200 rounded text-white p-10">
            <h2 className="text-primary text-2xl border-primary border-b-2 mb-4">
              {shoe.shoeName}
            </h2>
            <p className="pt-4 text-primary text-2xl">Price: {shoe.price}.0 rs</p>
            <p className="py-2">{shoe.description}</p>

            <Link
              to="/shop"
              className="mt-2  mr-2 transition duration-500 border-primary border-2 bg-primary text-secondary-100 text-lg px-4 py-2 rounded  hover:border-2 hover:bg-secondary-100 hover:text-primary"
            >
              <i className="fa fa-chevron-left" aria-hidden="true"></i> Back
            </Link>
            <button className="mt-2  transition duration-500 border-primary border-2 bg-primary text-secondary-100 text-lg px-4 py-2 rounded  hover:border-2 hover:bg-secondary-100 hover:text-primary">
              Add to Cart
              <i className="fa fa-cart-plus pl-2" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Product;
