import React from "react";
import './App.css';
import { Provider } from "react-redux";

import store from "./redux/store/store";
import Page from "./components/Page";

function App() {
  return (
    <div className="App">
     <Provider store={store}>
       <Page />
     </Provider>
    </div>
  );
}

export default App;
