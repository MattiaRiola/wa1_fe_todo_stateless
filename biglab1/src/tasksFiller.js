'use strict';
/**
 * 
 * @param {*} id univoc index
 * @param {*} description 
 * @param {*} deadline is optional
 * @param {*} is_urgent default is false
 * @param {*} is_pvt default is true
 */
 function Task(id, description, deadline, is_urgent = false, is_pvt = true,) {
    this.id = id;
    this.description = description;
    this.is_urgent = is_urgent;
    this.is_pvt = is_pvt;
    this.deadline = deadline;
}

function TaskList() {
    this.tasks = [];
    /**
     * pushing parameters 
     * @param {*} task the tasks to push
     */
    this.add = (task) => { 
        
        this.tasks.push(task);
     };
    /**
     * it sorts the tasks list in place
     * @returns a copy of the sorted taskList
     */
    this.sortTasks = () => {
        const result = this.tasks.sort((task1, task2) => {
            if (task2.deadline == undefined && task1.deadline == undefined)
                return 0;
            if (task2.deadline == undefined)
                return 1;
            if (task1.deadline == undefined)
                return -1;
            return task1.deadline.diff(task2.deadline, 'unit');
        });

        this.prettyPrint(result);
        return result;
    };

    





    /**
     * print a label with all the info about tasks
     * @param {*} tasks this must be an array of tasks 
     */
    this.prettyPrint = () => {
        console.log("id |pvt\t|urgent\t|deadline\t\t|desc");
        console.log("---------------------------------------------------------------");
        this.tasks.forEach(
            (task) => console.log(`${task.id} |${task.is_pvt}|${task.is_urgent}|${(task.deadline == undefined) ? '<not Defined>\t\t' : task.deadline.format('YYYY-MM-DD HH:mm:ss\t')}|${task.description}`)
        );
        console.log("---------------------------------------------------------------\n");

    };

    /**
     * function used to load the query result into the tasks array of this object
     * example: db.all(query,myTasks.loadingFromDb);
     * @param {*} err 
     * @param {*} rows 
     */
    this.loadingFromDb = (err, rows) => {
        if (err)
            console.log(err);
        else {
            for (let row of rows) {


                const task_tmp = new Task(
                    row.id, row.description,
                    (row.deadline == undefined) ? undefined : dayjs(row.deadline),
                    (row.urgent) ? true : false,
                    (row.private) ? true : false,
                    //BUG: it doesn't parse 0/1 into false/true value
                );
                this.add(task_tmp);
            }
        }
    };
}


/**
     * this function filters the tasks that are not urgent
     * The filter is not in place so the tasks array wont be changed
     * @param tasks list
     * @returns task list of urgent tasks
    */
function filterUrgent(tasks) {
    const result = tasks.filter((task) => task.is_urgent);
    return result;
};
/**
     * this function filters the tasks that are not private
     * The filter is not in place so the tasks array wont be changed
     * @param tasks list
     * @returns task list of private tasks
    */
function filterPrivate(tasks) {
    const result = tasks.filter((task) => task.is_pvt);
    return result;
};
/**
 * 
 * @param {*} tasks 
 * @returns tasks list of today (with deadline from now to 23:59 of today)
 */
function filterToday(tasks) {
    const result = tasks.filter((task) => {
        if (task.deadline == undefined ) 
          {  return false}
        else
        return (task.deadline.diff(dayjs(),'day') == 0 && task.deadline.diff(dayjs(),'min') > 0)});
    return result;
};
/**
 * 
 * @param {*} tasks 
 * @returns tasks list of the next 7 days 
 */
function filter7days(tasks) {
    const result = tasks.filter((task) => {
        if (task.deadline == undefined ) 
          {  return false}
        else
        return (task.deadline.diff(dayjs(),'day') <= 7 && task.deadline.diff(dayjs(),'min') > 0)});
    return result;
};


/**
 * this function will print in the html file the tasks
 * @param {*} tasks  task list to be printed in the html
 * @param {*} task_list_section node element of the section 
 */
function htmlPrint(tasks, task_list_section) {
    let html_private_icon = `
    <span class="p-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
            class="bi bi-person-square" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
        </svg>
    </span>`
    tasks.forEach(
        (task) => {
            let list_item = document.createElement('li');
            list_item.classList = "list-group-item trans";
            let str = '<div class="d-flex justify-content-between">';
            if (task.is_urgent)
                str += `    
                    <span>
                        <input type="checkbox" aria-label="Checkbox for following text input" class="form-check-input">
                            <span class="urgentTask">${task.description}</span>
                    </span>
                        `;
            else
                str += `
                    <span>
                        <input type="checkbox" aria-label="Checkbox for following text input" class="form-check-input">
                            <span class="defaultTask">${task.description}</span>
                    </span>
                `;

            if (task.is_pvt)
                str += html_private_icon;

            if (task.deadline == undefined)
                str += `
                    <span class="p-0">
                                not defined
                    </span>
                `
            else
                str += `
                    <span class="p-0">
                                ${task.deadline.format('YYYY-MM-DD HH:mm')}
                    </span>
                `


            str += `
                </div>`;
            list_item.innerHTML = str;
            task_list_section.appendChild(list_item);

        });

};



const myTasks1 = new TaskList();
// const task1 = new Task(1, 'bho1', dayjs('2000-01-01T00:01'), true, true);
// const task2 = new Task(2, 'bho2', dayjs('2021-03-20T04:20'));
// const task3 = new Task(3, 'bho3', dayjs('1945-11-24T23:59'));
// const task4 = new Task(4, 'bho4', dayjs('2030-12-24T23:59'));

let task1 = new Task(1, "laundry",dayjs('2021-03-29T23:59'),false,false);
let task2 = new Task(2, "monday lab", dayjs('2021-03-16T10:00'), false, false,);
let task3 = new Task(3, "phone call", dayjs('2021-03-08T16:20'), true, false);
let task4 = new Task(4, "dinner", dayjs('2021-03-28T18:00'), true, true);
let task5 = new Task(5, "Meet Douglas", dayjs('2021-03-31T13:00'), false, false);
let task6 = new Task(6, "My Task1", dayjs().add(1,'day'),true,true);
let task7 = new Task(7, "My Task2", dayjs().add(-1,'day'),true,false);
let task8 = new Task(8, "My Task3", dayjs().add(8,'day'),false,false);
let task9 = new Task(9, "No date task",undefined,true,true);


myTasks1.add(task1);
myTasks1.add(task2);
myTasks1.add(task3);
myTasks1.add(task4);
myTasks1.add(task5);
myTasks1.add(task6);
myTasks1.add(task7);
myTasks1.add(task8);
myTasks1.add(task9);
myTasks1.prettyPrint(myTasks1.tasks);

