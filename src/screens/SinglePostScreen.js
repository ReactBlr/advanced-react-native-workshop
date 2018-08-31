import React from 'react';
import styled from 'styled-components/native';
import Header from '../components/Header';
import color from '../theme/color';

const Container = styled.View`
  flex: 1;
  backgroundColor: ${color.greyLighter};
`;

const Content = styled.ScrollView`
  padding: 16px;
`;

const Title = styled.Text`
  fontWeight: 600;
  fontSize: 24;
  color: ${color.greyDarker}
`;

const Description = styled.Text`
  marginTop: 24px;
  fontWeight: 500;
  fontSize: 16;
  marginBottom: 40px;
`;

class SinglePostScreen extends React.Component {
  handleBuyNow = () => {
    const { navigation: { state: { params } } } = this.props;
    alert(`Handle buy now for ${params.title}`);
  }

  render() {
    const { navigation: { state: { params } } } = this.props;
    const { title, description } = params;

    return (
      <Container>
        <Header />
        <Content>
          <Title>
            {title}
          </Title>
          <Description>
            {description}
          </Description>
        </Content>
      </Container>
    );
  }
}

export default SinglePostScreen;
