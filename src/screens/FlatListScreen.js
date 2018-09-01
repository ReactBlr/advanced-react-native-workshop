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
      filteredData: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
    };
  }

  componentDidMount() {
    this.setState({ loading: true }, () => this.makeRemoteRequest());
  }

  makeRemoteRequest = async () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(this.state);
      this.setState(
        {
          data:
            page === 1 ? data.results : [...this.state.data, ...data.results],
          error: data.error || null,
          loading: false,
          refreshing: false
        },
        () => this.searchFilterFunction("")
      );
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
          onChangeText={text => this.searchFilterFunction(text)}
        />
      </View>
    );
  };

  renderFooter = () => {
    if (this.state.loading && this.state.data.length !== 0) {
      return (
        <View
          style={{
            paddingVertical: 20,
            borderTopWidth: 1,
            borderColor: "#CED0CE",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <ActivityIndicator animating size={"large"} />
        </View>
      );
    }
    return null;
  };

  searchFilterFunction = text => {
    const newData = this.state.data.filter(item => {
      const itemData = `${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({ filteredData: newData });
  };

  handleRefresh = () => {
    this.setState({ refreshing: true, seed: Math.random() }, () =>
      this.makeRemoteRequest()
    );
  };

  handleOnEndReached = () => {
    console.log("inside on end reached");
    this.setState(
      (state, props) => {
        return { loading: true, page: state.page + 1 };
      },
      () => this.makeRemoteRequest()
    );
  };

  render() {
    return (
      <FlatList
        data={this.state.filteredData}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                backgroundColor: "#fff"
              }}
            >
              <Image
                style={{ width: 40, height: 40, borderRadius: 20, margin: 5 }}
                source={{ uri: item.picture.thumbnail }}
                resizeMethod={"resize"}
              />
              <View style={{ justifyContent: "center", marginLeft: 5 }}>
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
        ListEmptyComponent={<ActivityIndicator animating size={"large"} />}
        extraData={this.state.filteredData}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh}
        onEndReachedThreshold={0.9}
        onEndReached={this.handleOnEndReached}
        stickyHeaderIndices={[2, 4]}
      />
    );
  }
}

const styles = StyleSheet.create({});
