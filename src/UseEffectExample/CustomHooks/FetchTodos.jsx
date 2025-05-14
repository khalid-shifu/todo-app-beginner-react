import React from "react";
import useFetch from "./useFetch";

const FetchTodos = () => {
  const URL = "https://jsonplaceholder.typicode.com/todos";
  const { data, isLoading, error } = useFetch(URL);

  return (
    <div>
      <h1>Data</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {!isLoading && !error && (
        <ul>
          {data.map((todo) => (
            <li key={todo.id}>
              <p>{todo.title}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchTodos;
