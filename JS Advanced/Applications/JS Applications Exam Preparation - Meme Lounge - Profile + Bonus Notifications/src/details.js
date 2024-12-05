import { html, render } from '../node_modules/lit-html/lit-html.js';
import { getOne } from '../api/api.js';
import { deleteView } from "/src/delete.js";

const main = document.querySelector('body > #container > main');  // probably need to change this

const template = (arr, isOwner, isLogged, likes, likeHandlerTag, isLiked) => html`
<section id="meme-details">
    <h1>Meme Title: ${arr.title}</h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src="${arr.imageUrl}">
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>${arr.description}</p>

            ${isOwner ? html`
            <a class="button warning" href="/dashboard/${arr._id}/edit">Edit</a>
            <button @click=${deleteView.bind(arr)} class="button danger">Delete</button>
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
  //let isLiked = false;
  let currentOwnerId = '';
  const userData = JSON.parse(localStorage.getItem('userData'));

  if (userData !== null && userData._id) {
    currentOwnerId = userData._id;
    isLogged = true;
  }

  if (currentOwnerId === response._ownerId) {
    isOwner = true;
  }

  // //get likes
  // const likesUrl = `http://localhost:3030/data/likes?where=solutionId%3D%22${id}%22&distinct=_ownerId&count`;
  // const responseLikes = await fetch(likesUrl);
  // const dataLikes = await responseLikes.json();



  // //checkIfLiked
  // if (isLogged) {
  //   const userData = JSON.parse(localStorage.getItem('userData'));
  //   const checkLikeUrl = `http://localhost:3030/data/likes?where=solutionId%3D%22${id}%22%20and%20_ownerId%3D%22${currentOwnerId}%22&count`;


  //   const responseCheckLike = await fetch(checkLikeUrl, {
  //     method: 'GET',
  //     headers: {
  //       'X-Authorization': userData.accessToken
  //     }
  //   });
  //   const dataCheckLike = await responseCheckLike.json();
  //   if (dataCheckLike > 0) {
  //     isLiked = true;
  //   }

  // }

  //if (response) {
  // render(template(response, isOwner, isLogged, dataLikes, likeHandler.bind(ctx), isLiked), main); // use this render if task has likes
  //}

  if (response) {
    render(template(response, isOwner), main);
  }
}

// async function likeHandler() {
//   const { id } = this.params;

//   const userData = JSON.parse(localStorage.getItem('userData'));

//   if (!userData.accessToken) return;

//   const likeUrl = `http://localhost:3030/data/likes`;

//   const responseLikes = await fetch(likeUrl, {
//     method: 'POST',
//     body: JSON.stringify({
//       solutionId: id //  the name of the property will probably be different
//     }),
//     headers: {
//       'Content-Type': 'application/json',
//       'X-Authorization': userData.accessToken
//     }
//   });

//   const dataLikes = await responseLikes.json();
// }