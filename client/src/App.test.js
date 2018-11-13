import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// these should normally be in your jest setupTestFrameworkScriptFile
import 'react-testing-library/cleanup-after-each'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import {Provider} from 'react-redux'
import {render, fireEvent} from 'react-testing-library'


it('renders without crashing', () => {
  const store = createStore(rootReducer, applyMiddleware(thunk))
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
