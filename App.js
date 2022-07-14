import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import BookList from "./Components/BookList";
import HomePage from "./Components/HomePage";
import GlobalState from "./Context/GlobalState";

export default class App extends React.Component {
  render() {
    return (
      <GlobalState>
        <View style={styles.container}>
          <HomePage />
          <BookList />
        </View>
      </GlobalState>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
