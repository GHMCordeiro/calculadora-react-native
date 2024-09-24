import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const Calculator = () => {
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');
  const [result, setResult] = useState('');

  const calculate = (operation) => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(secondValue);
    
    if (isNaN(num1) || isNaN(num2)) {
      setResult('Error');
      return;
    }

    let calculation;
    switch (operation) {
      case '+':
        calculation = num1 + num2;
        break;
      case '-':
        calculation = num1 - num2;
        break;
      case '*':
        calculation = num1 * num2;
        break;
      case '/':
        calculation = num2 !== 0 ? num1 / num2 : 'Error';
        break;
      default:
        return;
    }
    setResult(calculation.toString());
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Primeiro número"
        keyboardType="numeric"
        value={firstValue}
        onChangeText={setFirstValue}
      />
      <TextInput
        style={styles.input}
        placeholder="Segundo número"
        keyboardType="numeric"
        value={secondValue}
        onChangeText={setSecondValue}
      />
      <Text style={styles.result}>{result}</Text>
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={() => calculate('+')} />
        <Button title="-" onPress={() => calculate('-')} />
        <Button title="*" onPress={() => calculate('*')} />
        <Button title="/" onPress={() => calculate('/')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '80%',
    padding: 10,
  },
  result: {
    fontSize: 30,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default Calculator;
