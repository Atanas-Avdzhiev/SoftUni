const homeButton = document.querySelector('body header nav a');
homeButton.addEventListener('click', (e) => {
    e.preventDefault();
    loadPosts();
})

async function loadPosts() {

    const divMain = document.querySelector('.new-topic-border');
    divMain.style.display = 'block';

    const divComments = document.querySelector('#comments-container');
    divComments.style.display = 'none';

    const postsURL = 'http://localhost:3030/jsonstore/collections/myboard/posts';

    const res = await fetch(postsURL);
    const data = await res.json();

    const dataValues = Object.values(data);
    const divAllTopics = document.querySelector('.topic-title');
    divAllTopics.style.display = 'block';
    divAllTopics.innerHTML = '';

    dataValues.forEach(post => {
        const divTopic = document.createElement('div');
        divTopic.setAttribute('class', 'topic-container');
        divTopic.id = post._id;

        divTopic.innerHTML = `<div class="topic-name-wrapper">
        <div class="topic-name">
            <a href="#" class="normal">
                <h2>${post.title}</h2>
            </a>
            <div class="columns">
                <div>
                    <p>Date: <time>${post.date}</time></p>
                    <div class="nick-name">
                        <p>Username: <span>${post.username}</span></p>
                    </div>
                </div>


            </div>
        </div>
    </div>`;
        const aComments = divTopic.querySelector('a');
        aComments.addEventListener('click', (e) => {
            e.preventDefault();
            showComments(post._id, post);
        })
        divAllTopics.appendChild(divTopic);
    })
}
loadPosts();

function createTopic() {
    const titleInput = document.querySelector('#topicName');
    const usernameInput = document.querySelector('#username');
    const postTextInput = document.querySelector('#postText');
    const cancelButton = document.querySelector('.cancel');
    const postButton = document.querySelector('.public');

    postButton.addEventListener('click', async (e) => {
        e.preventDefault();

        if (titleInput.value === '' || usernameInput.value === '' || postTextInput.value === '') {
            alert('All fields must be filled.');
            return;
        }

        const postURL = 'http://localhost:3030/jsonstore/collections/myboard/posts';
        const date = new Date().toISOString();

        const res = await fetch(postURL, {
            method: 'POST',
            body: JSON.stringify({
                title: titleInput.value,
                username: usernameInput.value,
                content: postTextInput.value,
                date: date
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json();
        titleInput.value = '';
        usernameInput.value = '';
        postTextInput.value = '';
        loadPosts();
    })

    cancelButton.addEventListener('click', (e) => {
        e.preventDefault();

        titleInput.value = '';
        usernameInput.value = '';
        postTextInput.value = '';
    })
}
createTopic()

async function showComments(postID, currentPost) {

    const divMain = document.querySelector('.new-topic-border');
    divMain.style.display = 'none';

    const divAllTopics = document.querySelector('.topic-title');
    divAllTopics.style.display = 'none';

    const divComments = document.querySelector('#comments-container');
    divComments.style.display = 'block';

    const commentsURL = `http://localhost:3030/jsonstore/collections/myboard/comments/${postID}`;

    const res = await fetch(commentsURL);

    const divThemeContent = document.createElement('div');
    divThemeContent.setAttribute('class', 'theme-content');

    const divTitle = document.createElement('div');
    divTitle.setAttribute('class', 'theme-title');

    divTitle.innerHTML = `<div class="theme-name-wrapper">
    <div class="theme-name">
        <h2>${currentPost.title}</h2>

    </div>
</div>`;
    divComments.innerHTML = '';
    divThemeContent.appendChild(divTitle);

    const divPostComments = document.createElement('div');
    divPostComments.setAttribute('class', 'comment');

    divPostComments.innerHTML = `<div class="header">
    <img src="./static/profile.png" alt="avatar">
    <p><span>${currentPost.username}</span> posted on <time>${currentPost.date}</time></p>

    <p class="post-content">${currentPost.content}</p>
</div>`;

    divThemeContent.appendChild(divPostComments);

    if (res.status === 200) {// if has comments
        const data = await res.json();
        const dataValues = Object.values(data);

        dataValues.forEach(comment => {
            const divComment = document.createElement('div');
            divComment.id = 'user-comment';
            divComment.innerHTML = `<div class="topic-name-wrapper">
            <div class="topic-name">
                <p><strong>${comment.username}</strong> commented on <time>${comment.date}</time></p>
                <div class="post-content">
                    <p>${comment.postText}</p>
                </div>
            </div>
        </div>`;
            divPostComments.appendChild(divComment);
        })
    }

    const divAnswerComment = document.createElement('div');
    divAnswerComment.setAttribute('class', 'answer-comment');

    divAnswerComment.innerHTML = `<p><span>currentUser</span> comment:</p>
    <div class="answer">
        <form>
            <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
            <div>
                <label for="username">Username <span class="red">*</span></label>
                <input type="text" name="username" id="username">
            </div>
            <button>Post</button>
        </form>
    </div>`;
    divThemeContent.appendChild(divAnswerComment);
    divComments.appendChild(divThemeContent);

    const postButton = divAnswerComment.querySelector('button');

    postButton.addEventListener('click', (e) => {
        e.preventDefault();
        postComment(divAnswerComment, postID, currentPost);
    })

}

async function postComment(divAnswerComment, postID, currentPost) {
    const commentInput = divAnswerComment.querySelector('#comment');
    const usernameInput = divAnswerComment.querySelector('#username');
    const date = new Date();
    const formattedDate = new Intl.DateTimeFormat('en-US', {
        dateStyle: 'short',
        timeStyle: 'medium'
    }).format(date);

    const postURL = `http://localhost:3030/jsonstore/collections/myboard/comments/${postID}`;

    const res = await fetch(postURL, {
        method: 'POST',
        body: JSON.stringify({
            postText: commentInput.value,
            username: usernameInput.value,
            date: formattedDate
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await res.json();
    showComments(postID, currentPost);
}