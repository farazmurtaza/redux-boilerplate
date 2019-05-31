//add these two lines in App.js

import { Provider } from 'react-redux';
import store from './store';

//then wrao everything into that Provider

function App() {
  return (
    <Provider store={store}>
      //everything goes in here
    </Provider>
  );
}
