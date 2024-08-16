import { getTodos, createTodo, updateTodo, deleteTodo, getById} from "./services.js";

(async () => {
    try{
        let data = await getTodos();
        console.log('GET ALL', data.length);

        data = await getById(1);
        console.log('GET BY ID', data);

        const newTodo = {
            userId: 1,
            title: 'New todo',
            completed: false,
        };

        data = await createTodo(newTodo);
        console.log('POST', data);
        // console.log('data length', data.length);

        data.title = 'Updated Todo'
        data = await updateTodo(1, data);
        console.log('PUT', data)
        // console.log('data length', data.length);

        data = await deleteTodo(1);
        console.log('DELETE', data)
        // console.log('data length', data.length);

    } catch (error){
        console.log("Error",error);
    }
})();

