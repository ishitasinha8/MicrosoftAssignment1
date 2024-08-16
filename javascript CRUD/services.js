const url = "https://jsonplaceholder.typicode.com/todos/";

export const getTodos = async() => {
    const response = await fetch(url); // everytime it is returning a Promise, we have to write await
    const data = await response.json(); // everytime it is returning a Promise, we have to write await
    return data;
};

export const getById = async(id) => {
    const response = await fetch(`${url}${id}`);
    const data = await response.json();
    return data;
}
export const createTodo = async(todo) => {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    const data = await response.json();
    return data;
};

export const updateTodo = async(id, todo) => {
    const response = await fetch(`${url}${id}`, {
        method: 'PUT',
        body: JSON.stringify(todo),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    const data = await response.json();
    return data;
};

export const deleteTodo = async(id) => {
    const response = await fetch(`${url}${id}`, {
        method: 'DELETE',
    })
    const data = await response.json();
    return data;
};