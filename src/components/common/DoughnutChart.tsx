import React, { useEffect, useRef } from 'react';

import type { ChartData } from 'chart.js';
import Chart from 'chart.js/auto';

type DoughnutChartProps = {
  data: ChartData<'doughnut', number[], string>;
  width?: number;
  height?: number;
};
const DoughnutChart = ({ ...rest }: DoughnutChartProps) => {
  const canvasDom = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!canvasDom.current) {
      return;
    }
    const ctx = canvasDom.current;

    const myChart = new Chart(ctx, {
      type: 'pie',
      data: rest.data,
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div>
      <canvas ref={canvasDom} id={'chart'}></canvas>
    </div>
  );
};

export default DoughnutChart;
