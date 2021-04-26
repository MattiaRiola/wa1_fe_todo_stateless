
//TODO: new personal feature1: use sql lite to load the tasks
//TODO: new personal feature2: add a function that set as "completed" tasks after the user select the checkbox
//TODO: new personal feature3: add a filter button that shows completed tasks

document.addEventListener('DOMContentLoaded', (event) => {
    const filter_buttons = new Map([
        ["all_button" , document.getElementById('all_button')],
        ["important_button" , document.getElementById('important_button')],
        ["today_button" , document.getElementById('today_button')],
        ["next7days_button" , document.getElementById('next7days_button')],
        ["private_button" , document.getElementById('private_button')]
    
    ]);
    // const all_button = document.getElementById('all_button');
    // const important_button = document.getElementById('important_button');
    // const today_button = document.getElementById('today_button');
    // const next7days_button = document.getElementById('next7days_button');
    // const private_button = document.getElementById('private_button');
    
    
    
    let task_list_section = document.getElementById('task_list');
    
    let header_filter = document.createElement('h1');
    header_filter.className = "selected_filter";
    header_filter.innerText = 'All';
    task_list_section.appendChild(header_filter);
    let unordered_list = document.createElement("ul");
    unordered_list.className = "list-group list-group-flush"
    
    htmlPrint(myTasks1.tasks, unordered_list);
    
    task_list_section.appendChild(unordered_list);

    
    
    
    filter_buttons.get("all_button").addEventListener('click', () => {

        filter_buttons.forEach((value,key) => {
            value.className = "list-group-item list-group-item-action"
        })
        filter_buttons.get("all_button").className = "list-group-item list-group-item-action active";
        

        task_list_section = document.getElementById('task_list');
        let new_task_list_section = task_list_section.cloneNode(false);
        let header_filter = document.createElement('h1');
        header_filter.className = "selected_filter";
        header_filter.innerText = 'All';
        new_task_list_section.appendChild(header_filter);
        let unordered_list = document.createElement("ul");
        unordered_list.className = "list-group list-group-flush"
        
        htmlPrint(myTasks1.tasks, unordered_list);
        
        new_task_list_section.appendChild(unordered_list);

        task_list_section.replaceWith(new_task_list_section);
    })
    
    filter_buttons.get("important_button").addEventListener('click', () => {

        filter_buttons.forEach((value,key) => {
            value.className = "list-group-item list-group-item-action"
        })
        filter_buttons.get("important_button").className = "list-group-item list-group-item-action active";
        

        task_list_section = document.getElementById('task_list');
        let new_task_list_section = task_list_section.cloneNode(false);
        let header_filter = document.createElement('h1');
        header_filter.className = "selected_filter";
        header_filter.innerText = 'Important';
        new_task_list_section.appendChild(header_filter);
        let unordered_list = document.createElement("ul");
        unordered_list.className = "list-group list-group-flush"
        
        htmlPrint(filterUrgent(myTasks1.tasks), unordered_list);
        
        new_task_list_section.appendChild(unordered_list);

        task_list_section.replaceWith(new_task_list_section);




    })

    filter_buttons.get("today_button").addEventListener('click', () => {

        filter_buttons.forEach((value,key) => {
            value.className = "list-group-item list-group-item-action"
        })
        filter_buttons.get("today_button").className = "list-group-item list-group-item-action active";
        

        task_list_section = document.getElementById('task_list');
        let new_task_list_section = task_list_section.cloneNode(false);
        let header_filter = document.createElement('h1');
        header_filter.className = "selected_filter";
        header_filter.innerText = 'Today';
        new_task_list_section.appendChild(header_filter);
        let unordered_list = document.createElement("ul");
        unordered_list.className = "list-group list-group-flush"
        
        htmlPrint(filterToday(myTasks1.tasks), unordered_list);
        
        new_task_list_section.appendChild(unordered_list);

        task_list_section.replaceWith(new_task_list_section);

    })

    filter_buttons.get("next7days_button").addEventListener('click', () => {

        filter_buttons.forEach((value,key) => {
            value.className = "list-group-item list-group-item-action"
        })
        filter_buttons.get("next7days_button").className = "list-group-item list-group-item-action active";
        

        task_list_section = document.getElementById('task_list');
        let new_task_list_section = task_list_section.cloneNode(false);
        let header_filter = document.createElement('h1');
        header_filter.className = "selected_filter";
        header_filter.innerText = 'Next 7 days';
        new_task_list_section.appendChild(header_filter);
        let unordered_list = document.createElement("ul");
        unordered_list.className = "list-group list-group-flush"
        
        htmlPrint(filter7days(myTasks1.tasks), unordered_list);
        
        new_task_list_section.appendChild(unordered_list);

        task_list_section.replaceWith(new_task_list_section);
    })

    filter_buttons.get("private_button").addEventListener('click', () => {

        filter_buttons.forEach((value,key) => {
            value.className = "list-group-item list-group-item-action"
        })
        filter_buttons.get("private_button").className = "list-group-item list-group-item-action active";
        

        task_list_section = document.getElementById('task_list');
        let new_task_list_section = task_list_section.cloneNode(false);
        let header_filter = document.createElement('h1');
        header_filter.className = "selected_filter";
        header_filter.innerText = 'Private';
        new_task_list_section.appendChild(header_filter);
        let unordered_list = document.createElement("ul");
        unordered_list.className = "list-group list-group-flush"
        
        htmlPrint(filterPrivate(myTasks1.tasks), unordered_list);
        
        new_task_list_section.appendChild(unordered_list);

        task_list_section.replaceWith(new_task_list_section);
    })


});






console.log("byebye");



