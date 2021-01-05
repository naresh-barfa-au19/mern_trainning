import React from 'react'
import { Provider } from "react-redux"
import store from "./redux/todoStore"
import HeaderComponent from './Components/HeaderComponent'
import AddTodo from './Components/AddTodo'

function App() {
  return (
    <Provider store={store}>

      <div>
        <HeaderComponent />
        <AddTodo />
      </div>
    </Provider>
  );
}

export default App;
