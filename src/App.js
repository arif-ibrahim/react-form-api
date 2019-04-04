import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './component/form/todo';
import MyForm from './component/form/test-form/test-form';
import Signin from './component/form/signin/signin';
import ShowTodos from './component/tables/todo/listtodo'


class App extends Component {
  render() {
    return (
      <div className="App">
       <Todo/>
      {/* <MyForm/>*/}
      {/*<Signin/>*/}
      {/*<ShowTodos/>*/}
      </div>
    );
  }
}

export default App;
