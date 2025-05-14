import axios from 'axios'

export const getTodos = async () => {
    const URL = 'https://jsonplaceholder.typicode.com/todos';
    const response = await axios.get(URL);
    return response.data;
}

