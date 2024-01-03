const z = require('zod');

// For creating a todo
const createTodo = z.object({
    title: z.string(),
    description: z.string()
});

// For marking it complete
const updateTodo = z.object({
    id: z.string()
});

module.exports = {
    createTodo,
    updateTodo
};