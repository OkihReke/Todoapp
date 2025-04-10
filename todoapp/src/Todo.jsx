import { useState } from "react";

function Todo() {

    const [ todo, setTodo ] = useState({name:"", done:false})
    const [ todos, setTodos ] = useState([])
    const completed = todos.filter((todo) => todo.done).length
    const sortedTodos = todos.slice().sort((a,b) => Number(a.done)-Number(b.done))
    

    function handleSubmit(e) {
        e.preventDefault()
        if (todo.name.trim() === "") return;
        setTodos([ ...todos, todo ])
        setTodo({name:"", done:false})
    }

    function handleDelete(item) {
        setTodos( todos.filter((todo) => todo !== item))
    }

    function handleClick(name) {
        setTodos(todos.map((todo) => todo.name === name ? { ...todo, done: !todo.done } : todo))
    }


    
    return <div>
        <h1 className="bg-yellow-300 text-center font-bold font text-xl pb-4 shadow-md">TODOS LIST</h1>
        <form className="flex justify-around w-125 m-auto mt-6 p-4 rounded-b-md shadow-md" onSubmit={handleSubmit} >
            <input type="text" placeholder = "Add a task..." value={todo.name} onChange={(e) => setTodo({name:e.target.value, done:false})} className="w-full focus:outline-none"/>
            <button type = "submit" className="bg-yellow-300 p-2 px-5 rounded-sm cursor-pointer ease-in-out duration-300 hover:bg-black hover:text-white">Add</button>
        </form>

        <div className={`w-115 m-auto mt-6 p-4 rounded-b-md ${todos.length >= 1? "shadow-md" : ""}`}>
            { sortedTodos.map(item => (<div key={item.name} > <div className="flex justify-around p-4"><h3 className={`w-full pt-1 font-bold ${item.done? "line-through":"no-underline"} cursor-pointer`} onClick={()=>handleClick(item.name)}>{ item.name }</h3>
                <button className="bg-yellow-300 p-1 px-4 rounded-sm cursor-pointer" onClick={() => handleDelete(item)}>x</button></div> <hr className="border-0.1 border-gray-200" /></div>)) }
        </div>
        
        <div className="flex justify-around bg-yellow-300 fixed bottom-0 w-full font-bold p-2.5">
            <h1>Total Todos: {todos.length}</h1>
            <h1>Completed Todos: {completed}</h1>
        </div>
        
    </div>
}

export default Todo;