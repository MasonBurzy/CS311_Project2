const fetchButton = document.getElementById("fetch-button");

const fetchData = async () => {
    const errorMessage = document.getElementById("error-message");

    try {
        errorMessage.textContent = "";

        const response = await fetch("https://statsapi.mlb.com/api/v1/teams?sportId=1");

        const data = await response.json();

        const teams = data.teams;

        const teamContainer = document.getElementById("team-container");

        teamContainer.textContent = "";

        teams.forEach((team) => {
            const card = document.createElement("div");
            card.classList.add("team-card");

            const logo = document.createElement("img");
            logo.src = `https://www.mlbstatic.com/team-logos/${team.id}.svg`;
            logo.alt = team.name + " logo";
            card.appendChild(logo);

            const name = document.createElement("div");
            name.classList.add("teamName");
            name.textContent = team.name;
            card.appendChild(name);

            const city = document.createElement("div");
            city.classList.add("teamCity");
            city.textContent = team.locationName;
            card.appendChild(city);

            const venue = document.createElement("div");
            venue.classList.add("teamVenue");
            venue.textContent = team.venue.name;
            card.appendChild(venue);



            teamContainer.appendChild(card);

        });
    } catch (error) {
        errorMessage.textContent = "An error occurred while fetching the data.";
    }
};
fetchButton.addEventListener("click", fetchData);