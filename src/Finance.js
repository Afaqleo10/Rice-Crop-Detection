import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useWindowDimensions } from 'react-native';

const IncomeScreen = () => {
  const [incomeList, setIncomeList] = useState([]);
  const [income, setIncome] = useState('');

  const addIncome = () => {
    if (income) {
      setIncomeList([...incomeList, income]);
      setIncome('');
    }
  };

  return (
    <View style={styles.tabContainer}>
      <FlatList
        data={incomeList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Income"
        value={income}
        onChangeText={setIncome}
      />
      <TouchableOpacity style={styles.addButton} onPress={addIncome}>
        <Text style={styles.buttonText}>Add Income</Text>
      </TouchableOpacity>
    </View>
  );
};

const ExpensesScreen = () => {
  const [expenseList, setExpenseList] = useState([]);
  const [expense, setExpense] = useState('');

  const addExpense = () => {
    if (expense) {
      setExpenseList([...expenseList, expense]);
      setExpense('');
    }
  };

  return (
    <View style={styles.tabContainer}>
      <FlatList
        data={expenseList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Expense"
        value={expense}
        onChangeText={setExpense}
      />
      <TouchableOpacity style={styles.addButton} onPress={addExpense}>
        <Text style={styles.buttonText}>Add Expense</Text>
      </TouchableOpacity>
    </View>
  );
};

const ProfitsScreen = () => {
  const [profitsList, setProfitsList] = useState([]);
  const [profit, setProfit] = useState('');

  const addProfit = () => {
    if (profit) {
      setProfitsList([...profitsList, profit]);
      setProfit('');
    }
  };

  return (
    <View style={styles.tabContainer}>
      <FlatList
        data={profitsList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Profit"
        value={profit}
        onChangeText={setProfit}
      />
      <TouchableOpacity style={styles.addButton} onPress={addProfit}>
        <Text style={styles.buttonText}>Add Profit</Text>
      </TouchableOpacity>
    </View>
  );
};

const Finance = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'income', title: 'Income' },
    { key: 'expenses', title: 'Expenses' },
    { key: 'profits', title: 'Profits' },
  ]);

  const renderScene = SceneMap({
    income: IncomeScreen,
    expenses: ExpensesScreen,
    profits: ProfitsScreen,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          style={styles.tabBar}
          labelStyle={styles.tabLabel}
          indicatorStyle={styles.tabIndicator}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: 'light gray',
  },
  listItem: {
    fontSize: 16,
    marginVertical: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  addButton: {
    backgroundColor: 'grey',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tabBar: {
    backgroundColor: 'lightgray',
  },
  tabLabel: {
    color: 'black',
    fontSize: 16,
  },
  tabIndicator: {
    backgroundColor: 'blue',
  },
});

export default Finance;
