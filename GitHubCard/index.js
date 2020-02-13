/* Step 1: using axios, send a GET request to the following URL 
           (replacing the placeholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/ajablanco')
  .then( response => {
    // Remember response is an object, response.data is an array.
    response.data.forEach( item => {
        let button = buttonCreator(item);
        parent.appendChild(button);
    })
  })
  .catch( error => {
    console.log("Error:", err);
  })




/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

const arr = [{
  login: "ajablanco",
  url: "https://api.github.com/users/ajablanco",
  avatar_url: "https://avatars0.githubusercontent.com/u/59661417?v=4",
  name: "Aja Blanco",
  location: "Oceanside, CA",
  bio: "Owner at Dear Self",
  followers: 0,
  following: 0,
},
{
  login: "tetondan",
  url: "https://api.github.com/users/tetondan",
  avatar_url: "https://avatars2.githubusercontent.com/u/8883343?v=4",
  name: "Daniel Frehner",
  location: "Jackson Hole, Wy",
  bio: "Program Manager (PT Web) @ Lambda School\r\n",
  followers: 103,
  following: 8,
}]



/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

function cardCreator(name1, username1, location1, url, bio1, followers1, following1, avatarUrl) {
  const card = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const address = document.createElement('a')
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');

  card.appendChild(cardImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(address);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  name.textContent = name1;
  username.textContent = username1;
  location.textContent = location1;
  bio.textContent = bio1;
  followers.textContent = followers1;
  following.textContent = following1;


  cardImg.src = avatarUrl;


  return card;
}

const container = document.querySelector('.cards');

arr.forEach(data => {
  container.appendChild(cardCreator(data.name, data.login, data.url, data.location, data.bio, data.followers, data.following, data.avatar_url));
})




