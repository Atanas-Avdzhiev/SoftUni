import { html, render } from '../node_modules/lit-html/lit-html.js';
import { getOne } from '../api/api.js';

const main = document.querySelector('body > #content');  // probably need to change this

const template = (arr, isOwner, isLogged, likes, likeHandlerTag, isLiked) => html`
        <section id="detailsPage">
            <div class="details">
                <div class="animalPic">
                    <img src="${arr.image}">
                </div>
                <div>
                    <div class="animalInfo">
                        <h1>Name: ${arr.name}</h1>
                        <h3>Breed: ${arr.breed}</h3>
                        <h4>Age: ${arr.age} years</h4>
                        <h4>Weight: ${arr.weight}kg</h4>
                        <h4 class="donation">Donation: ${likes * 100}$</h4>
                    </div>
                    ${isLogged ? html`
                    <div class="actionBtn">
                        ${isOwner ? html`
                        <a href="/dashboard/${arr._id}/edit" class="edit">Edit</a>
                        <a href="/dashboard/${arr._id}/delete" class="remove">Delete</a>
                        ` : ''}
                        ${!isOwner && !isLiked ? html`
                        <a @click=${likeHandlerTag} href="" class="donate">Donate</a>
                        ` : ''}
                    </div>
                    ` : ''}
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
  const likesUrl = `http://localhost:3030/data/donation?where=petId%3D%22${id}%22&distinct=_ownerId&count`;
  const responseLikes = await fetch(likesUrl);
  const dataLikes = await responseLikes.json();



  //checkIfLiked
  if (isLogged) {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const checkLikeUrl = `http://localhost:3030/data/donation?where=petId%3D%22${id}%22%20and%20_ownerId%3D%22${currentOwnerId}%22&count`;


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

  if (response) {
    render(template(response, isOwner, isLogged, dataLikes, likeHandler.bind(ctx), isLiked), main); // use this render if task has likes
  }

  // if (response) {
  //   render(template(response, isOwner), main);
  // }
}

async function likeHandler() {
  const { id } = this.params;

  const userData = JSON.parse(localStorage.getItem('userData'));

  if (!userData.accessToken) return;

  const likeUrl = `http://localhost:3030/data/donation`;

  const responseLikes = await fetch(likeUrl, {
    method: 'POST',
    body: JSON.stringify({
      petId: id //  the name of the property will probably be different
    }),
    headers: {
      'Content-Type': 'application/json',
      'X-Authorization': userData.accessToken
    }
  });

  const dataLikes = await responseLikes.json();
}