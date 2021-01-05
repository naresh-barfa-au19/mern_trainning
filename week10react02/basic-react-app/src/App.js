import React from "react"
import ReactDom from "react-dom"
import TodoForm from "./components/todoFrom"
import Header from "./components/header"
import Profile from "./components/profile"
import Shop from  "./components/shop"
class App extends React.Component {
  render() {
    
    return (
      <div className="App">
      <Header/>
      
         <TodoForm />
        <Shop/>
        <Profile />
      
    </div>
  );
}
}



export default App;
