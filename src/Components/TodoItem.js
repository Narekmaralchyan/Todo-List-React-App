import {useState} from 'react'

function TodoItem({item,deleteItem,onchange}){
    const [check,SetCheck] = useState(false)
    return(
        <div className='item'>
        <label>
            <input type="checkbox" checked={item.isCompleted} onChange={(e)=>{
                onchange(item.id,e.target.checked)
            }} />
            {item.text}
            <button className='closeButton' onClick={()=>deleteItem(item.id)} >X</button>
        </label>
        </div>
    )
}
export default TodoItem