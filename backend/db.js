/*
db schema
{
    title : string,
    description : string,
    completed: boolean
}
*/

const { cluster } = require('./secrets');
const mongodb = require('mongoose');

mongodb.connect(cluster.url);
const todoSchema = mongodb.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongodb.model('todos', todoSchema);

module.exports = {
    todo
};