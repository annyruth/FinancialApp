import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const TransactionsListScreen = ({ navigation }) => {
  const [transactions] = useState([
    { id: '1', name: 'Groceries', amount: 50, date: '2023-10-01' },
    { id: '2', name: 'Rent', amount: 500, date: '2023-10-01' },
    { id: '3', name: 'Utilities', amount: 100, date: '2023-10-02' },
  ]);

  return (
    <LinearGradient colors={['#ffb3ba', '#ffdfba']} style={styles.container}>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.transaction}
            onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}
          >
            <Text style={styles.textName}>{item.name}</Text>
            <Text style={styles.textAmount}>${item.amount}</Text>
            <Text style={styles.textDate}>{item.date}</Text>
          </TouchableOpacity>
        )}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  transaction: {
    backgroundColor: '#FCE1E4',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  textName: { fontSize: 18, color: '#5B4E77' },
  textAmount: { fontSize: 16, color: '#ffb3ba', fontWeight: 'bold' },
  textDate: { fontSize: 14, color: '#5B4E77' },
});

export default TransactionsListScreen;
