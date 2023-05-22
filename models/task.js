const  {v4: uuid4} = require('uuid');

class Task {
    constructor(desc) {
        this.id = uuid4();
        this.desc = desc;
        this. completed = false;
        this.completionDate = 'pending for completion';
    }
}

module.exports = Task;