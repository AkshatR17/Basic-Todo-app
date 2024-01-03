/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-comment-textnodes */
/*
array destructuring is used in input
todos = [
    {
        title: "Go to Gym",
        description: "From 6 - 8 pm"
    }
]
To remove red lines all the extra comments are added
*/


// eslint-disable-next-line react/prop-types
export function Todos({ todos }){

    return <div>
    
        {todos.map((todo)=>{
            // eslint-disable-next-line react/jsx-key
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? 'Completed' : 'Mark as complete'}</button>
            </div>
        })}
    </div>

}