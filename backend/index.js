const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const cors = require('cors');
const app = express();

const port = 3000;
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
}));
// cors is used to give frontend permission to connect with the backend, gpt it for more details

app.post('/todo', async (req,res)=>{

    const userData = req.body;
    const parseUserData = createTodo.safeParse(userData);

    if (!parseUserData.success) {
        res.status(411).json({
            msg: 'You sent the wrong inputs'
        });
        return;
    }
     
    // put it in mongodb
    try {
        await todo.create({
            title: userData.title,
            description: userData.description,
            completed: false
        });
    
        res.json({
            msg: 'Todo created'
        });
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'We are sorry for inconveince but it seems like database is down'
        });   
    }
  
});

app.get('/todos',async (req,res)=>{

    try {
        const todos = await todo.find({});
        res.json({todos});
    } catch (error) {
        console.log(error);
        res.status(404).json({
            msg: 'todos not found'
        })
    }

});

app.put('/completed',async (req,res)=>{

    const userData = req.body;
    const parseUserData = updateTodo.safeParse(userData);

    if (!parseUserData.success) {
        res.status(411).json({
            msg: 'You sent the wrong inputs'
        });
        return;
    }

    try {

        await todo.findByIdAndUpdate(userData.id, { completed: true });

        res.json({
            msg: 'Todo marked as done'
        });

    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Sorry for the inconveince'
        });
    }
});

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
});