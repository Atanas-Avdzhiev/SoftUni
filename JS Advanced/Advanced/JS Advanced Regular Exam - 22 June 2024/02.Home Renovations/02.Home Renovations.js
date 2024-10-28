class HomeRenovation {
    constructor(budget) {
        this.budget = budget;
        this.tasks = [];
        this.completedTasks = [];
    }

    addTask(description, cost, priority) {
        if (cost > this.budget) return `Not enough budget to add '${description}' task.`;
        else {
            const currentTask = {
                description: description,
                cost: cost,
                priority: priority,
            }
            this.tasks.push(currentTask);
            this.budget -= cost;
            return `The task '${description}' has been successfully added to the renovation plan.`;
        }
    }

    markTaskAsCompleted(description) {
        const taskExists = this.tasks.find((task) => task.description === description);
        if (taskExists) {
            const indexOfTask = this.tasks.indexOf(taskExists);
            this.tasks.splice(indexOfTask, 1);
            this.completedTasks.push(taskExists);
            return `The task '${description}' has been successfully completed.`;
        }
        else {
            throw new Error(`Task '${description}' not found in the renovation plan.`);
        }
    }

    getPriorityTasksCount(minimalPriority) {
        if (minimalPriority <= 0) return 'The priority cannot be zero or negative.';
        let currentPriorityTasks = 0;

        for (const task of this.tasks) {
            if (task.priority >= minimalPriority) {
                currentPriorityTasks++;
            }
        }
        if (currentPriorityTasks > 0) return `You have ${currentPriorityTasks} tasks to prioritize.`;
        else return `No tasks found with priority ${minimalPriority} or higher.`;
    }

    renovationSummary() {
        if (this.completedTasks.length === 0) throw new Error('No tasks have been completed yet!');
        else {
            let result = `Budget left $${this.budget}.`;
            result += `\nYou have completed ${this.completedTasks.length} tasks.`;
            result += '\nPending tasks in the renovation plan:';

            for (const task of this.tasks) {
                result += `\n${task.description} - Cost: ${task.cost}, Priority: ${task.priority}`;
            }
            return result;
        }
    }
}

const renovation = new HomeRenovation(10000);
console.log(renovation.addTask("Paint walls", 1500, 2));
console.log(renovation.addTask("Install new windows", 5000, 1));
console.log(renovation.markTaskAsCompleted("Paint walls"));
console.log(renovation.renovationSummary());