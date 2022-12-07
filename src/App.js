import { Card, Row, Col, Divider, Input, Button } from 'antd';
import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {

  const [food, setFood] = useState([...foods])

  return (
    <div className="container">
      
      <div className='addFood'>
        <AddFoodForm />
      </div>
      
      <div className='foodList'>
        {food.map((food) =>{
          return (     
            <FoodBox food={food}/>         
          )
        })}
      </div>
      



    </div>
  );
}

export default App;
