var tasks = [{
    id: 0,
    name: "Do laundry",
    time: "2 days",
    priority: 1
}, {
    id: 1,
    name: "Do homework",
    time: "2 days",
    priority: 2
}, {
    id: 2,
    name: "Listen to music",
    time: "5 days",
    priority: 3
}, {
    id: 3,
    name: "Cooking",
    time: "2 days",
    priority: 2
}, {
    id: 4,
    name: "Texting",
    time: "5 days",
    priority: 4
}]
console.log("-- B1 --");
console.log(tasks);

console.log("-- B2 --");
console.log("a. ");
function showTask(task){
    tasks.forEach(function(tasks){
        console.log(`ID: ${tasks.id} - Name: ${tasks.name} - Time: ${tasks.time} - Priority: ${tasks.priority}`);
    });
}
showTask(tasks);

console.log("b. ");
function deleteTask(tasks, id){
    var index = tasks.findIndex(function(task){
        return id === task.id
    });
    tasks.splice(index,1);
    showTask(tasks);
}
deleteTask(tasks, 1);

console.log("c. ");
function sortTaskByPriority(task){
    tasks.sort(function(a, b){
        if(a.priority > b.priority){
            return +1;
        }else if (a.priority < b.priority){
            return -1;
        }else{
            return 0;
        }
    });
    showTask(tasks);
}
sortTaskByPriority(tasks);