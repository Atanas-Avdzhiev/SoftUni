import { useEffect, useState } from "react"

export default function Table(props) {
    
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch('http://localhost:3030/jsonstore/todos');
                const serverData = await response.json();
                
                setData(Object.entries(serverData).map(([key, value]) => ({ key, value })));
            } catch (err) {
                console.log('Failed to fetch data', err)
            } finally {
                props.loading(false);
            }
        }
        getData();
    }, [])

    async function changeHandler(id) {
        const newData = data.map(todo => {
            if (todo.value._id === id) {
                todo.value.isCompleted = !todo.value.isCompleted;
                return todo;
            }
            return todo;
        });
        setData(newData);
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="table-header-task">Task</th>
                    <th className="table-header-status">Status</th>
                    <th className="table-header-action">Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map(todo => {
                    return (
                        <tr className={todo.value.isCompleted ? 'todo is-completed' : 'todo'} key={todo.value._id}>
                            <td>{todo.value.text}</td>
                            <td>{todo.value.isCompleted ? 'Completed' : 'Incompleted'}</td>
                            <td className="todo-action">
                                <button onClick={() => changeHandler(todo.value._id)} className="btn todo-btn">Change status</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}