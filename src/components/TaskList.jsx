import React from 'react'
import '../statics/css/MisComponentes.css'

function TaskList(props){
    const{id, title,completed}= props;
    return(
        <ul className="task-list">
            <li>
                <h3>{title}</h3>
                <p>Id: {id}</p>
                <p>Titulo: {title}</p>
                <p>{completed ? "✅ Completada" : "❌ Pendiente"}</p>
            </li>
        </ul>
    )
}
export default TaskList