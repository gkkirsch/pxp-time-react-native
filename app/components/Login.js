import React, { Component, View, TextInput, TouchableHighlight, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input: {
      height: 60,
      padding: 10,
      fontSize: 18,
      color: '#111',
      flex: 10
    },
    button: {
      height: 60,
      backgroundColor: '#48BBEC',
      flex: 3,
      alignItems: 'center',
      justifyContent: 'center'
    }
});

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: 'ibekidkirsch@gmail.com',
      password: '!!G@rr3tt!!'
    };
  }

  handleEmailChange(text) {
    this.setState({ email: text })
  }

  handlePasswordChange(text) {
    this.setState({ password: text })
  }

  handleSubmit() {
    this.props.onSubmit(this.state.email, this.state.password);
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={this.handleEmailChange}
            value={this.state.email}
            placeholder="Email"
          />
          <TextInput
            style={styles.input}
            onChangeText={this.handlePasswordChange}
            value={this.state.password}
            placeholder="Password"
            secureTextEntry
          />
          <TouchableHighlight
            style={styles.button}
            onPress={this.handleSubmit}
            underlayColor="#88D4F5"
          >
            <Text>Login</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }  
}