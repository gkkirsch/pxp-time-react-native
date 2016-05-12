'use strict';

import React, { Component, View, ActivityIndicatorIOS, StyleSheet } from 'react-native';
import {bindActionCreators} from 'redux';
import Counter from '../components/counter';
import * as userActions from '../actions/UserActions';
import { connect } from 'react-redux';
import Login from '../components/Login';

const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
  },
  login: {
    flex: 1,
    justifyContent: 'center',
  }
})

class TimeTracker extends Component {
  render() {
    console.log('----------- THE STORE  -----------', this.props.state)
    const { user } = this.props;
    return (
      <View style={ styles.login }>
      { !user.isAuth && <Login style={ styles.login } onSubmit={this.props.actions.loginUser} /> }
      <ActivityIndicatorIOS
        style={ styles.loader }
        animating={ user.isLoading }
        color="#B52D2C"
        size="large"
      />
      </View>
    );
  }
}

export default connect(state => ({
    user: state.user,
    state
  }),
  (dispatch) => ({
    actions: bindActionCreators(userActions, dispatch)
  })
)(TimeTracker);
