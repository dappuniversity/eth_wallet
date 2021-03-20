import React from 'react';
import { CanvasJSChart } from 'canvasjs-react-charts';

class StatisticsBar extends React.Component {
    render()
    {
        const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", //"light1", "dark1", "dark2"
			title:{
				text: "Transaction Amount(in INR) V/S Category"
			},
			axisY: {
				includeZero: true
			},
			data: [{
				type: "column", //change type to bar, line, area, pie, etc
				indexLabelFontColor: "#5A5757",
				indexLabelPlacement: "outside",
				dataPoints: [
					{ label: "Cereal And Pulses", y: 4000 },
					{ label: "Fruits", y: 2245 },
					{ label: "Vegetables", y: 2030 }
				]
			}]
    }

    return (
        <CanvasJSChart options = {options}/>
    )
}
}
export default StatisticsBar;