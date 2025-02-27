import React, { useEffect } from "react";
import {View, Text, StyleSheet} from "react-native";

export default function Detalhes() {
    return(
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes</Text>
      <Text style={styles.subTitle}>Sem persistência: Nenhum texto Salvo</Text>
      <Text style={styles.subTitle2}>Texto persistido: Nenhum texto Salvo</Text>
    </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    textDecorationLine: "underline",
  },
  subTitle: {
    marginTop: 20,
    fontSize: 20,
    color: "red",
    marginTop: 200,
  },
  subTitle2: {
    marginTop: 20,
    fontSize: 20,
    color: "green",
  },
});