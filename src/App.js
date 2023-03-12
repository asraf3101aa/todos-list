import './App.css';
import Header from './MyComponents/Header';
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import React, { useState } from 'react';
import {AddTodo} from "./MyComponents/AddTodo";
function App() {

  const onDelete = (todo)=>{
    console.log("I am ondelete of todo", todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const addTodo = (title,desc)=>{
    console.log("I am adding this todo",title, desc);
  }  
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get thsi job done"
    },
    {
      sno: 2,
      title: "Go to the shop",
      desc: "You need to go to the shop to get thsi job done2"
    },
    {
      sno: 3,
      title: "Go to the salon",
      desc: "You need to go to the salon to get thsi job done3"
    },

  ]);

  return (
    <>
      <Header title="My Todos List" searchbar={false} />
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer />
    </>

  );
}

export default App;
