import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const SummaryScreen = () => {
  const transactions = [
    { id: '1', name: 'Groceries', amount: 50 },
    { id: '2', name: 'Rent', amount: 500 },
    { id: '3', name: 'Utilities', amount: 100 },
  ];

  const totalAmount = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);

  return (
    <LinearGradient colors={['#C4E8E3', '#ffb3ba']} style={styles.container}>
      <Text style={styles.title}>Summary</Text>
      <Text style={styles.totalText}>Total Expenses: ${totalAmount}</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, color: '#5B4E77', marginBottom: 16 },
  totalText: { fontSize: 22, color: '#ffffdc', fontWeight: 'bold' },
});

export default SummaryScreen;
