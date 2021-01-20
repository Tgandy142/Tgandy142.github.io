const displayContactInfo = function () {
    const contactInfoWrapper = document.createElement("div");
    contactInfoWrapper.classList.add("contact_info_wrapper");

    const contactInfoHeader = document.createElement("h3");
    contactInfoHeader.id = "contact_info_header";
    contactInfoHeader.innerText = "Contact Info";

    const contactInfo = document.createElement("article");
    contactInfo.classList.add("contact_info");
    const linkedin = document.createElement("a");
    linkedin.innerHTML = `<a href=https://www.linkedin.com/in/tyler-gandy-6150b01b9> <img src="images/LinkedinLogo.png"></a>`;
    const github = document.createElement("a");
    github.innerHTML = `<a href=https://github.com/Tgandy142> <img src="images/GithubLogo.png"></a>`;
    const email = document.createElement("a");
    email.innerHTML = `<a>Tylergandy@ymail.com</a>`;

    contactInfo.appendChild(linkedin);
    contactInfo.appendChild(github);
    contactInfo.appendChild(email);
    contactInfoWrapper.appendChild(contactInfoHeader);
    contactInfoWrapper.appendChild(contactInfo);

    return contactInfoWrapper;
}

const displayFooter = function () {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const footerContent = document.createElement("small");
    footerContent.innerText = "©Tyler Gandy 2020";
    footer.appendChild(footerContent);

    return footer;
}

export{
    displayFooter, displayContactInfo
}

{/* <div class="contact_info_wrapper">
            <h3 id="contact_info_header">Contact Info</h3>
            <article class="contact_info">
                <a href=https://www.linkedin.com/in/tyler-gandy-6150b01b9> <img src="images\LinkedinLogo.png"></a>
                <a href=https://github.com/Tgandy142> <img src="images\GithubLogo.png"></a>
                <a>Tylergandy@ymail.com</a>
            </article>
        </div>
        <footer class="footer">
            <small>©Tyler Gandy 2020</small>
        </footer> */}