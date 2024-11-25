import { html, render } from '../node_modules/lit-html/lit-html.js';
import { getOne } from '../api/api.js';

const main = document.querySelector('body > #content > main');

const template = (arr, isOwner, isLogged, likes, likeHandlerTag, isLiked) => html`
    <section id="details">
        <div id="details-wrapper">
          <img id="details-img" src=".${arr.imageUrl}" alt="example1" />
          <div>
            <div id="info-wrapper">
              <p id="details-type">${arr.type}</p>
              <div id="details-description">
                <p id="user-type">${arr.userType}</p>
                <p id="description">
                ${arr.description}
                </p>
              </div>
              <h3>Like tattoo:<span id="like">${likes}</span></h3>
              
              <div id="action-buttons">
                
                ${isOwner ? html`
                <a href="/dashboard/${arr._id}/edit" id="edit-btn">Edit</a>
                <a href="/dashboard/${arr._id}/delete" id="delete-btn">Delete</a>
                ` : ''}
                
                ${!isOwner && isLogged && !isLiked ? html`
                <a @click=${likeHandlerTag} href="" id="like-btn">Like</a>
                ` : ''}

              </div>
            </div>
          </div>
        </div>
    </section>
`;

export async function detailsView(ctx) {
  const { id } = ctx.params;
  const response = await getOne(id);

  let isLogged = false;
  let isOwner = false;
  let isLiked = false;
  let currentOwnerId = '';
  const userData = JSON.parse(localStorage.getItem('userData'));

  if (userData !== null && userData._id) {
    currentOwnerId = userData._id;
    isLogged = true;
  }

  if (currentOwnerId === response._ownerId) {
    isOwner = true;
  }

  //get likes
  const likesUrl = `http://localhost:3030/data/likes?where=tattooId%3D%22${id}%22&distinct=_ownerId&count`;
  const responseLikes = await fetch(likesUrl);
  const dataLikes = await responseLikes.json();

  //checkIfLiked
  if (isLogged) {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const checkLikeUrl = `http://localhost:3030/data/likes?where=tattooId%3D%22${id}%22%20and%20_ownerId%3D%22${currentOwnerId}%22&count`;
    const responseCheckLike = await fetch(checkLikeUrl, {
      method: 'GET',
      headers: {
        'X-Authorization': userData.accessToken
      }
    });
    const dataCheckLike = await responseCheckLike.json();
    if (dataCheckLike > 0) {
      isLiked = true;
    }
  }

  render(template(response, isOwner, isLogged, dataLikes, likeHandler.bind(ctx), isLiked), main);
}

async function likeHandler() {
  const { id } = this.params;

  const userData = JSON.parse(localStorage.getItem('userData'));

  if (!userData.accessToken) return;

  const likeUrl = `http://localhost:3030/data/likes`;

  const responseLikes = await fetch(likeUrl, {
    method: 'POST',
    body: JSON.stringify({
      tattooId: id
    }),
    headers: {
      'Content-Type': 'application/json',
      'X-Authorization': userData.accessToken
    }
  });

  const dataLikes = await responseLikes.json();
}