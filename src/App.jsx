
import { useEffect, useState } from 'react'
import './App.css'
import Food from './Components/Food'
import Header from './Components/Header'
import Recipes from './Components/Recipes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [foods, setFoods] = useState([]);
  const [cart, setCart] = useState([]);
  const [prepareCart, setPrepareCart] = useState([]);

  useEffect(() => {
    fetch('./fakeData.json')
      .then(res => res.json())
      .then(data => setFoods(data));

  }, [])

  // console.log(foods);

  // add food to table
  const handleCookBtn = (f) => {
    const isExist = cart.find((fd) => fd.recipe_id == f.recipe_id);
    if (!isExist) {
      setCart([...cart, f]);
    }
    else {
      toast('Item already in the table');
    }
  }

  const handlePreparing =(id) =>{
    const newCart = cart.filter(item => item.recipe_id != id.recipe_id);
    setCart(newCart);
    const isPrepare = prepareCart.find((pFood) => pFood.recipe_id == id.recipe_id);
    if(!isPrepare){
      setPrepareCart([...prepareCart, id]);
    }
  }

  
  return (
    <div>
      <Header></Header>
      <Recipes></Recipes>
      <ToastContainer />

      <div className='lg:flex lg:mx-10'>
        <div className='food-container lg:w-3/5 grid lg:grid-cols-2 gap-6 mx-10'>
          {
            foods.map((food) => <Food food={food} handleCookBtn={handleCookBtn}></Food>)
          }
        </div>

        {/* cooking table */}
        <div className='lg:w-2/5 border mx-10 lg:mx-0  lg:mr-10  mt-5 lg:mt-0 rounded-2xl'>
          <div className=''>
            <h2 className='text-center my-6 text-[24px] font-semibold'>Want to Cook: {cart.length}</h2>
            <hr className='mx-10' />
            <table className='mt-6 text-[#878787] text-xs font-normal'>
              <thead>
                <tr>
                  <th className="py-2 px-4"></th>
                  <th className="py-2 pr-10 lg:pl-4">Name</th>
                  <th className="py-2 px-10">Time</th>
                  <th className="py-2 px-10">Calories</th>
                  <th className="py-2 px-10"></th>
                </tr>
              </thead>
              <tbody>
                {
                  cart.map((item, index) => (
                    <tr className=' bg-gray-100'>
                      <th className="py-2 ">{index+1}</th>
                      <th className="py-2 ">{item.recipe_name}</th>
                      <th className="py-2 ">{item.preparing_time}</th>
                      <th className="py-2 ">{item.calories}</th>
                      <th className="py-2 "><button onClick={() => handlePreparing(item)} className='btn btn-accent rounded-full '>Preparing</button></th>
                    </tr>
                  ))
                }

              </tbody>
            </table>
          </div>

          {/* ......... */}

          <div className=''>
            <h2 className='text-center my-6 text-[24px] font-semibold'>Currently cooking: {prepareCart.length}</h2>
            <hr className='mx-10' />
            <table className='mt-6 text-[#878787] text-xs font-normal'>
              <thead>
                <tr>
                  <th className="py-2 px-12"></th>
                  <th className="py-2 pr-12 lg:pl-4">Name</th>
                  <th className="py-2 px-12">Time</th>
                  <th className="py-2 px-12 ">Calories</th>
                </tr>
              </thead>
              <tbody>
                {
                  prepareCart.map((item, index) => (
                    <tr className=' bg-gray-100'>
                      <th className="py-2 ">{index+1}</th>
                      <th className="py-2 ">{item.recipe_name}</th>
                      <th className="py-2 ">{item.preparing_time}</th>
                      <th className="py-2 ">{item.calories}</th>
                      </tr>
                  ))
                }

              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
