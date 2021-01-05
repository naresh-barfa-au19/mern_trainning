import React from "react"
import "./App.css"
import { Provider } from "react-redux"
import store from "./redux/store"
import Shop from "./components/cake_shop"
function App() {
  return (
    <Provider store={store}>

      <div className="App">
        <h1>hello cake shop</h1>
        <Shop />
      </div>
    </Provider>
  );
}

export default App;
