import React from "react";
import Context from "./context";
import { Text } from "react-native";

export default class GlobalState extends React.Component {
  state = {
    books: [],
  };

  search = () => {
    const endpoint = `https://hn.algolia.com/api/v1/search?query=/`;

    fetch(endpoint)
      .then((resposta) => resposta.json())
      .then((data) => {
        this.setState({ books: this.state.books.concat(data.hits) });
      });
  };

  addNewBook = (book) => {
    const list = [...this.state.books, book];
    this.setState({ books: list });
  };

  deleteBook = (taskId) => {
    this.setState(this.state.books.splice(taskId, 1));
  };

  render() {
    return (
      <Context.Provider
        value={{
          books: this.state.books.map((topic) => (
            <Text key={topic.objectID}>
              {topic.title} {topic.url}
            </Text>
          )),
          search: this.search,
          addNewBook: this.addNewBook,
          deleteBook: this.deleteBook,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
