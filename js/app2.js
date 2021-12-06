// Global Variables
// Variable to contain the list
const myNavBar = document.querySelector(".page__header .navbar__menu ul");
// create variable to contain the Html sections
let mySections = document.getElementsByTagName("section");


const arrLength = mySections.length;

// imagainary element to be container for the list elements

const myDoc = document.createDocumentFragment();
function creatTheList() {
  let listItem;
  for (let i = 0; i < arrLength; i++) {
    listItem = document.createElement("li");
    listItem.innerHTML = `<a href="#${mySections[i].id}" class="menu__link">${mySections[i].dataset.nav}`;
    myDoc.appendChild(listItem);
  }
  // adding the imagainery element to the list
  myNavBar.appendChild(myDoc);
}
// calling the function
creatTheList();

// Makeing the Section active when it is in the viewport

window.addEventListener("scroll", (event) => {
  for(sec of mySections){
    sec.classList.remove("your-active-class");
  }
  for (let i = 0; i < arrLength; i++) {
    const rectT = mySections[i].getBoundingClientRect().top;
    const rectB = mySections[i].getBoundingClientRect().bottom;
    if (rectT >= 0 && rectB <= window.innerHeight) {
      mySections[i].classList.toggle("your-active-class");
    }
  }
  event.preventDefault();
});

let anchorPoints = document.querySelectorAll("li");
for(let i = 0; i < arrLength; i++){
  anchorPoints[i].addEventListener("click",function (event){
  mySections[i].scrollIntoView({behavior: "smooth"});
  event.preventDefault();
  });
}



