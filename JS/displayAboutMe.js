const displayAboutMe = function () {
    const aboutMeWrapper = document.createElement("div");
    aboutMeWrapper.classList.add("About_Me_Wrapper");

    const headshot = document.createElement("img");
    headshot.classList.add("headshot");
    headshot.src = "./images/Tyler.jpg";

    const aboutMeSection = document.createElement("section");
    aboutMeSection.classList.add("About_Me");

    const aboutMeContent = document.createElement("article");
    aboutMeContent.classList.add("About_Me_Content");
    aboutMeSection.appendChild(aboutMeContent);

    const aboutMeHeader = document.createElement("h3");
    aboutMeHeader.innerText = "About Me";
    aboutMeHeader.id = "About_Me_Header";
    const p1 = document.createElement("p");
    p1.innerText = `I have been living in ohio for about 20 years now, programming on and off for about 5 years. I studied java at my highschool during 11th grade and during 12th grade I helped teach new students java in the same class while learning more advanced logic from the teacher on the side.`;
    const p2 = document.createElement("p");
    p2.innerText = `After highschool I Studied Computer Science at Wright State University for 6 months before leaving to come home and work as I was, in retrospect, not ready to leave home yet. Over the next 3 years i worked at a gas station and then did security work, all the while wanting to study programming again but was waiting for the time to be right.`;
    const p3 = document.createElement("p");
    p3.innerText = `In mid 2020 I Started studying at We Can Code It and began learning all the skills I needed to fulfill my dream and become a Full-Stack Developer!`;

    aboutMeContent.appendChild(aboutMeHeader);
    aboutMeContent.appendChild(p1);
    aboutMeContent.appendChild(p2);
    aboutMeContent.appendChild(p3);

    const skillsSection = document.createElement("section");
    skillsSection.classList.add("Skills");

    const skillsTitle = document.createElement("h2");
    skillsTitle.innerText = "Professional Skills";
    const skillsList = document.createElement("ul");
    skillsList.classList.add("skills_list");
    skillsSection.appendChild(skillsTitle);
    skillsSection.appendChild(skillsList);

    const skill1 = document.createElement("li");
    skill1.innerText = "Java";
    const skill2 = document.createElement("li");
    skill2.innerText = "HTML";
    const skill3 = document.createElement("li");
    skill3.innerText = "CSS";
    const skill4 = document.createElement("li");
    skill4.innerText = "FlexBox";

    skillsList.appendChild(skill1);
    skillsList.appendChild(skill2);
    skillsList.appendChild(skill3);
    skillsList.appendChild(skill4);

    aboutMeWrapper.appendChild(headshot);
    aboutMeWrapper.appendChild(aboutMeSection);
    aboutMeWrapper.appendChild(skillsSection);

    return aboutMeWrapper;
}

export {
    displayAboutMe
}

{/* <div class="About_Me_Wrapper">
            <img class="headshot" src="./images/Tyler.jpg">
            <section class="About_Me">
                <article class="About_Me_Content">
                    <h3 id="About_Me_Header">About Me</h3>
                    <p>I have been living in ohio for about 20 years now, programming on and off for about 5 years. I studied java at my highschool during 11th grade and during 12th grade I helped teach new students java in the same class while learning more advanced logic from the teacher on the side.</p>
                    <p>After highschool I Studied Computer Science at Wright State University for 6 months before leaving to come home and work as I was, in retrospect, not ready to leave home yet. Over the next 3 years i worked at a gas station and then did security work, all the while wanting to study programming again but was waiting for the time to be right.</p>
                    <p>In mid 2020 I Started studying at We Can Code It and began learning all the skills I needed to fulfill my dream and become a Full-Stack Developer!</p>
                </article>
            </section>    
        <section class="Skills">
            <h2>Professional Skills</h2>
            <ul class="skills_list">
                <li>Java</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>FlexBox</li>
            </ul>
        </section>
</div> */}