import React, { Component, View, TextInput, TouchableHighlight, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
      width: null,
      height: null,
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0)',
      resizeMode: 'cover',
      padding: 15
    },
    logo: {
      alignSelf: 'center',
      marginBottom: 20
    },
    input: {
      height: 60,
      padding: 10,
      fontSize: 18,
      color: '#fff',
      backgroundColor: 'rgba(255, 255, 255, 0.16)',
      borderColor: 'white',
      borderWidth: 0,
      borderRadius: 5,
      margin: 10
    },
    button: {
      height: 60,
      borderColor: 'rgba(255, 255, 255, 0.16)',
      borderWidth: 0,
      shadowColor: '#000',
      shadowRadius: 10,
      shadowOffset: {width: 4, height: 10},
      borderRadius: 5,
      margin: 10,
      backgroundColor: '#171F22',
      justifyContent: 'center',
      alignItems: 'center',
      overflow:'hidden'
    },
    buttonText: {
      fontSize: 20,
      color: 'white',
      fontWeight: '700'
    }
});

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: '',
      password: ''
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
      <Image source={require('../images/bg.jpg')} style={styles.container}>
        <Image source={require('../images/pxplogo.png')} style={styles.logo} />
        <TextInput
          style={styles.input}
          onChangeText={this.handleEmailChange}
          value={this.state.email}
          placeholder="Email"
          autoFocus
          placeholderTextColor="white"
          selectionColor="white"
        />
        <TextInput
          style={styles.input}
          onChangeText={this.handlePasswordChange}
          value={this.state.password}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="white"
          selectionColor="white"
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableHighlight>
      </Image>
    )
  }  
}