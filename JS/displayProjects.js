const displayProjects = function () {
    const projectsWrapper = document.createElement("div");
    projectsWrapper.classList.add("Projects_Wrapper");

    const projectsHeader = document.createElement("h3");
    projectsHeader.id = "Projects_Header";
    projectsHeader.innerText = "Projects";

    const projectsSection = document.createElement("section");
    projectsSection.classList.add("Projects");
    projectsSection.id = "Projects";

    const projectOneSection = document.createElement("section");
    projectOneSection.classList.add("Project_one");

    const projectOneOverview = document.createElement("article");
    projectOneOverview.classList.add("project_one_overview");
    const projectOneTitle = document.createElement("a");
    projectOneTitle.innerHTML = `<a class="Project_one_title" href="https://github.com/2020-Fall-Cohort/virtual-pets-tyrymina">Virtual Pets</a>`
    const projectOneDescription = document.createElement("p");
    projectOneDescription.innerText = `In this project, I worked with a team of 3 others to create a console application that allows the user to create a
    Robotic or Organic Dog/Cat and interact with them in a number of ways; Play, and walk. With some specific interactions depending
    on the type of pet, as well as the species; Maintenance for Robotic pets, and Feed for Organic pets. As well as implement a way for the user to
    store multiple pets within a virtual shelter and then be able to interact with one or multiple pets at a time.`;
    const projectOneSkills = document.createElement("article");
    projectOneSkills.classList.add("Project_one_skills");
    const skillsListTitle = document.createElement("h4");
    skillsListTitle.innerText = "Skills Used:";
    const skillsList = document.createElement("ul");
    skillsList.classList.add("Project_one_skills_list");

    const projectSkill1 = document.createElement("li");
    projectSkill1.innerText = "Java";
    const projectSkill2 = document.createElement("li");
    projectSkill2.innerText = "Inheritance";
    const projectSkill3 = document.createElement("li");
    projectSkill3.innerText = "Object Oriented Programming Based Logic";
    const projectSkill4 = document.createElement("li");
    projectSkill4.innerText = "Test Driven Devlopment";
    const projectSkill5 = document.createElement("li");
    projectSkill5.innerText = "Mob Programming";
    const projectSkill6 = document.createElement("li");
    projectSkill6.innerText = "Teamwork/Communication";

    const projectImage = document.createElement("img");
    projectImage.innerHTML = `<img id="Project_one_screenshot" src="./images/VirtualPetzSC.PNG">`;

    skillsList.appendChild(projectSkill1);
    skillsList.appendChild(projectSkill2);
    skillsList.appendChild(projectSkill3);
    skillsList.appendChild(projectSkill4);
    skillsList.appendChild(projectSkill5);
    skillsList.appendChild(projectSkill6);
    projectOneSkills.appendChild(skillsListTitle);
    projectOneSkills.appendChild(skillsList);
    projectOneOverview.appendChild(projectOneTitle);
    projectOneOverview.appendChild(projectOneDescription);
    projectOneOverview.appendChild(projectOneSkills);
    projectOneSection.appendChild(projectOneOverview);
    projectOneSection.appendChild(projectImage);
    projectsSection.appendChild(projectOneSection);
    projectsWrapper.appendChild(projectsHeader);
    projectsWrapper.appendChild(projectsSection);

    return projectsWrapper;
}

export {
    displayProjects
}

{/* <div class="Projects_Wrapper">
    <h3 id="Projects_Header">Projects</h3>
    <section class="Projects" id="Projects">
        <section class="Project_one">
            <article class="project_one_overview">
                <a class="Project_one_title" href="https://github.com/2020-Fall-Cohort/virtual-pets-tyrymina">Virtual Pets</a>
                <p>
                In this project, I worked with a team of 3 others to create a console application that allows the user to create a
                Robotic or Organic Dog/Cat and interact with them in a number of ways; Play, and walk. With some specific interactions depending
                on the type of pet, as well as the species; Maintenance for Robotic pets, and Feed for Organic pets. As well as implement a way for the user to
                store multiple pets within a virtual shelter and then be able to interact with one or multiple pets at a time.
                </p>
                <article class="Project_one_skills">
                    <h4>Skills Used:</h4>
                    <ul class="Project_one_skills_list">
                        <li>Java</li>
                        <li>Inheritance</li>
                        <li>Object Oriented Programming Based Logic</li>
                        <li>Test Driven Devlopment</li>
                        <li>Mob Programming</li>
                        <li>Teamwork/Communication</li>
                    </ul>
                </article>
            </article>
        <img id="Project_one_screenshot" src="./images/VirtualPetzSC.PNG">
        </section>
</div> */}