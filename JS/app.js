import {
    displayHeader
}from "./displayHeader.js"
import {
    displayAboutMe
}from "./displayAboutMe.js"
import { 
    displayContactInfo, displayFooter 
} from "./displayFooter.js";
import { 
    displayProjects 
} from "./displayProjects.js";

const clearChildren = function (element) {
    console.log(element)
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
}

const container = document.querySelector('.container');

container.prepend(displayHeader());
container.appendChild(displayAboutMe());
container.appendChild(displayContactInfo());
container.appendChild(displayFooter());



const aboutMeButton = document.querySelector("#aboutMe");
aboutMeButton.addEventListener('click', () => {
    clearChildren(container);
    container.prepend(displayHeader());
    container.appendChild(displayAboutMe());
    container.appendChild(displayContactInfo());
    container.appendChild(displayFooter());
});

const projectsButton = document.querySelector("#projects");
projectsButton.addEventListener('click', () => {
    clearChildren(container);
    container.prepend(displayHeader());
    container.appendChild(displayProjects());
    container.appendChild(displayContactInfo());
    container.appendChild(displayFooter());
});