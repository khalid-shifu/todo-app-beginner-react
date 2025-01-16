import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'
import './style.css';
import Data from './data/data.json';

function App() {
  // for (let i = 0; i < Data.length; i++) {
  //   items.push(
  //     <Card titleText={Data[i].title} description={Data[i].description} />
  //   )
  // }

  let items = Data.map((item, index) => (
    <Card key={index} titleText={item.title} description={item.description} />
  ));


  return (  
      <div>
        <h1 className='headingStyle'>Todo App!</h1>   
        {items}  
      </div> 
  )
}

export default App
