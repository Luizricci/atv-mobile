import React, {useEffect} from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Persistência e Navegação</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
      />
      <Text>Sem persistência: Nenhum texto Salvo</Text>
      <Text>Texto persistido: Nenhum texto Salvo</Text>
      <TouchableOpacity style={styles.button}>
        <Text>Salvar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text>Limpar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text>Detalhes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    marginTop: 10,
  },
});