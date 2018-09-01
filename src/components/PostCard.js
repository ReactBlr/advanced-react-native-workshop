import React from 'react';
import styled from 'styled-components/native';
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

class PostCard extends React.Component {
  handleOnCardPress = () => {
    const { post, navigation } = this.props;
    navigation.navigate('SinglePost', post);
  }

  render() {
    const { post } = this.props;
    const { title, description } = post;
    const summary = description.length < 200
      ? description : `${description.slice(0, 200)}...`;

    return (
      <Card
        onPress={this.handleOnCardPress}
        onLongPress={this.handleLongCardPress}
      >
        <Title numberOfLines={1}>
          {title}
        </Title>
        <Summary>
          {summary}
        </Summary>
      </Card>
    );
  }
}

export default PostCard;
