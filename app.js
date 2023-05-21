require('colors');

const {inquirerMenu, pause, readInput} = require('./helpers/inquirer');
const {saveInDB, readDB} = require('./helpers/saveInfo');
const Task = require('./models/task');
const Tasks = require('./models/tasks');

console.clear();

const main = async() => {
    let opt = '';
    const tasks = new Tasks();

    const loadedData = readDB();

    if(loadedData) {

    }

    await pause();

    do {
        opt = await inquirerMenu();

        switch(opt) {
            case '1':
                const desc = await readInput('Task description:');
                tasks.createTask(desc)
                break;
            case '2':
                console.log(tasks._list);
                break;
            case '3':
                break;
            case '4':
                break;
            case '5':
                break;
            case '6':
                break;
        }

        saveInDB(tasks.listArray);

        if(opt !== '0') await pause(opt);

    } while (opt !== '0');
}

main();