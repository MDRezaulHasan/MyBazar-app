import React from "react";
import {Grid} from "@material-ui/core"
import Product from "./Product/Product"
import imageMacbook from "../../image/img-1.jpg"
import imagePhone from "../../image/img-2.jpg"
import useStyles from "./styles"

const products =[
    {id: 1, name: "Phone", description: "Samsung Phone.", price: "$5",image:imagePhone},
    {id: 2, name: "Macbook", description: "Apple macbook.",price:"$10",image:imageMacbook},
]

const Products = ()=>{
    const classes = useStyles();

    return(  <main className= {classes.content}>
        <div className={classes.toolbar}/>
        <Grid container justify = "center" spacing = {4}>
            {products.map((product)=>(
                //here we are mapping with our products and mentioning our grid view in different size. xs = full width, sm= 2 space in one row, md= medium, lg = large
                <Grid item key = {product.id} xs={12} sm={6} md={4}>
                    <Product product = {product}/>
                </Grid>
            ))}

        </Grid>
    </main>)
  
}

export default Products;