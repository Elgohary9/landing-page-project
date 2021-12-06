// decleration
let list=document.querySelector('ul');
//sections titles grap from the document
let sections = document.querySelectorAll("section");
let sectionsArr = [];
let IDs = [];
let positions=[];

for (let section of sections){
    sectionsArr.push(section.getAttribute("data-nav"));
    IDs.push(section.getAttribute("id"));
}
// create link elements
function createLink(text,sectioNm){
    let link =document.createElement("a");
    link.classList.add("menu__link");
    link.textContent=text;
    return link;
}
// create list items
for (let i=0; i<sectionsArr.length; i++){
    let linkHTML=createLink(sectionsArr[i],IDs[i]);
    let li = document.createElement("li");
    li.appendChild(linkHTML);
    list.appendChild(li);
}
// getting position of the element
function position (element){
    const rect = element.getBoundingClientRect();
    let postion = [rect.top,rect.bottom];
    positions.push(postion);
}
// asssigning the position to an array
for (let i=0; i<sections.length; i++){
    position(sections[i]);
}
// implementing scroll behavior
for (let i=0; i<IDs.length; i++){
        document.querySelectorAll("a")[i].addEventListener("click", function(){
        sections[i].scrollIntoView({behavior: "smooth"})
    })
}

// adding active class to the active section
window.addEventListener("scroll", function (event){
        for (let section of sections){
            section.classList.remove("your-active-class");
        }
        for (let i=0; i<positions.length; i++){
                if (window.scrollY>positions[i][0]-80 && window.scrollY<positions[i][1]-30){
                    sections[i].classList="your-active-class";
                }
            
        }
    event.preventDefault()}
)





