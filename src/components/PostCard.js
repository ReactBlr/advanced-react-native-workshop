import React from 'react';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import color from '../theme/color';

const Card = styled.TouchableOpacity`
  backgroundColor: ${color.greyLighter};
  marginTop: 16px;
  padding: 16px;
`;

const Title = styled.Text`
  fontWeight: 600;
  fontSize: 18;
  color: ${color.greyDarker};
  marginRight: 16px;
  flex: 4;
`;

const Summary = styled.Text`
  paddingTop: 8px;
  fontSize: 16;
  color: ${color.greyDark};
`;

const TitleContainer = styled.View`
  flexDirection: row;
  flex: 1;
  justifyContent: space-between;
  alignItems: center;
`;

const OptionsContainer = styled.View`
  flexDirection: row;
  flex: 2;
  justifyContent: space-between;
`;

const Option = styled.TouchableOpacity``;

Option.defaultProps = {
  hitSlop: { top: 2, right: 2, bottom: 2, left: 2 },
};

class PostCard extends React.Component {
  state = {
    isShowingOptions: false,
  };

  handleOnCardPress = () => {
    const { post, navigation } = this.props;
    navigation.navigate('SinglePost', post);
  }

  handleLongCardPress = () => {
    this.setState({ isShowingOptions: true });
  }

  handleCloseOption = () => {
    this.setState({ isShowingOptions: false });
  }

  handleEditOption = () => {
    const { post, navigation } = this.props;
    navigation.navigate('NewPost', post);
  }

  handleDeleteOption = () => {

  }

  render() {
    const { isShowingOptions } = this.state;
    const { post } = this.props;
    const { title, description } = post;
    const summary = description.length < 200
      ? description : `${description.slice(0, 200)}...`;

    return (
      <Card
        onPress={this.handleOnCardPress}
        onLongPress={this.handleLongCardPress}
      >
        <TitleContainer>
          <Title numberOfLines={1}>
            {title}
          </Title>
          {
            isShowingOptions ? (
              <OptionsContainer>
                <Option onPress={this.handleEditOption}>
                  <Ionicons name="pencil" size={16} color={color.green} />
                </Option>
                <Option onPress={this.handleDeleteOption}>
                  <Ionicons name="trash" size={16} color={color.red} />
                </Option>
                <Option onPress={this.handleCloseOption}>
                  <Ionicons name="close" size={16} />
                </Option>
              </OptionsContainer>
            ) : null
          }
        </TitleContainer>
        <Summary>
          {summary}
        </Summary>
      </Card>
    );
  }
}

export default PostCard;
