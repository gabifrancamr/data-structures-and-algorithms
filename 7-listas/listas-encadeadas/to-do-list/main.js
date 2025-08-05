import { Task, TaskStatus } from "./task.js";
import TaskList from "./task-list.js";

const showTasks = (taskList) => {
    taskList.forEach(item => {
        showTask(item)
    });
}

const showTask = (item) => {
    if (item == null) {
        console.log('Task not found')
        return
    }

    console.log(`Task ${item.id}: ${item.description} | Tag: ${item.tag} | Status: ${item.status}`)
}

const task1 = new Task(1, "Daily with a team", "meeting")
const task2 = new Task(2, "Implement some feature", "job", TaskStatus.COMPLETED)
const task3 = new Task(3, "Reading a book", "study", TaskStatus.COMPLETED)
const task4 = new Task(4, "Review a documentation", "job")
const task5 = new Task(5, "Review a project", "meeting")
const task6 = new Task(6, "Deploy a project", "job")
const task7 = new Task(7, "Reeding article", "study")

const taskList = new TaskList()

taskList.addTask(task1)
taskList.addTask(task2)
taskList.addTask(task3)
taskList.addTask(task4)
taskList.addTask(task5)
taskList.addTask(task6)
taskList.addTask(task7)

// showTasks(taskList.getTasks())

// showTasks(taskList.getTasksByTag("job"))

// showTasks(taskList.getTasksByTag("study"))
// showTask(taskList.getTaskById(2))

// taskList.removeTaskById(3)
// showTasks(taskList.getTasks())

// showTask(taskList.setTaskToCompleted(1))

// const taskUpdate = new Task(null, 'Reading working article', 'job')
// showTask(taskList.seTaskDataById(7, taskUpdate))

taskList.move(7, 1)
taskList.move(3, 5)
showTasks(taskList.getTasks())

