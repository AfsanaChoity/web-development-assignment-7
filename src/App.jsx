
import { useEffect, useState } from 'react'
import './App.css'
import Food from './Components/Food'
import Header from './Components/Header'
import Recipes from './Components/Recipes'

function App() {

  const [foods, setFoods] = useState([]);

  useEffect(() =>{
    fetch('./fakeData.json')
    .then(res => res.json())
    .then(data => setFoods(data));

  }, [])

  // console.log(foods);

  return (
    <div>
      <Header></Header>
      <Recipes></Recipes>

      <div className='lg:flex lg:mx-20'>
        <div className='food-container lg:w-3/5 grid lg:grid-cols-2 gap-6 mx-10'>
          {
            foods.map((food) => <Food food={food}></Food> )
          }
        </div>

        <div className='lg:w-2/5 border border-red-700'>
          <h2>Want to cook</h2>
        </div>

      </div>
    </div>
  )
}

export default App
