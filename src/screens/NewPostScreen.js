import React from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import styled from 'styled-components/native';
import Header from '../components/Header';
import color from '../theme/color';

const isPlatformIOS = Platform.OS === 'ios';

const TitleInput = styled.TextInput`
  backgroundColor: ${color.white};
  borderRadius: 4px;
  fontWeight: 500;
  fontSize: 24;
  padding: 8px;
`;

const DescriptionInput = styled.TextInput`
  marginTop: 20px;
  padding: 8px;
  backgroundColor: ${color.white};
  borderRadius: 4px;
  fontSize: 14;
  height: 200px;
`;

const SubmitButton = styled.TouchableOpacity`
  backgroundColor: ${color.greyDark};
  height: 48px;
  alignItems: center;
  justifyContent: center;
`;

const SubmitButtonText = styled.Text`
  color: ${color.white};
  fontWeight: 500;
`;

class NewPostScreen extends React.Component {
  handleBuyNow = () => {
    const { navigation: { state: { params } } } = this.props;
    alert(`Handle buy now for ${params.title}`);
  }

  handleSubmitPost = () => {
    const { navigation } = this.props;
    alert('Post submit here');
    navigation.goBack();
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        keyboardVerticalOffset={isPlatformIOS ? 18 : 0}
      >
        <Header />
        <View style={styles.content}>
          <TitleInput
            placeholder="Your awesome title..."
            underlineColorAndroid="transparent"
            autoFocus
            onSubmitEditing={() => this.descriptionRef.focus()}
            returnKeyType="next"
          />
          <DescriptionInput
            innerRef={(x) => { this.descriptionRef = x; }}
            placeholder="Put that Ipsum here..."
            underlineColorAndroid="transparent"
            multiline
          />
        </View>
        <SubmitButton onPress={this.handleSubmitPost}>
          <SubmitButtonText>
            Create Post
          </SubmitButtonText>
        </SubmitButton>
      </KeyboardAvoidingView>
    );
  }
}

export default NewPostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.greyLighter,
  },
  content: {
    padding: 16,
    flex: 1,
  },
});
