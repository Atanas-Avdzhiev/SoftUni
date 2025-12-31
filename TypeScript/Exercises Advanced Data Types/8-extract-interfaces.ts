interface User { username: string, signupDate: Date };

interface Task {
    status: Status,
    title: string,
    daysRequired: number,
    assignedTo: {
        username: string,
        signupDate: Date
    } | undefined,
    changeStatus(newStatus: Status): void
}

type Status = 'Logged' | 'Started' | 'InProgress' | 'Done';

function assignTask(user: User, task: Task) {

    if (task.assignedTo == undefined) {
        task.assignedTo = user;
        console.log(`User ${user.username} assigned to task '${task.title}'`);
    }
}

let user: User & { passwordHash: string } = {
    username: 'Margaret',
    signupDate: new Date(2022, 1, 13),
    passwordHash: 'random'
}

let task1: Task = {
    status: 'Logged',
    title: 'Need assistance',
    daysRequired: 1,
    assignedTo: undefined,
    changeStatus(newStatus: Status) { this.status = newStatus; }
}

let task2: Task & { moreProps: number; evenMore: string } = {
    status: 'Done',
    title: 'Test',
    daysRequired: 12,
    assignedTo: undefined,
    changeStatus(newStatus: Status) { this.status = newStatus; },
    moreProps: 300,
    evenMore: 'wow'
}

assignTask(user, task1);
assignTask(user, task2);