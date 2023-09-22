import React from "react";

function AddTask({input,setInput,onAdd}){
    return(
        <div className="add-task">
            <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Enter the Task" />
            <button onClick={onAdd}>Add</button>
        </div>
    );
}

export default AddTask;