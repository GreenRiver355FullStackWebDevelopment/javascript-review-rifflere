//Do not change //////////////////////////////////
const reviews = [
  {
    username: "Rose",
    image: "./images/rose.png",
    star: 5,
    review: "Great coffee and ambiance",
  },
  {
    username: "butterfly2222",
    image: "./images/avatar2.png",
    star: 3,
    review: "Coffee was okay, took way to long to make.",
  },
  {
    username: "Sandy Tuna",
    image: "./images/avatar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];
/////////////////////////////////////////////////////////////////////

//Your Code Below Here////

window.onload = () => {
  console.log("LOADED!")

  renderReviews();
}

function renderReviews() {
  const reviewSection = document.querySelector(".reviews");

  const h1 = document.createElement("h1");

  reviewSection.appendChild(h1);

  const div = document.createElement("div");
  const image = document.createElement("img");
  const innerDiv = document.createElement("div");
  const username = document.createElement("p");
  const rating = document.createElement("p");
  const review = document.createElement("p");

  div.className = "review_container";
  image.src = "./images/avatar2.png";
  username.textContent = "USERNAME";
  rating.textContent = "RATING";
  review.textContent = "REVIEW";

  innerDiv.appendChild(username);
  innerDiv.appendChild(rating);
  innerDiv.appendChild(review);

  div.appendChild(image);
  div.appendChild(innerDiv);
  
  reviewSection.appendChild(div);
}


