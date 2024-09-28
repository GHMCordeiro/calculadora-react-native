import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Calculator from './components/calculator';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Calculator />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Use flexGrow para garantir que o ScrollView ocupe a altura necessária
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
