import React, { useEffect, useState } from 'react';
import Product from "./Product";
import Grid from '@material-ui/core/Grid';
import productList from "./productList.js";


function Fruits() {

    const [fruitList,setFruitList] = useState([]);

    useEffect(() => {
        filterProduct();
    }, [])

    function checkFruits(product) {
        return product.category==="fruits";
    }

    function filterProduct() {
        setFruitList(productList.filter(checkFruits));
    }

    return (
        <div>
            <h1 className="text-center mt-4 heading">Fruits</h1>
            <Grid container>
            {
                
                fruitList.map((eachProduct,index)=>{
                    return <Product key={index} product={eachProduct} />
                   })
            }
            </Grid>
        </div>
        
    )
}

export default Fruits;