import React, { useEffect, useState } from 'react';
import Product from "./Product";
import Grid from '@material-ui/core/Grid';
import productList from "./productList";

function CerealsAndPulses() {

    const [pulsesList,setPulsesList] = useState([]);

    useEffect(() => {
        filterProduct();
    }, [])

    function checkPulses(product) {
        return product.category==="cereals & pulses";
    }

    function filterProduct() {
        setPulsesList(productList.filter(checkPulses));
    }

    return (
        <div>
            <h1 className="text-center mt-4 heading">Cereals & Pulses</h1>

            <Grid container>
               {
                pulsesList.map((eachProduct,index)=>{
                    return <Product key={index} product={eachProduct} />
                   })
               }
            </Grid>
        </div>
    )
}

export default CerealsAndPulses;