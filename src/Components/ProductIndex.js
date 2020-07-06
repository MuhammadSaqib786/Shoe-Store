import React from "react";
import { Link } from "react-router-dom";

export const ProductIndex = () => {
    const shoes = [
        {
          id: "ND-WF-0003",
          name: "Service big shoe",
          img:
            "http://www.servis.com/wp-content/uploads/2019/11/ND-WF-0003-Navy-01-510x340.jpg",
        },
        {
          id: "ND-WF-0002",
          name: "Service grey shoe",
          img:
            "http://www.servis.com/wp-content/uploads/2019/11/ND-WF-0002-Espresso-01-510x340.jpg",
        },
      ];
  return <div>
      {shoes.map(item => <li key={item.id}><Link to={item.id}><h3>{item.name}</h3><img src={item.img} alt={item.name}/></Link></li>)}
  </div>;
};
