import { html, render } from '../node_modules/lit-html/lit-html.js';
import { getOne } from '../api/api.js';

const main = document.querySelector('body > #wrapper > main');  // probably need to change this

const template = (arr, isOwner, isLogged, likes, likeHandlerTag, isLiked) => html`
        <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=".${arr.imageUrl}" alt="example1" />
            <p id="details-title">${arr.model}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p class="price">Price: €${arr.price}</p>
                <p class="weight">Weight: ${arr.weight} kg</p>
                <p class="top-speed">Top Speed: ${arr.speed} kph</p>
                <p id="car-description">${arr.about}</p>
              </div>
              <div id="action-buttons">
                ${isOwner ? html`
                <a href="/dashboard/${arr._id}/edit" id="edit-btn">Edit</a>
                <a href="/dashboard/${arr._id}/delete" id="delete-btn">Delete</a>
                ` : ''}
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

  // render(template(response, isOwner, isLogged, dataLikes, likeHandler.bind(ctx), isLiked), main); // use this render if task has likes

  if (response) {
    render(template(response, isOwner, isLogged), main);
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
//       solutionId: id
//     }),
//     headers: {
//       'Content-Type': 'application/json',
//       'X-Authorization': userData.accessToken
//     }
//   });

//   const dataLikes = await responseLikes.json();
// }