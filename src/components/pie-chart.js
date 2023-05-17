import React from 'react';
import Chart from "react-apexcharts";

import '../css/App.css';
import '../css/pie-chart.css';


const PieChart = ({data}) => {

    return ( 
        <>
            <div className='flex-column pc-container'>
                <span>teste</span>
                <Chart
                    type='pie'
                    width={'100%'}

                    // Inserir valores do gráfico aqui apenas números.
                    series={data.map((item, key)=>{ return item.value; })}

                    options={{
                        // Inserir nome das variáveis aqui
                        labels:data.map((item, key)=>{ return item.name; })
                    }}


                />
            </div>  
        </>
     );
}
 
export default PieChart;