import TodoItem from "./TodoItem"

function ToDoList({todos,deleteItem,onchange}){

    return(
        <div className="list">
            {
                todos.map((item)=>{
                    return(
                            <TodoItem item={item}  deleteItem={deleteItem} onchange={onchange} key={item.id} />
                    )
                })
            }
        </div>
    )
}

export default ToDoList;