import React from 'react';
import Product from "./Product";
import Grid from '@material-ui/core/Grid';
import FruitsList from "./FruitsList";

function Fruits() {
    return (
        <div>
            <h1 className="text-center mt-4 heading">Fruits</h1>
            <Grid container>
            {
                FruitsList.map((eachProduct,index)=>{
                    return <Product key={index} product={eachProduct} />
                })
            }
            </Grid>
        </div>
        
    )
}

export default Fruits;