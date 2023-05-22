require('colors');

const {inquirerMenu, pause, readInput, listDeletingTask} = require('./helpers/inquirer');
const {saveInDB, readDB} = require('./helpers/saveInfo');
const Task = require('./models/task');
const Tasks = require('./models/tasks');

console.clear();

const main = async() => {
    let opt = '';
    const tasks = new Tasks();

    const loadedData = readDB();

    if(loadedData) {
        tasks.loadTasksArray(loadedData);
    }

    do {
        opt = await inquirerMenu();

        switch(opt) {
            case '1':
                const desc = await readInput('Task description:');
                tasks.createTask(desc)
                break;
            case '2':
                tasks.completeTasksList();
                break;
            case '3':
                tasks.pendingCompletedTasksList(true);
                break;
            case '4':
                tasks.pendingCompletedTasksList(false);
                break;
            case '5':
                break;
            case '6':
                const id = await listDeletingTask(tasks.listArray);
                tasks.deleteTasks(id);
                break;
        }

        saveInDB(tasks.listArray);

        if(opt !== '0') await pause(opt);

    } while (opt !== '0');
}

main();