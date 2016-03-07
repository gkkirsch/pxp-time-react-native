'use strict';

import React, { Component, View, ActivityIndicatorIOS, StyleSheet } from 'react-native';
import {bindActionCreators} from 'redux';
import Counter from '../components/counter';
import * as userActions from '../actions/UserActions';
import { connect } from 'react-redux';
import Login from '../components/Login';

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

class TimeTracker extends Component {
  render() {
    console.log('----------- THE STORE  -----------', this.props.state)
    const { user } = this.props;
    return (
      <View>
      { !user.isAuth && <Login onSubmit={this.props.actions.loginUser} /> }
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
