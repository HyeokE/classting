import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import { ArcElement, Chart, Legend, Tooltip } from 'chart.js';
import type { ChartData } from 'chart.js';

type DoughnutChartProps = {
  data: ChartData<'doughnut', number[], string>;
  width?: number;
  height?: number;
};
const DoughnutChart = ({ ...rest }: DoughnutChartProps) => {
  Chart.register(ArcElement, Tooltip, Legend);
  return (
    <Doughnut
      {...rest}
      style={{
        paddingBottom: '10px',
      }}
      options={{
        responsive: false,
      }}
    />
  );
};

export default DoughnutChart;
