import { useState } from "react";

export function CreateTodo(){
    // react-query
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


// style is an object
    return <div>
        <input style={{
            padding: 10,
            margin: 10,
        }} type="text" placeholder="title" onChange={(e)=>{
            setTitle(e.target.value);
        }} /><br />
        <input style={{
            padding: 10,
            margin: 10,
        }} type="text" placeholder="description" onChange={(e)=>{
            setDescription(e.target.value);
        }} /><br />

        <button style={{
            padding: 10,
            margin: 10,
        }} onClick={()=>{
            fetch('http://localhost:3000/todo',{
                method: "POST",
                body: JSON.stringify({
                    title,
                    description
                }),
                headers: {
                    'Content-Type': 'application/json' 
                }
            }).then(async(res)=>{
                const json = await res.json();
                alert(`Todo Added ${json}`);
            })
        }}>Add a Todo</button>
    </div>

}