const navContainer = document.querySelector(".nav-container");
const siteName = document.querySelector(".site-name");
const leftSideNavContainer = document.querySelector(".side-nav-container");

navContainer.addEventListener("mouseover", event => {
  console.log(event.target);
  const target = event.target.children[0];
  // const targetParent = event.target.parentElement.children[0];

  if (target && target.className && target.className === "nav-link") {
    event.target.style.textDecorationLine = "underline";
  }
  if (event.target.className === "nav-cart") {
    console.log(event.target);
    event.target.style.textDecorationLine = "underline";
    event.target.style.textDecorationColor = "red";
  }
  if (
    event.target &&
    event.target.className &&
    event.target.className === "oval-image"
  ) {
    console.log(event.target);
    // debugger;
    siteName.innerHTML = "Hello!";
  }
});

navContainer.addEventListener("mouseout", event => {
  event.target.style.textDecoration = "none";
  siteName.innerHTML = "avini<span>&#248</span>n";
});

leftSideNavContainer.addEventListener("mouseover", event => {
  console.log(event.target);
  if (
    event.target &&
    event.target.className &&
    event.target.className === "side-list-item"
  ) {
    event.target.style.textDecorationLine = "underline";
    event.target.style.textDecorationStyle = "wavy";
  }
});

leftSideNavContainer.addEventListener("mouseout", event => {
  event.target.style.textDecorationLine = "none";
});
