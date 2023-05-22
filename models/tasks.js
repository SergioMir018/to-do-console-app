const Task = require("./task");
require('colors');

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

    deleteTasks(ids = []) {
        ids.forEach( id => {
            if (this._list[id]) {
            delete this._list[id];
        }
        });
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

    pendingCompletedTasksList(isCompleted) {

        let index = 0;

        this.listArray.forEach((task) => {
            const {desc, completed, completionDate} = task;
            const state = (completed) ? 'Completed'.green : 'Pending'.red;

            if (isCompleted === completed) {
                index ++;

                if (!isCompleted) {
                    console.log(`${index.toString().green}. ${desc} :: ${state}`);
                } else {
                    console.log(`${index.toString().green}. ${desc} :: ${state} :: ${completionDate.green}`);
                }

                
            }
        });
    }

    completeTasks(ids = []) {
        ids.forEach(id => {
            const task = this._list[id];

            task.completed = true;
            task.completionDate = new Date().toISOString();
        });
    }
}



module.exports = Tasks;