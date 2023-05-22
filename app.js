require('colors');

const {inquirerMenu, pause, readInput, listDeletingTask, confirm, completeTasksCheck} = require('./helpers/inquirer');
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
                const ids = await completeTasksCheck(tasks.listArray);
                tasks.completeTasks(ids);
                break;
            case '6':
                const deleteIds = await listDeletingTask(tasks.listArray);
                if (deleteIds !== '0') {
                    const isOk = await confirm('Are you sure?');
                
                    if(isOk) {
                        tasks.deleteTasks(deleteIds);
                        console.log('Task(s) deleted');
                    }
                }
                
                break;
        }

        saveInDB(tasks.listArray);

        if(opt !== '0') await pause(opt);

    } while (opt !== '0');
}

main();