import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'
import './style.css';
import Data from './data/data.json';
import { v4 as uuidv4 } from 'uuid';
import CardClassCom from './components/CardClassCom.jsx';
import Card3 from './components/Card3.jsx';

function App() {
  let items = Data.map((item, index) => (
    <Card key={uuidv4()} titleText={item.title} description={item.description} />
  ));


  return (
    <div>
      <h1 className='headingStyle'>Todo App!</h1>
      {items}
      <Card3 />
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