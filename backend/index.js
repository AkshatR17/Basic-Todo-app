const express = require('express');
const app = express();

const port = 3000;
app.use(express.json());


// Input validation using zod done in types.js, we expect input of type 
//  {
//      title: string,
//      description: string 
//  }
app.post('/todo', (req,res)=>{});

app.get('todos', (req,res)=>{});

app.put('/completed', (req,res)=>{});

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
});