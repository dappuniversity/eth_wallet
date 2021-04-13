import React, { useEffect, useState } from 'react';
import Product from "./Product";
import Grid from '@material-ui/core/Grid';
import productList from "./productList.js";

function Vegetables() {
    const [vegetableList,setVegetableList] = useState([]);

    useEffect(() => {
        filterProduct();
    }, [])

    function checkVegetables(product) {
        return product.category==="vegetables";
    }

    function filterProduct() {
        setVegetableList(productList.filter(checkVegetables));
    }

    return (
        <div>
            <h1 className="text-center mt-4 heading">Vegetables</h1>

            <Grid container>
               {
                   vegetableList.map((eachProduct,index)=>{
                    return <Product key={index} product={eachProduct} />
                   })
               }
            </Grid>
        </div>
    )
}

export default Vegetables;