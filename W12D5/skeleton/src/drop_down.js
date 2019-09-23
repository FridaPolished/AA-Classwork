
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};
function dogLinkCreator (){
  let dogLinks = [];

  Object.keys(dogs).forEach( (dog) => {
    let aTag = document.createElement("a");
    aTag.innerHTML = dog;
    aTag.setAttribute("href", dogs[dog]);
    let liTag = document.createElement("li");
    liTag.setAttribute("class", "dog-link");
    liTag.append(aTag);
    dogLinks.push(liTag);
  });
  return dogLinks;
};

function attachDogLinks (){
  let dogLinks = dogLinkCreator();

  let dogList = document.getElementsByClassName("drop-down-dog-list");
  dogLinks.forEach((doglink) => {
    dogList[0].appendChild(doglink);
  });
  let dogListNav = document.getElementsByClassName("drop-down-dog-nav");
  //debugger
  handleEnter(dogListNav);
  handleLeave(dogListNav);
};

function handleEnter(htmlElement) {
  htmlElement[0].addEventListener("mouseenter", e => {
    e.preventDefault();
    //let dogLinks = document.querySelectorAll(".dog-link") // returns an array
    for (let index = 0; index < htmlElement[0].children[1].children.length; index++) {
      let child = htmlElement[0].children[1].children[index];
      child.removeAttribute("class");
      child.setAttribute("class", "dog-link-open")
    }
  })
}

function handleLeave(htmlElement) {
  htmlElement[0].addEventListener("mouseleave", e => {
    e.preventDefault();
    for (let index = 0; index < htmlElement[0].children[1].children.length; index++) {
      let child = htmlElement[0].children[1].children[index];
      child.removeAttribute("class");
      child.setAttribute("class", "dog-link")
    }
  })
}

attachDogLinks();


// mouseTarget.addEventListener('mouseenter', e => {
//   mouseTarget.style.border = '5px dotted orange';
//   enterEventCount++;
//   addListItem('This is mouseenter event ' + enterEventCount + '.');
// });

// mouseTarget.addEventListener('mouseleave', e => {
//   mouseTarget.style.border = '1px solid #333';
//   leaveEventCount++;
//   addListItem('This is mouseleave event ' + leaveEventCount + '.');
// });