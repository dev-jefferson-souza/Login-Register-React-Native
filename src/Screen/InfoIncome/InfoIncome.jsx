
import { Text, View } from 'react-native';
import { PieChart } from '../../components/PieChart/PieChart'
import React, { useState } from 'react';
import { style } from './styles'

export const InfoIncome = () => {

  const [dataExpense, setDataExpense] = useState([{
    x: 'Internet',
    y: 150.00,
  }, {
    x: 'Aluguel',
    y: 800.00,
  },
  , {
    x: 'Netflix',
    y: 39.90
  }, {
    x: 'Alimentação',
    y: 500.00
  }, {
    x: 'Pets',
    y: 120
  }, {
    x: 'Amazon Prime',
    y: 14.90
  }
]);

const [dataIncome, setDataIncome] = useState([{
  x: 'Salário',
  y: 200,
}, {
  x: 'Horas extras',
  y: 220,
}, {
  x: 'Renda passiva',
  y: 140
}, {
  x: 'Criptomoeda',
  y: 450
}
]); 

return (
    <View style={style.container}>
      <Text style={style.title}>Movimentação de conta</Text>
      <View style={style.pieContainer}>
        <Text style={style.pieName}>Receita</Text>
        <PieChart
          isIncome={true}
          data= {dataIncome}
        />  
      </View>
      <View style={style.pieContainer}>
        <Text style={style.pieName}>Despesas</Text>
        <PieChart
          isIncome={false}
          data= {dataExpense}
        />
      </View>
    </View>
  );
}


