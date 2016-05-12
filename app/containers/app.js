import React, { Component, StyleSheet } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from '../reducers';
import TimeTracker from './TimeTracker';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default class App extends Component {

  render() {
    return (
      <Provider style={styles.login } store={store}>
        <TimeTracker style={ styles.login }/>
      </Provider>
    );
  }
}
