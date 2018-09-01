import React from 'react';
import {
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  View,
  AsyncStorage,
} from 'react-native';
import color from '../theme/color';

const USERNAME = 'admin';
const PASSWORD = 'password';

class LoginScreen extends React.Component {
  state = {
    isLoggedIn: false,
    currentUser: '',
  };

  componentDidMount() {
    this.checkExistingSession();
  }

  handleLogin = () => {
    const enteredUsername = this.usernameRef._lastNativeText;
    const enteredPassword = this.passwordRef._lastNativeText;

    if (enteredPassword === PASSWORD && enteredUsername === USERNAME) {
      this.setState({ isLoggedIn: true, currentUser: enteredUsername });
      AsyncStorage.setItem('currentUser', enteredUsername);
    }
  }

  checkExistingSession = async () => {
    const currentUser = await AsyncStorage.getItem('currentUser');
    if (currentUser) {
      this.setState({ isLoggedIn: true, currentUser });
    }
  }

  handleLogout = () => {
    AsyncStorage.removeItem('currentUser');
    alert('Logged out successfully!');
    this.setState({ isLoggedIn: false, currentUser: '' });
  }

  render() {
    const { isLoggedIn, currentUser } = this.state;

    return (
      <View style={styles.container}>
        {!isLoggedIn
          ? (
            <KeyboardAvoidingView
              style={styles.form}
              behavior="padding"
              keyboardVerticalOffset={54}
            >
              <TextInput
                ref={(x) => { this.usernameRef = x; }}
                style={styles.textInput}
                placeholder="Username (admin)"
                maxLength={10}
                autoCapitalize="none"
                underlineColorAndroid="transparent"
                onSubmitEditing={() => this.passwordRef.focus()}
                returnKeyType="next"
              />
              <TextInput
                ref={(x) => { this.passwordRef = x; }}
                style={styles.textInput}
                placeholder="Password (password)"
                maxLength={32}
                secureTextEntry
                autoCapitalize="none"
                underlineColorAndroid="transparent"
                onSubmitEditing={this.handleLogin}
                returnKeyType="done"
              />
              <View>
                <TouchableOpacity
                  onPress={this.handleLogin}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          )
          : (
            <View style={styles.form}>
              <Text style={styles.welcomeText}>
                {`Welcome ${currentUser}!`}
              </Text>
              <TouchableOpacity
                style={styles.logoutButton}
                onPress={this.handleLogout}
              >
                <Text style={styles.logoutText}>
                  Log out
                </Text>
              </TouchableOpacity>
            </View>
          )
        }
      </View>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.greyLight,
  },
  form: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: color.greyLighter,
    marginTop: 24,
    padding: 8,
    height: 40,
    width: 240,
    borderRadius: 4,
  },
  button: {
    backgroundColor: color.greyDark,
    padding: 8,
    borderRadius: 4,
    marginTop: 24,
    width: 240,
    alignItems: 'center',
  },
  buttonText: {
    color: color.greyLighter,
  },
  welcomeText: {
    fontSize: 16,
  },
  logoutButton: {
    borderWidth: 1,
    borderColor: color.greyDark,
    borderRadius: 4,
    padding: 8,
    margin: 16,
  },
  logoutText: {
    color: color.greyDark,
  },
});
