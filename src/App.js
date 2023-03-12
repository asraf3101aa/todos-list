import './App.css';
import Header from './MyComponents/Header';
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
function App() {
  let todos = [
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

  ]

  return (
    <>
      <Header title="My Todos List" searchbar={false} />
      <Todos todos={todos}/>
      <Footer />
    </>

  );
}

export default App;
