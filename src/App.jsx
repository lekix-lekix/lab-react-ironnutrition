import foodDB from './foods.json';
import { useState } from 'react';
import { Divider } from 'antd';
import './App.css';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [food, setFood] = useState(foodDB);
  const [searched, setSearched] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleFoodItem = (newFoodItem) => {
    const updatedList = [...food];
    updatedList.push(newFoodItem);
    setFood(updatedList);
  };

  const searchFilter = () => {
    const array = [...food];

    const matchArray = array.filter((element) =>
      element.name.toLowerCase().includes(searched.toLowerCase())
    );
    return matchArray;
  };

  const handleRemoveOne = (itemName) => {
    const array = [...food];

    const arrayWithoutItem = array.filter((element) => {
      return !element.name.toLowerCase().includes(itemName.toLowerCase());
    });
    setFood(arrayWithoutItem);
  };

  return (
    <div className="App">
      <div id="formAndSearch">
        <div className="formSearchBars">
          {showForm && <AddFoodForm addFunction={handleFoodItem} />}
          <button onClick={() => setShowForm(!showForm)}>FoodForm</button>
          <Search array={food} {...{ setSearched, searched }}></Search>
        </div>
      </div>
      <Divider>
        <h1>Food List</h1>
      </Divider>
      {!food.length && (
        <div className="nothingHere">
          <h2>Woops ! Nothing to see here.</h2>
          <img src="./travolta.gif" alt="travolta-gif" />
        </div>
      )}

      {searchFilter().map((element) => {
        return (
          <div className="foodList">
            <FoodBox item={element} removeItem={handleRemoveOne}></FoodBox>
          </div>
        );
      })}
    </div>
  );
}

export default App;
