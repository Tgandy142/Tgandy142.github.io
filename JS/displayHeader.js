const displayHeader = function () {
    const header = document.createElement("header");
    header.classList.add("header");

    const name = document.createElement("h1");
    name.classList.add("header_name");
    name.innerHTML = `<em>Tyler Gandy</em>`;
    const headerNav = document.createElement("nav");
    headerNav.classList.add("header_list");

    const headerList = document.createElement("ul");
    headerList.classList.add("header_list_items");

    const aboutMe = document.createElement("li");
    aboutMe.innerHTML = `<a id="aboutMe" >About Me</a>`;
    const projects = document.createElement("li");
    projects.innerHTML = `<a id="projects">Projects</a>`;
    const contactInfo = document.createElement("li");
    contactInfo.innerHTML = `<a href="#contact_info_header">Contact Me</a>`;

    headerList.appendChild(aboutMe);
    headerList.appendChild(projects);
    headerList.appendChild(contactInfo);

    headerNav.appendChild(headerList);

    header.appendChild(name);
    header.appendChild(headerNav);

    return header;
}

export{
    displayHeader
}