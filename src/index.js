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
  // check that onload is properly set up
  console.log("LOADED!")

  reviews.forEach(eachReview => renderReview(eachReview))
}

function renderReview(review) {
  const reviewSection = document.querySelector(".reviews");
  // Console log to check that the elements are properly referenced
  // console.log(review);

  // Create elements
  const div = document.createElement("div");
  const image = document.createElement("img");
  const innerDiv = document.createElement("div");
  const username = document.createElement("p");
  const rating = document.createElement("p");
  const reviewContent = document.createElement("p");

  // Set classname for CSS
  div.className = "review_container";

  // Assign information from review object
  image.src = review.image;
  username.textContent = review.username;
  rating.textContent = review.star;
  reviewContent.textContent = review.review;

  // append text to innerDiv
  innerDiv.appendChild(username);
  innerDiv.appendChild(rating);
  innerDiv.appendChild(reviewContent);

  // append image and innerDiv to main div
  div.appendChild(image);
  div.appendChild(innerDiv);
  
  // append review div to the reviewSection in the DOM
  reviewSection.appendChild(div);
}


