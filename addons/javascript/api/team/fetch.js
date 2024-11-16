window.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded");

    fetch('http://localhost/NordkirchenRP/addons/javascript/api/team/post.php')
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector('.row.pb-4');

            container.innerHTML = '';

            data.forEach(user => {
                const colDiv = document.createElement('div');
                colDiv.className = 'col-md-6 col-lg-3 my-2'; 

                const imgDiv = document.createElement('div');
                imgDiv.className = 'lc-block';
                const profileElement = document.createElement('img');
                profileElement.src = user.profile;
                profileElement.alt = 'Profil';  
                profileElement.className = 'img-fluid';
                imgDiv.appendChild(profileElement);

                const textDiv = document.createElement('div');
                textDiv.className = 'lc-block position-relative text-center mx-2 mt-n4 py-4 bg-light shadow';
                
                const nameElement = document.createElement('h4');
                nameElement.className = 'font-weight-bold';
                nameElement.innerHTML = user.username;
                
                const rankElement = document.createElement('p');
                rankElement.className = 'small';
                rankElement.innerHTML = user.rank;

                const discordLink = document.createElement('a');
                const userIDvar = user.userID
                let discordLinkURL = `https://discord.com/users/${userIDvar}`
                discordLink.href = discordLinkURL
                discordLink.innerHTML = '<i class="fa-brands fa-discord mr-1"></i>';

                textDiv.appendChild(nameElement);
                textDiv.appendChild(rankElement);
                
                const navDiv = document.createElement('div');
                navDiv.className = 'nav justify-content-center';
                navDiv.appendChild(discordLink);
                textDiv.appendChild(navDiv);

                colDiv.appendChild(imgDiv);
                colDiv.appendChild(textDiv);

                container.appendChild(colDiv);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});