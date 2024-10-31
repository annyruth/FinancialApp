import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import TransactionsListScreen from './component/TransactionsListScreen';
import TransactionDetailScreen from './component/TransactionDetailScreen';
import SummaryScreen from './component/SummaryScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TransactionsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#E0BBE4' }, headerTintColor: '#5B4E77' }}>
      <Stack.Screen name="TransactionsList" component={TransactionsListScreen} options={{ title: 'Transactions' }} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen} options={{ title: 'Transaction Details' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Transactions') {
              iconName = focused ? 'list-circle' : 'list-circle-outline';
            } else if (route.name === 'Summary') {
              iconName = focused ? 'pie-chart' : 'pie-chart-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#ffb3ba',
          tabBarInactiveTintColor: '#5B4E77',
          tabBarStyle: { backgroundColor: '#D5CFE1' },
        })}
      >
        <Tab.Screen name="Transactions" component={TransactionsStack} />
        <Tab.Screen name="Summary" component={SummaryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
