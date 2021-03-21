import React from 'react';
import Product from "./Product";
import Grid from '@material-ui/core/Grid';
import VegetablesList from "./VegetablesList";

function Vegetables() {
    return (
        <div>
            <h1 className="text-center mt-4 heading">Vegetables</h1>

            <Grid container>
               {
                   VegetablesList.map((eachProduct,index)=>{
                    return <Product key={index} product={eachProduct} />
                   })
               }
            </Grid>
        </div>
    )
}

export default Vegetables;