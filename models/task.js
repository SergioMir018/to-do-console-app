const  {v4: uuid4} = require('uuid');

class Task {
    constructor(desc) {
        this.id = uuid4();
        this.desc = desc;
        this. completed = false;
    }
}

module.exports = Task;