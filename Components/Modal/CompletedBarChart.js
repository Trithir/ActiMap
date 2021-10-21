import React, { useState, useEffect } from "react";
import { StackedBarChart } from "react-native-chart-kit";
import { View, Text } from "native-base";
import { Dimensions, StyleSheet } from "react-native";
import { StackedGraphTypeData } from "../DataFunctions";

export default function BarChart(props) {
  const [stackGraphData, setstackGraphData] = useState([])

  useEffect(() => {
    let isMounted = true;
    StackedGraphTypeData(props.date)
    .then(data => {
      if (isMounted) 
      setstackGraphData(data)
    });
    return () => { isMounted = false };
  }, [])

return (
  <View styles={styles.container}>
    <Text style={styles.header}>Weekly Totals</Text>
    <StackedBarChart
      data={{
        labels: ['Wk 1', 'Wk 2', 'Wk 3', 'Wk 4'],
        legend: ['P', 'M', 'I'],
        data: stackGraphData,
        barColors: ['#ff7160', '#4bfffb', '#c8ff13'],
      }}
      width={Dimensions.get('window').width - 80}
      height={220}
      // verticalLabelRotation={0}
      verticalLabel='Total Completed'
      chartConfig={{
        backgroundColor: '#1cc910',
        backgroundGradientFrom: '#eff3ff',
        backgroundGradientTo: '#efefef',
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
          borderRadius: 16,
        },
      }}
      style={{
        marginVertical: 2,
        borderRadius: 16,
      }}
    />
  </View>
);
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  header: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 4,
  },
});