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

    loadTasksArray( tasks = []) {
        tasks.forEach(task => {
            this._list[task.id] = task;
        })
    }

    constructor() {
        this._list = {};
    }

    createTask(desc = '') {
        const task = new Task(desc);

        this._list[task.id] = task;
    }

    completeTasksList() {

        this.listArray.forEach((task, i) => {

            const index = `${i + 1}`.green;
            const {desc, completed} = task;
            const state = (completed) ? 'Completed'.green : 'Pending'.red;

            console.log(`${index} ${desc} :: ${state}`);
        });
    }
}



module.exports = Tasks;