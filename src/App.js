import { Card, Row, Col, Divider, Input, Button } from 'antd';
import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {

  const [food, setFood] = useState(foods);
  const [filteredFood, setFilteredFood] = useState(foods);

    const deleteFood = (name) => {
      const copyFoodArr = [...food]
      const foodIndex = food.findIndex(eachFood => 
        eachFood.name === name
      )
      copyFoodArr.splice(foodIndex, 1)
      console.log(foodIndex)
      console.log(copyFoodArr)
    setFood(copyFoodArr);
    setFilteredFood(copyFoodArr);
  }

  return (
    <div className="container">
      
      <div> 
      <Search food={food} setFilteredFood={setFilteredFood}/>
      </div>

      <div className='addFood'>
        <AddFoodForm food={food} setFood={setFood}/>
      </div>
      {
        filteredFood.length === 0 ? <p>oops nothing to show</p> 

        :

      <div className='foodList'>
        {filteredFood.map((food) =>{
          return (     
            <FoodBox food={food} deleteFood={deleteFood}/>         
          )
        })}
      </div>
      }

    </div>
  );


}

export default App;
