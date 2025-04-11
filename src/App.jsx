import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'
import './style.css';
import Data from './data/data.json';
import { v4 as uuidv4 } from 'uuid';
import ReactBootstrap from './components/react-bootstrap/ReactBootstrap.jsx';
import State from './State/State.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import ConditionalRendering from './Conditional_Rendering/ConditionalRendering.jsx';
import EventHandler from './EventHandler/EventHandler.jsx';
import EventBinding from './EventBinding/EventBinding.jsx';
import Hooks from './Hooks/Hooks.jsx';
import HooksUseState from './Hooks/HooksUseState.jsx';
import HookBasedOnPrevState from './Hooks/HookBasedOnPrevState.jsx';

const todoTitle = "Todo App!!";

function App() {
  let cards = Data.map((item) => (
    <Card key={uuidv4()} titleText={item.title} description={item.description} /> 
  ));

  // uuidv4() is used to generate a unique key for each card
  // to avoid using index as key, which is not recommended in React
  // because it can cause issues with component state and performance

  return (
    // <div>
    //   <h1 className='headingStyle'>{todoTitle}</h1>
    //   {cards}
    //   <CardNew titleText="Card New" description="This is a new card component." footer="Done!"/>
    //   <Card3 />
    // </div>
    <div>
      {/* <ReactBootstrap /> */}
      {/* <State/> */}
      {/* <ConditionalRendering /> */}
      {/* <EventHandler /> */}
      {/* <EventBinding /> */}
      {/* <Hooks /> */}
      {/* <HooksUseState /> */}
      {/* <Hooks /> */}
      <HookBasedOnPrevState />
    </div>
  );
}

export default App



// const users = [
//   {
//     id: 1,
//     name: 'John Doe',
//     age: 25,
//     address: [
//       { 
//         city: 'New York',
//         zip: '10021' 
//       },
//       { 
//         city: 'Los Angeles',
//         zip: '90002' 
//       }
//     ]
//   },
//   {
//     id: 2,
//     name: 'Jane Doe',
//     age: 26,
//     address: [
//       { 
//         city: 'San Francisco',
//         zip: '94101' 
//       },
//       { 
//         city: 'Chicago',
//         zip: '60601' 
//       }
//     ]
//   }
// ]


// {
//   users.map((user, index) => {
//     return (
//       <article key={index}>
//         <h1>{user.name}</h1>
//         <p>{user.id}</p>
//         <p>{user.age}</p>
//         {
//           user.address.map((address, index) => {
//             return (
//               <div key={index}>
//                 <p>{address.city}</p>
//                 <p>{address.zip}</p>
//               </div>
//             );
//           })
//         }
//       </article>
//     );
//   })
// }