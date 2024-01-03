const express = require('express');
const { createTodo, updateTodo } = require('./types');
const app = express();

const port = 3000;
app.use(express.json());


app.post('/todo', (req,res)=>{

    const userData = req.body;
    const parseUserData = createTodo.safeParse(userData);

    if (!parseUserData.success) {
        res.status(411).json({
            msg: 'You sent the wrong inputs'
        });
        return;
    }
     
    // put it in mongodb
});

app.get('todos', (req,res)=>{});

app.put('/completed', (req,res)=>{

    const userData = req.body;
    const parseUserData = updateTodo.safeParse(userData);

    if (!parseUserData.success) {
        res.status(411).json({
            msg: 'You sent the wrong inputs'
        });
        return;
    }

});

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
});