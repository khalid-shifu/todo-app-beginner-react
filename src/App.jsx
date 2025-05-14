import { useState } from "react";
import "./App.css";
import Card from "./components/Card.jsx";
import "./style.css";
import Data from "./data/data.json";
import { v4 as uuidv4 } from "uuid";
import ReactBootstrap from "./components/react-bootstrap/ReactBootstrap.jsx";
import State from "./State/State.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import ConditionalRendering from "./Conditional_Rendering/ConditionalRendering.jsx";
import EventHandler from "./EventHandler/EventHandler.jsx";
import EventBinding from "./EventBinding/EventBinding.jsx";
import Hooks from "./Hooks/Hooks.jsx";
import HooksUseState from "./Hooks/HooksUseState.jsx";
import HookBasedOnPrevState from "./Hooks/HookBasedOnPrevState.jsx";
import Child from "./components/passDataToParentComponent/StateLifting/Child.jsx";
import HooksUseStateFC from "./Hooks/HooksUseStateFC.jsx";
import StudentForm from "./form/StudentForm.jsx";
import CarForm from "./form/CarForm.jsx";
import UseEffect from "./UseEffectExample/UseEffect.jsx";
import GetRequest from "./UseEffectExample/GetRequest.jsx";
import FetchTodos from "./UseEffectExample/CustomHooks/FetchTodos.jsx";
import Toast from "./react toastify/toast.jsx";
import DynamicStyling from "./dynamic styling/DynamicStyling.jsx";
import UseReducerExample from "./UserReducerHook/UseReducerExample.jsx";
import Component1 from "./UseContext/Component1.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Routing/LandingPage.jsx";
import Home from "./Routing/Home.jsx";
import Contact from "./Routing/Contact.jsx";
import DashBoard from "./Routing/DashBoard.jsx";
import ErrorPage from "./Routing/ErrorPage.jsx";
import { Nav } from "react-bootstrap";
import Navbar from "./Routing/navbar.jsx";

const todoTitle = "Todo App!!";

function App() {
  const data = "Data from app.jsx and app()";
  let cards = Data.map((item) => (
    <Card
      key={uuidv4()}
      titleText={item.title}
      description={item.description}
    />
  ));

  const handleChildData = (childData) => {
    console.log(childData);
  };

  // uuidv4() is used to generate a unique key for each card
  // to avoid using index as key, which is not recommended in React
  // because it can cause issues with component state and performance

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
  // // <div>
  // //   <h1 className='headingStyle'>{todoTitle}</h1>
  // //   {cards}
  // //   <CardNew titleText="Card New" description="This is a new card component." footer="Done!"/>
  // //   <Card3 />
  // // </div>
  // // <div>
  //   {/* <ReactBootstrap /> */}
  //   {/* <State/> */}
  //   {/* <ConditionalRendering /> */}
  //   {/* <EventHandler /> */}
  //   {/* <EventBinding /> */}
  //   {/* <Hooks /> */}
  //   {/* <HooksUseState /> */}
  //   {/* <Hooks /> */}
  //   {/* <HookBasedOnPrevState /> */}
  //   {/* <Child data={data} onChildData-={handleChildData}/> */}
  //   {/* <HooksUseStateFC /> */}
  //   {/* <StudentForm /> */}
  //   {/* <CarForm /> */}
  //   {/* <UseEffect /> */}
  //   {/* <GetRequest /> */}
  //   {/* <FetchTodos /> */}
  //   {/* <Toast /> */}
  //   {/* <DynamicStyling /> */}
  //   {/* <UseReducerExample /> */}
  //   {/* <Component1 /> */}
  // {/* </div> */}
}

export default App;

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
