import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const Calculator = () => {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [result, setResult] = useState("");

  const calculate = (operation) => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(secondValue);

    if (isNaN(num1) || isNaN(num2)) {
      setResult("Error");
      return;
    }

    let calculation;
    switch (operation) {
      case "+":
        calculation = num1 + num2;
        break;
      case "-":
        calculation = num1 - num2;
        break;
      case "*":
        calculation = num1 * num2;
        break;
      case "/":
        calculation = num2 !== 0 ? num1 / num2 : "Error";
        break;
      default:
        return;
    }
    setResult(calculation.toString());
  };

  const handleChange1 = (text) => {
    // Remove qualquer caractere que não seja número
    const numericValue = text.replace(/[^0-9]/g, "");
    setFirstValue(numericValue);
  };

  const handleChange2 = (text) => {
    // Remove qualquer caractere que não seja número
    const numericValue = text.replace(/[^0-9]/g, "");
    setSecondValue(numericValue);
  };

  const clear = () => {
    setFirstValue("");
    setSecondValue("");
    setResult("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Caclculadora</Text>
      </View>

      <View style={styles.inputContainer}>
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
      </View>

      <Text style={styles.result}>{result}</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="+"
          onPress={() => calculate("+")}
          style={styles.button}
        />
        <Button
          title="-"
          onPress={() => calculate("-")}
          style={styles.button}
        />
        <Button
          title="*"
          onPress={() => calculate("*")}
          style={styles.button}
        />
        <Button
          title="/"
          onPress={() => calculate("/")}
          style={styles.button}
        />
      </View>
      <View style={styles.clearButton}>
        <Button
          title="Limpar"
          color="#FF0000"
          style={styles.clearButton}
          onPress={clear}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    width: "40%",
    padding: 10,
  },
  result: {
    fontSize: 30,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  button: {
    width: 80
  },
  clearButton: {
    marginTop: 50,
  },
  title: {
    marginBottom: 50,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 40,
  },
  inputContainer:{
    flexDirection: "row",
    justifyContent: "space-around"
  }
});

export default Calculator;
