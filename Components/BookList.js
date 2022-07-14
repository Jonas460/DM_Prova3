import { Container } from "native-base";
import React, { Component } from "react";
import { View, StyleSheet, FlatList, Text, SafeAreaView } from "react-native";
import Context from "../Context/context";

export default class BooksList extends Component {
  static contextType = Context;

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.context.books}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.cardContainer}>
                <Text>
                  <Text style={styles.title}>Title: </Text>
                  <Text style={styles.text}>{item}</Text>
                </Text>
                <Text
                  style={styles.buttonDelete}
                  onPress={() => {
                    this.context.deleteBook(index);
                  }}
                >
                  Apagar
                </Text>
              </View>
            );
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  cardContainer: {
    backgroundColor: "#5671A8",
    borderRadius: 4,
    marginTop: 10,
    marginHorizontal: 20,
    padding: 10,
  },
  text: {
    fontSize: 16,
    color: "#fff",
  },
  title: {
    fontWeight: "700",
    color: "#ffffff",
  },
  buttonDelete: {
    alignSelf: "flex-end",
    padding: 8,
    fontSize: 15,
    color: "#c2c2c2",
  },
});
