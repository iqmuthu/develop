import React from 'react';
import ReactDOM from 'react-dom';
import RootContainer from './containers/RootContainer.jsx';
import { Provider } from 'react-redux';
import createStoreWithInitialState from './store/index.jsx';
import { updateDisplayName } from './store/actions/rootName.jsx';
let appInitState ={
  studentDetails:{
    searchValue:'',
    studentList:[]
  },
  rootName :{
    displayName :''
  }  
};

let store = createStoreWithInitialState(appInitState);
// store.dispatch(updateDisplayName('CAC'));

ReactDOM.render(<Provider store={store}>
  <RootContainer />
  </Provider>, document.getElementById('mountNode')
);
