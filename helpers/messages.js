const { resolve } = require('path');

require('colors');

const showMenu = () => {
    return new Promise(resolve => {
        
        console.clear();

        console.log('=========================='.green);
        console.log(`${'|'.green}    Select an option    ${'|'.green}`);
        console.log('=========================='.green);

        console.log(`${'1'.green}. Create a task`);
        console.log(`${'2'.green}. List tasks`);
        console.log(`${'3'.green}. List completed tasks`);
        console.log(`${'4'.green}. List pending tasks`);
        console.log(`${'5'.green}. Complete task(s)`);
        console.log(`${'6'.green}. Delete task(s)`);
        console.log(`${'0'.green}. Exit\n`);

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question('Select an option: ', (opt) => {
            readLine.close();
            resolve(opt);
        });
    });
}

const pause = () => {
    return new Promise(resolve => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question(`\nPress ${'ENTER'.green} to continue\n`, (opt) => {
            readLine.close();
            resolve(opt);
        });
    });
}

module.exports = {
    showMenu,
    pause
}