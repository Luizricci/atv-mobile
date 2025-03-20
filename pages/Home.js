import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Persistência e Navegação</Text>
      <TextInput style={styles.input} placeholder="Digite algo" />
      <Text style={styles.textRed}>Sem persistência: Nenhum texto Salvo</Text>
      <Text style={styles.textGreen}>Texto persistido: Nenhum texto Salvo</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Salvar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Limpar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Detalhes")}>
        <Text style={styles.textButton}>Detalhes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
  },
  input: {
    height: 40,
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 30,
    padding: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    marginTop: 20,
    width: 300,
    display: "flex",
    alignItems: "center",
    borderRadius: 10,
  },
  textButton: {
    color: "white",
  },
  textRed: {
    color: "red",
    marginTop: 20,
    fontSize: 20,
  },
  textGreen: {
    color: "green",
    marginTop: 20,
    fontSize: 20,
  },
});
