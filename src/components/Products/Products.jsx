import React from "react";
import {Grid} from "@material-ui/core"
import Product from "./Product/Product"
const products =[
    {id: 1, name: "Shoes", description: "Running shoes.", price: "$5",image:"https://i.ibb.co/Qp1SXBw/commerce.png"},
    {id: 2, name: "Macbook", description: "Apple macbook.",price:"$10",image:"https://i.ibb.co/Qp1SXBw/commerce.png"},
]

const Products = ()=>{
    return(  <main>
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