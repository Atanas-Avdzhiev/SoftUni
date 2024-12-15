const http = require('http');
const querystring = require('querystring');

const users = [
    {
        username: 'admin',
        email: 'admin@quiz.com',
        password: '1234',
        userId: '1'
    },
    {
        username: "1",
        email: "1",
        password: "1",
        userId: "eb892aad-fc0f-4356-bee3-4fd9ba6f3107"
    }
];

const quizzes = [
    {
        quizCreatedOn: 1734191778,
        quizId: "8cd51d40-f716-4397-ae3f-39ba6a880d05",
        quizOwnerId: "eb892aad-fc0f-4356-bee3-4fd9ba6f3107",
        title: "Title Test 1",
        topic: "Topic Test 1",
        questionCount: 0,
        takenCount: 0,
        quizOwnerUsername: "Gosho",
        description: "Description Test"
    },
    {
        quizCreatedOn: 1734192028,
        quizId: "6f5071cd-0ce8-462e-822e-28a141987d26",
        quizOwnerId: "eb892aad-fc0f-4356-bee3-4fd9ba6f3107",
        title: "Title Test 2",
        topic: "Topic Test 2",
        questionCount: 3,
        takenCount: 2,
        quizOwnerUsername: "Petko",
        description: "Description Test"
    }
];

const questions = [
    {
        answers: ['1', '2', '3'],
        correctIndex: 1,
        questionId: "0e596b6e-e394-4ae0-a546-89228bd11a3c",
        quizId: "8cd51d40-f716-4397-ae3f-39ba6a880d05",
        text: "Question Test 1"
    }
];

const solutions = [];

const server = http.createServer((req, res) => {
    //console.log(req.url);

    // Set CORS headers to allow cross-origin requests
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins (or specify a domain)
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allowed HTTP methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Authorization'); // Allowed headers

    if (req.url === '/users/register' && req.method === 'POST') { // Register user
        let body = '';

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            try {
                const parsedBody = JSON.parse(body);

                if (!parsedBody.email || !parsedBody.password || !parsedBody.username) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ message: 'Required body keys: email, password, username' }));
                }

                if (typeof parsedBody.email !== 'string') {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ message: 'Email must be a string!' }));
                }

                if (typeof parsedBody.password !== 'string') {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ message: 'Password must be a string!' }));
                }

                if (typeof parsedBody.username !== 'string') {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ message: 'Username must be a string!' }));
                }

                const findAcc = users.find(x => x.username.toLowerCase() === parsedBody.username.toLowerCase());
                if (findAcc) {
                    res.writeHead(409, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ message: 'Username already exists!' }));
                }

                const findEmail = users.find(x => x.email.toLowerCase() === parsedBody.email.toLowerCase());
                if (findEmail) {
                    res.writeHead(409, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ message: 'Email already exists!' }));
                }

                const newAccessToken = crypto.randomUUID();
                const newUserId = crypto.randomUUID();

                const newUser = {
                    username: parsedBody.username.toLowerCase(),
                    email: parsedBody.email.toLowerCase(),
                    password: parsedBody.password,
                    userId: newUserId,
                    accessToken: newAccessToken
                }
                users.push(newUser);

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Account registered successfully!', data: newUser }));
            }
            catch (err) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Invalid format!', rawError: err }));
            }
        });
        return;
    }

    if (req.url === '/users/login' && req.method === 'POST') { // Login user
        let body = '';

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            try {
                const parsedBody = JSON.parse(body);

                if (!parsedBody.email || !parsedBody.password) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ message: 'Required body keys: email, password' }));
                }

                if (typeof parsedBody.email !== 'string') {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ message: 'Email must be a string!' }));
                }

                if (typeof parsedBody.password !== 'string') {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ message: 'Password must be a string!' }));
                }

                const findUser = users.find(x => x.email.toLowerCase() === parsedBody.email.toLowerCase());
                if (!findUser) {
                    res.writeHead(401, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ message: 'Email does not exist!' }));
                }

                if (!(parsedBody.password === findUser.password)) {
                    res.writeHead(401, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ message: 'Invalid password' }));
                }
                const token = crypto.randomUUID();
                findUser.accessToken = token;

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Account logged successfully!', data: findUser }));
            }
            catch (err) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Invalid format!', rawError: err }));
            }
        });
        return;
    }

    if (req.url === '/users/logout' && req.method === 'GET') { // Logout user. Authorization required.

        if (!req.headers['x-authorization']) {
            res.writeHead(401, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ message: 'Authorization required!' }));
        }
        const findUser = users.find(user => user.accessToken === req.headers['x-authorization']);

        if (findUser) {
            delete findUser.accessToken;

            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ message: 'Logout successfull!' }));
        }
        res.writeHead(404, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ message: 'Failed to find user!' }));

    }

    if (req.url === '/data/quizzes' && req.method === 'POST') { // Create a new quiz. Authorization required.
        let body = '';

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            try {
                const parsedBody = JSON.parse(body);

                if (!req.headers['x-authorization']) {
                    res.writeHead(401, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ message: 'Authorization required!' }));
                }

                const findUser = users.find(user => user.accessToken === req.headers['x-authorization']);

                if (!findUser) {
                    res.writeHead(401, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ message: 'Authorization failed! Wrong Access Token!' }));
                }

                if (!parsedBody.title || !parsedBody.topic || !parsedBody.description) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ message: 'Required body keys: title, topic, description' }));
                }

                if (typeof parsedBody.title !== 'string') {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ message: 'Title must be a string!' }));
                }

                if (typeof parsedBody.topic !== 'string') {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ message: 'Topic must be a string!' }));
                }

                if (typeof parsedBody.description !== 'string') {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ message: 'Description must be a string!' }));
                }

                const findQuiz = quizzes.find(quiz => quiz.title === parsedBody.title);
                if (findQuiz) {
                    res.writeHead(409, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ message: 'Quiz with the same title already exists!' }));
                }
                const quizToken = crypto.randomUUID();
                const timestampInSeconds = Math.floor(Date.now() / 1000);
                const newQuiz = {
                    title: parsedBody.title,
                    topic: parsedBody.topic,
                    questionCount: 0,
                    quizId: quizToken,
                    quizOwnerId: findUser.userId,
                    quizCreatedOn: timestampInSeconds,
                    takenCount: 0,
                    quizOwnerUsername: findUser.username,
                    description: parsedBody.description
                };
                quizzes.push(newQuiz);

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Quiz created successfully!', data: newQuiz }));

            }
            catch (err) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Invalid format!', rawError: err }));
            }
        });
        return;
    }

    if (req.url === '/data/questions' && req.method === 'POST') { // Create a new question, requires correct quizId in the body. Authorization required.
        let body = '';

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            try {
                const parsedBody = JSON.parse(body);

                if (!req.headers['x-authorization']) {
                    res.writeHead(401, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ message: 'Authorization required!' }));
                }

                const findUser = users.find(user => user.accessToken === req.headers['x-authorization']);

                if (!findUser) {
                    res.writeHead(401, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ message: 'Authorization failed! Wrong Access Token!' }));
                }

                if (!parsedBody.text || !parsedBody.answers || !parsedBody.correctIndex || !parsedBody.quizId) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ message: 'Required body keys: text, answers, correctIndex, quizId' }));
                }

                if (typeof parsedBody.text !== 'string') {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ message: 'Text must be a string!' }));
                }
                const isValidAnswers = Array.isArray(parsedBody.answers) && parsedBody.answers.every(question => typeof question === 'string');

                if (!isValidAnswers) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ message: 'Answers must be an array of strings!' }));
                }

                if (parsedBody.answers.length < 2) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ message: 'Answers must be atleast two!' }));
                }

                if (typeof parsedBody.correctIndex !== 'number') {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ message: 'Correct Index must be a number!' }));
                }

                if (parsedBody.correctIndex < 0 || parsedBody.correctIndex >= parsedBody.answers.length) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ message: 'Correct Index must be in the range of answers array!' }));
                }

                const findQuiz = quizzes.find(quiz => quiz.quizId === parsedBody.quizId);

                if (!findQuiz) {
                    res.writeHead(404, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ message: 'Quiz with the provided ID does not exist!' }));
                }

                const findQuestions = questions.filter(question => question.quizId === parsedBody.quizId);
                const findQuestionText = findQuestions.find(question => question.text === parsedBody.text);

                if (findQuestionText) {
                    res.writeHead(409, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ message: `Question with the same Text already exists in the quiz ${findQuiz.title}` }));
                }

                if (findUser.userId !== findQuiz.quizOwnerId) {
                    res.writeHead(401, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ message: 'You are not the creator of the quiz!' }));
                }
                const questionToken = crypto.randomUUID();

                const newQuestion = {
                    text: parsedBody.text,
                    answers: parsedBody.answers,
                    correctIndex: parsedBody.correctIndex,
                    questionId: questionToken,
                    quizId: findQuiz.quizId
                };
                questions.push(newQuestion);
                findQuiz.questionCount++;

                res.writeHead(200, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ message: `Successfully added new question for Quiz: ${findQuiz.title}`, data: newQuestion }));
            }
            catch (err) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Invalid format!', rawError: err }));
            }
        });
        return;
    }

    if (req.url === '/data/quizzes' && req.method === 'GET') { // Get all quizzes. URL - /data/quizzes
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ message: `Total quizzes number: ${quizzes.length}`, data: quizzes }));
    }

    if (req.url === '/data/quizzes/recent' && req.method === 'GET') { // Get most recent quiz. URL - /data/quizzes/recent
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ message: `Most recently added quiz: ${quizzes.at(-1)}`, data: quizzes.at(-1) }));
    }

    const query = querystring.parse(req.url);

    if (query.quizId && !query.questionId && req.method === 'GET') { // Get all questions for a quiz. URL - /data/questions/&&quizId=${quizId}
        const quizId = query.quizId;
        const findQuiz = quizzes.find(quiz => quiz.quizId === quizId);

        if (!findQuiz) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ message: 'Quiz with the given ID does not exist!' }));
        }

        const questionsForCurrentQuiz = questions.filter(question => question.quizId === findQuiz.quizId);

        // if (questionsForCurrentQuiz.length === 0) {
        //     res.writeHead(404, { 'Content-Type': 'application/json' });
        //     return res.end(JSON.stringify({ message: 'There are no questions yet for this quiz!' }));
        // }

        //If the quiz has no questions yet, an empty array wil be returned in the data.
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ message: `Total questions for quiz ${findQuiz.title}: ${questionsForCurrentQuiz.length}`, data: questionsForCurrentQuiz }));
    }

    if (query.quizId && query.questionId && req.method === 'GET') { // Get a specific question from a specific quiz. URL - /data/questions/&&quizId=${quizId}&&questionId=${questionId}
        const quizId = query.quizId;
        const findQuiz = quizzes.find(quiz => quiz.quizId === quizId);

        if (!findQuiz) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ message: 'Quiz with the given ID does not exist!' }));
        }

        const findQuestions = questions.filter(question => question.quizId === findQuiz.quizId);
        if (findQuestions.length === 0) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ message: `The quiz ${findQuiz.title} has no questions yet!` }));
        }

        const findQuestion = findQuestions.find(question => question.questionId === query.questionId);
        if (!findQuestion) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ message: `The quiz ${findQuiz.title} has no question with the provided ID!` }));
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ message: `Found question ${findQuestion.text} in the quiz ${findQuiz.title}`, data: findQuestion }));
    }

    if (req.url === '/data/solutions' && req.method === 'POST') { // Create a new solution, requires correct quizId in the body. Authorization required.
        let body = '';

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            try {
                const parsedBody = JSON.parse(body);

                if (!req.headers['x-authorization']) {
                    res.writeHead(401, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ message: 'Authorization required!' }));
                }

                const findUser = users.find(user => user.accessToken === req.headers['x-authorization']);

                if (!findUser) {
                    res.writeHead(401, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ message: 'Authorization failed! Wrong Access Token!' }));
                }

                if (!parsedBody.quizId || !parsedBody.correct) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ message: 'Required body keys: quizId, correct' }));
                }

                if (typeof parsedBody.correct !== 'number') {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ message: 'Correct must be a number!' }));
                }

                const findQuiz = quizzes.find(quiz => quiz.quizId === parsedBody.quizId);

                if (!findQuiz) {
                    res.writeHead(404, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ message: 'Quiz with the provided ID does not exist!' }));
                }

                const findSolution = solutions.find(solution => solution.quizId === findQuiz.quizId && solution.userId === findUser.userId);

                if (findSolution) {
                    res.writeHead(409, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ message: `User ${findUser.username} has already sent a solution for quiz: ${findQuiz.title}` }));
                }

                const solutionId = crypto.randomUUID();

                const newSolution = {
                    quizId: parsedBody.quizId,
                    correct: parsedBody.correct,
                    userId: findUser.userId,
                    solutionId: solutionId
                };
                findQuiz.takenCount++;
                solutions.push(newSolution);

                res.writeHead(200, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ message: 'Solution added successfully!', data: newSolution }));
            }
            catch (err) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Invalid format!', rawError: err }));
            }
        });
        return;
    }

    if (query.quizIdDetails && req.method === 'GET') { // Get a specific quiz. URL - /data/&&quizIdDetails=${quizId}
        const quizId = query.quizIdDetails;

        const findQuiz = quizzes.find(quiz => quiz.quizId === quizId);

        if (!findQuiz) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ message: 'Quiz with the given ID does not exist!' }));
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ message: `Found quiz with title: ${findQuiz.title}`, data: findQuiz }));
    }

    res.end(JSON.stringify({ message: 'There is nothing here' }));
});

const port = 5001;
server.listen(port);

console.log(`Server is listening on port ${port}`);