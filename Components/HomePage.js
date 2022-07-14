import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import Context from "../Context/context";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newBook: "",
    };
  }

  static contextType = Context;

  render() {
    return (
      <View>
        <View style={styles.top}>
          <Text style={styles.topTitle}>Livraria</Text>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={(x) => {
            this.setState({ newBook: x });
          }}
          placeholder="Pesquisar "
        />
        <Button title="Pesquisar" onPress={() => this.context.search()} />
        <TextInput
          style={styles.input}
          onChangeText={(x) => {
            this.setState({ newBook: x });
          }}
          placeholder=" Adicionar"
        />
        <Button
          title="Adicionar"
          onPress={() => this.context.addNewBook(this.state.newBook)}
        ></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  top: {
    padding: 20,
    paddingTop: 40,
    marginBottom: 20,
    backgroundColor: "#5671A8",
  },
  topTitle: {
    fontSize: 22,
    marginBottom: 10,
    color: "#fff",
    textAlign: "center",
  },
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 30,
  },
  input: {
    borderWidth: 2,
    borderColor: "#000",
    height: 40,
    textAlign: "center",
    marginBottom: 12,
    marginTop: 10,
  },
});
