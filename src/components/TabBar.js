import React from 'react';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';

const TabBarContainer = styled.View`
  backgroundColor: #133046;
  flexDirection: row;
  alignItems: center;
  justifyContent: space-around;
  height: 64;
`;

const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  width: 48;
  height: 48;
  alignItems: center;
  justifyContent: center;
`;

const Icon = styled(Ionicons).attrs({
  size: 32,
  color: (props) => props.selected ? '#F1E4B3' : '#15959F',
})`
`;

class TabBar extends React.Component {
  state = {
    selectedIndex: 0,
  };

  openHomeScreen = () => {
    const { navigation } = this.props;
    this.setState({ selectedIndex: 0 });
    navigation.navigate('Home');
  }

  openNewPostScreen = () => {
    const { navigation } = this.props;
    navigation.navigate('Product');
  }

  openOther = () => {
    const { navigation } = this.props;
    this.setState({ selectedIndex: 2 });
    navigation.navigate('Profile');
  }

  render() {
    const { selectedIndex } = this.state;

    return (
      <TabBarContainer>
        <Button onPress={this.openHomeScreen} disabled={selectedIndex === 0}>
          <Icon name="font" selected={selectedIndex === 0} />
        </Button>
        <Button onPress={this.openNewPostScreen} disabled={selectedIndex === 1}>
          <Icon name="pencil" selected={selectedIndex === 1} />
        </Button>
        <Button onPress={this.openOther} disabled={selectedIndex === 2}>
          <Icon name="flash" selected={selectedIndex === 2} />
        </Button>
      </TabBarContainer>
    );
  }
}

export default withNavigation(TabBar);
