function TodoFooter({list,clear}){
    const completedSize= list.filter((item)=>{
        if(item.isCompleted===true) return item;
    }).length
    return(
        <div>
            {completedSize}/{list.length} completed
            <button onClick={clear}>clear completed</button>
        </div>
    )
}

export default TodoFooter