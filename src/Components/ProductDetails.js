import React from "react";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
    const shoes = {
         "ND-WF-0003":{
          name: "Service big shoe",
          img:
            "http://www.servis.com/wp-content/uploads/2019/11/ND-WF-0003-Navy-01-510x340.jpg",
        },
          "ND-WF-0002":
          {name: "Service grey shoe",
          img:
            "http://www.servis.com/wp-content/uploads/2019/11/ND-WF-0002-Espresso-01-510x340.jpg",
        },
        "ND-ST-0108":
          {  name: "sasty shoes" ,
            img : "http://www.servis.com/wp-content/uploads/2019/11/ND-ST-0108-Blue-01.jpg"},
    };
    const {productId}= useParams();
    const product= shoes[productId];
    const {name,img}=product;

  return (
    <div>
      <h3>Product Details</h3>
      <div>
          Name : {name} <br/>
          <img src={img} alt={name} style={{width:"40%"}}/>
      </div>
    </div>
  );
};
