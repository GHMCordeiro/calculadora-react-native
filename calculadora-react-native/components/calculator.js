import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

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
    const numericValue = text.replace(/[^0-9]/g, "");
    setFirstValue(numericValue);
  };

  const handleChange2 = (text) => {
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
        <Text style={styles.titleText}>Calculadora</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Primeiro número"
          keyboardType="numeric"
          value={firstValue}
          onChangeText={handleChange1} // Use o manipulador de texto correto
        />
        <TextInput
          style={styles.input}
          placeholder="Segundo número"
          keyboardType="numeric"
          value={secondValue}
          onChangeText={handleChange2} // Use o manipulador de texto correto
        />
      </View>

      <Text style={styles.result}>{result}</Text>

      <View style={styles.buttonContainer}>
        {["+", "-", "*", "/"].map((operation) => (
          <TouchableOpacity
            key={operation}
            style={styles.button}
            onPress={() => calculate(operation)}
          >
            <Text style={styles.buttonText}>{operation}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.clearButton}>
        <TouchableOpacity
          style={styles.clearButtonStyle}
          onPress={clear}
        >
          <Text style={styles.clearButtonText}>Limpar</Text>
        </TouchableOpacity>
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
    width: "30%",
    margin: '5%'
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
    backgroundColor: "blue", // Cor de fundo azul
    padding: 15,
    borderRadius: 5,
    width: 80,
    alignItems: "center",
    margin: 5,
  },
  buttonText: {
    color: "white", // Cor do texto
    fontSize: 24, // Tamanho do texto
    fontWeight: "bold", // Texto em negrito
  },
  clearButton: {
    marginTop: 50,
  },
  clearButtonStyle: {
    backgroundColor: "#FF0000", // Cor de fundo vermelho
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  clearButtonText: {
    color: "white", // Cor do texto do botão limpar
    fontSize: 24, // Tamanho do texto
    fontWeight: "bold", // Texto em negrito
  },
  title: {
    marginBottom: 50,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 40,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default Calculator;
