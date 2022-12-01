import { View } from 'react-native';
import React from 'react';

import { VictoryPie } from 'victory-native';

export const PieChart = ({isIncome, data}) => {
  //Cores gráfico
  const incomeColor = ['#3498DB', '#CB4335', '#F1C40F', '#27AE60', '#A569BD', '#D7DBDD', '#85929E'];
  const expenseColor = ['#C0392B', '#990000', '#CB4335', '#CD6155', '#7f0000', '#330000' ]

  return (
    <VictoryPie
      animate={{ easing: 'exp' }}
      data={data}
      width={350}
      height={200}
      colorScale={isIncome === true ? incomeColor : expenseColor}
      innerRadius={50}
      padding={62}
      startAngle={80}
      endAngle={440}
    />
  );
}