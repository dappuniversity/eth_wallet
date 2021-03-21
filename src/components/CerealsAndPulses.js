import React from 'react';
import Product from "./Product";
import Grid from '@material-ui/core/Grid';
import CerealsAndPulsesList from "./CerealsAndPulsesList";

function CerealsAndPulses() {
    return (
        <div>
            <h1 className="text-center mt-4 heading">Cereals & Pulses</h1>

            <Grid container>
               {
                   CerealsAndPulsesList.map((eachProduct,index)=>{
                    return <Product key={index} product={eachProduct} />
                   })
               }
            </Grid>
        </div>
    )
}

export default CerealsAndPulses;