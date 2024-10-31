import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const TransactionDetailScreen = ({ route }) => {
  const { transaction } = route.params;

  return (
    <LinearGradient colors={['#ffdfba', '#ffb3ba']} style={styles.container}>
      <Text style={styles.title}>Transaction Detail</Text>
      <Text style={styles.detailText}>Name: {transaction.name}</Text>
      <Text style={styles.detailText}>Amount: ${transaction.amount}</Text>
      <Text style={styles.detailText}>Date: {transaction.date}</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, color: '#5B4E77', marginBottom: 20 },
  detailText: { fontSize: 18, color: '#5B4E77', marginBottom: 10 },
});

export default TransactionDetailScreen;
