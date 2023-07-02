import react, {useState} from 'react';
import './App.css';
import Header from './AppComponents/Header';
import TodoInput from './AppComponents/TodoInput';
import TodoList from './AppComponents/TodoList';
// import Footer from './AppComponents/Footer';

function App() {
  const [List, setList] = useState([]);

  const addListItem = (inputText) => {
    setList([...List, inputText]);
  }
  
  const deleteListItem = (key) => {
    let newList = [...List];
    newList.splice(key, 1);
    setList([...newList]);
  }

  const renderListItem = List.map((listItem, index) => {
  return(
    <TodoList key = {index} item = {listItem} deleteItem = {deleteListItem} index = {index}/>
  )
  })

  return (
    <div className="container">
      <Header/>
      <TodoInput addListItem = {addListItem}/>
      {renderListItem}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
