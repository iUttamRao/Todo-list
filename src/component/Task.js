import React, { useState } from "react";

function Task({task,onDelete,onUpdate}){
    const [isEditing,setIsEditing] = useState(false);
    const [editedText,setEditedText] = useState(task.text);

    const saveChanges = () =>{
        onUpdate(task.id,editedText);
        setIsEditing(false);
    };
    if(isEditing){
        return(
            <div className="task">
                <input value={editedText} onChange={(e)=>setEditedText(e.target.value)} />
                <button onClick={()=>saveChanges()}>Save</button>
                <button onClick={()=> setIsEditing(false)}>Cancel</button>
            </div>
        );
    }
    return(
        <div className="task">
            <span>{task.text}</span>
            <button onClick={()=> setIsEditing(true)}>Edit</button>
            {!task.isMandatory && <button onClick={()=>onDelete(task.id)}>Delete</button>}
        </div>
    );
}

export default Task;