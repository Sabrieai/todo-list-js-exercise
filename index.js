// now adding to newTasks as an object
const newTask = function(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    markCompleted: function() {
      this.complete = true;
    },
  };  return task;

};




// DRIVER CODE BELOW


const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState(); // before complete
task1.markCompleted();//mark as complete
task1.logState();// after complete

console.log(tasks);
/*
// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
const completeTask = function(taskIndex) {
  taskComplete[taskIndex] = true;
};

// Print the state of a task to the console in a nice readable way
const logTaskState = function(taskIndex) {
  const title = taskTitles[taskIndex];
  const complete = taskComplete[taskIndex];
  console.log(`${title} has${complete ? " " : " not "}been completed`);
};

// DRIVER CODE BELOW

newTask("Clean Cat Litter"); // task 0
newTask("Do Laundry"); // task 1

logTaskState(0); // Clean Cat Litter has not been completed
completeTask(0);
logTaskState(0); // Clean Cat Litter has been completed
*/
