import { useState } from 'react';

import Body from "./components/Layout/Body";
import Cards from './components/Layout/CardsContainer';
import DishForm from "./components/Dish/DishForm";
import ResponseContainer from "./components/Dish/ResponseContainer";

import "./App.css";

function App() {
  const [response, setResponse] = useState({});

  return (
    <Body>
      <Cards>
        <DishForm setResponse={setResponse}/>
        <ResponseContainer response={response}/>
      </Cards>
    </Body>
  );
}

export default App;
