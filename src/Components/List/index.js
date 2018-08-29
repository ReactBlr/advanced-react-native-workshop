import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  TextInput,
  Dimensions,
  ActivityIndicator
} from "react-native";

const { width, height } = Dimensions.get("window");

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = async () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      this.setState({
        data: page === 1 ? data.results : [...this.state.data, ...data.results],
        error: data.error || null,
        loading: false,
        refreshing: false
      });
    } catch (error) {
      this.setState({ error, loading: false });
    }
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  renderHeader = () => {
    return (
      <View
        style={{ alignItems: "center", padding: 10, backgroundColor: "#fff" }}
      >
        <TextInput
          style={{
            flex: 1,
            width: width / 1.1,
            borderWidth: 1,
            borderRadius: 15
          }}
          underlineColorAndroid={"transparent"}
          placeholder={"Search"}
        />
      </View>
    );
  };

  renderFooter = () => {
    if (!this.state.loading) return null;
    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size={"large"} />
      </View>
    );
  };

  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={({ item }) => {
          console.log(item, "🎉🎉🎉");
          return (
            <View style={{ flexDirection: "row", flex: 1 }}>
              <Image
                width={25}
                height={25}
                source={{ uri: item.picture.thumbnail }}
                resizeMethod={"resize"}
              />
              <View>
                <Text>{`${item.name.first} ${item.name.last}`}</Text>
                <Text>{item.email}</Text>
              </View>
            </View>
          );
        }}
        keyExtractor={item => item.email}
        ItemSeparatorComponent={this.renderSeparator}
        ListHeaderComponent={this.renderHeader}
        ListFooterComponent={this.renderFooter}
        removeClippedSubviews={true}
      />
    );
  }
}

const styles = StyleSheet.create({});
