const fs = require('fs')

const file = './database/data.json';

const saveInDB = (data) => {

    fs.writeFileSync(file, JSON.stringify(data));

}

const readDB = () => {

    if(!fs.existsSync(file)) {
        return null;
    }

    const loadedData = fs.readFileSync(file, {encoding: 'utf-8'});
    const formattedData = JSON.parse(loadedData);

    return formattedData;
}

module.exports = {
    saveInDB,
    readDB
};