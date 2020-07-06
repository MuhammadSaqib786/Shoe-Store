import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";

export const ProductIndex = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
      }));
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
        {
            id:"ND-ST-0108",
            name: "sasty shoes" ,
            img : "http://www.servis.com/wp-content/uploads/2019/11/ND-ST-0108-Blue-01.jpg"
        },
      ];
  return <div>
      <Grid container spacing={3}>
      {shoes.map(item => <Grid item xs={4}><li key={item.id}><Link to={item.id}><h3>{item.name}</h3><img src={item.img} alt={item.name} style={{width:"100%"}}/></Link></li></Grid>)}
      </Grid>
  </div>;
};
