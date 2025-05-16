//node js needed to run this code
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const tasks = [];

function showMenu() {
  console.log(`
Your Todo List:
1. Add a Task
2. View All Tasks
3. Mark Task as Complete
4. Delete a Task
5. Exit

Please choose an option (1-5)
`);
  rl.question('Choose an option: ', handleMenu);
}
function handleMenu(option) {
  switch (option.trim()) {
    case '1':
      rl.question('Enter the task title: ', (title) => {
        tasks.push({ title, completed: false });
        console.log('Task added!\n');
        showMenu();
      });
      break;

    case '2':
      console.log('\nTasks:');
      if (tasks.length === 0) {
        console.log('No tasks yet.\n');
      } else {
        tasks.forEach((task, index) => {
          const status = task.completed ? '[X]' : '[ ]';
          console.log(`${index + 1}. ${status} ${task.title}`);
        });
        console.log('');
      }
      showMenu();
      break;

    case '3':
      rl.question('Enter task number to mark as complete: ', (num) => {
        const index = parseInt(num) - 1;
        if (tasks[index]) {
          tasks[index].completed = true;
          console.log('Task marked as complete!\n');
        } else {
          console.log('Invalid task number.\n');
        }
        showMenu();
      });
      break;

    case '4':
      rl.question('Enter task number to delete: ', (num) => {
        const index = parseInt(num) - 1;
        if (tasks[index]) {
          tasks.splice(index, 1);
          console.log('Task deleted!\n');
        } else {
          console.log('Invalid task number.\n');
        }
        showMenu();
      });
      break;

    case '5':
      console.log('Goodbye!');
      rl.close();
      break;

    default:
      console.log('Invalid option. Try again.\n');
      showMenu();
      break;
  }
}
showMenu();
