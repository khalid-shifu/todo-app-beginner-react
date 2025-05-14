import React, { useState, useEffect } from "react";
import { getTodos } from "./TodoService";
import axios from "axios";

const GetRequest = () => {
  const URL = "https://jsonplaceholder.typicode.com/users";
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  const fetchTodos = async () => {
    try {
      const fetchedTodos = await axios.get(URL);
      const shuffledTodos = fetchedTodos.data.sort(() => Math.random() - 0.5);
      setTodos(shuffledTodos);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching todos:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>Count</button>
      <p>Count: {count}</p>
      {todos.slice(0, 5).map((todo) => (
        <div key={todo.id}>
          <h2>{todo.name}</h2>
          <p>{todo.email}</p>
        </div>
      ))}
    </div>
  );
};

export default GetRequest;
