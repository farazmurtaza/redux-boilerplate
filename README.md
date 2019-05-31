Redux Implementation Boilerplate:

1) cd client
2) npm i reduc react-redux redux-thunk
3) create store.js in client>src
4) import Provider to App.js from react-redux
5) import store to App.js from store file
6) put everything inside Provider in App.js
7) create reducer folder in client>src (all reducers go here)
8) create root reducer in that foler that is index.js
9) add the code (reducers that are being imported should exist eg: itemReducer.js)
10) if not created then create itemReducer.js (this is where we check actions, eg: getItem, setItem) which is going to dispatch to the reducer and it can send along a payload if wanted. If we were to fetch data from our server eg: getItem, we will dispatch to our reducer and will send that response from server to reducer, then add it to react component)
11) create actions folder in client>src and add a file constants.js where add all constants that might be required.
12) import those constants in required reducer eg: itemReducer and add the code in file
13) create itemActions.js (this is where request to backend goes) in actions folder

