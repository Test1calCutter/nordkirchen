window.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded");

    fetch('http://localhost/NordkirchenRP/addons/javascript/api/lizenzen/post.php')
        .then(response => response.json())
        .then(data => {
            console.log(data.lizenzen)
            console.log(data.partner)
            if (data.lizenzen && Array.isArray(data.lizenzen)) {
                const lizenzenContainer = document.querySelector('.grid');
                lizenzenContainer.innerHTML = '';

                data.lizenzen.forEach(item => {
                    const card = document.createElement('div');
                    card.className = 'card';

                    const profileElement = document.createElement('img');
                    profileElement.src = item.profile || "https://cdn.discordapp.com/attachments/1239661078976135214/1290741050117460072/image.png?ex=67212847&is=671fd6c7&hm=0cb53c5ea48453e6a9d85db2479735908007a8a4e49607d8ea828c288bcfef61&";
                    profileElement.alt = 'BANNER';
                    profileElement.className = 'card__img';
                    card.appendChild(profileElement);

                    const cardContent = document.createElement('div');
                    cardContent.className = 'card__content';

                    const titleElement = document.createElement('h1');
                    titleElement.className = 'card__header';
                    titleElement.innerText = item.lizenzName;

                    const textElement = document.createElement('p');
                    textElement.className = 'card__text';
                    textElement.innerText = item.title;

                    const inviteLink = document.createElement('a');
                    inviteLink.href = item.discord_link;
                    inviteLink.className = 'card__btn';
                    inviteLink.innerHTML = 'Discord Beitreten <span>&rarr;</span>';

                    cardContent.appendChild(titleElement);
                    cardContent.appendChild(textElement);
                    cardContent.appendChild(inviteLink);

                    card.appendChild(cardContent);
                    lizenzenContainer.appendChild(card);
                });
            }

            if (data.partner && Array.isArray(data.partner)) {
                const partnerContainer = document.querySelector('.grid-p');
                partnerContainer.innerHTML = '';

                data.partner.forEach(item => {
                    const card = document.createElement('div');
                    card.className = 'card-p';

                    const profileElement = document.createElement('img');
                    profileElement.src = item.profile || "https://scnx-cdn.scootkit.net/1728602190447-OMzJuXogYdQAApXL2VME1mY3.png";
                    profileElement.alt = 'LOGO';
                    profileElement.className = 'card__img-p';
                    card.appendChild(profileElement);

                    const cardContent = document.createElement('div');
                    cardContent.className = 'card__content-p';

                    const titleElement = document.createElement('h1');
                    titleElement.className = 'card__header-p';
                    titleElement.innerText = item.title;

                    const textWrapper = document.createElement('div');
                    textWrapper.className = 'card__text-wrapper-p';

                    const textElement = document.createElement('p');
                    textElement.className = 'card__text-p';
                    textElement.innerText = item.beschreibung;

                    textWrapper.appendChild(textElement);

                    const inviteButton = document.createElement('a');
                    inviteButton.href = item.invite;
                    inviteButton.className = 'card__btn-p';
                    inviteButton.innerHTML = 'Discord Beitreten <span>&rarr;</span>';

                    cardContent.appendChild(titleElement);
                    cardContent.appendChild(textWrapper);
                    cardContent.appendChild(inviteButton);

                    card.appendChild(cardContent);
                    partnerContainer.appendChild(card);
                });
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});