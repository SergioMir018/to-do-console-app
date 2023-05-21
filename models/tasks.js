const Task = require("./task");

class Tasks {

    get listArray() {
        const taskList = []

        Object.keys(this._list).forEach(key => {
            const task = this._list[key];

            taskList.push(task);
        })

        return taskList;
    }

    constructor() {
        this._list = {};
    }

    createTask(desc = '') {
        const task = new Task(desc);

        this._list[task.id] = task;
    }
}



module.exports = Tasks;