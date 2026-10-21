const fetchButton = document.getElementById("fetch-button");

const fetchData = async () => {
    try {
        const response = await fetch("https://randomuser.me/api/?results=20");

        const data = await response.json();

        const users = data.results;

        const container = document.getElementById("user-container");

        container.textContent = "";

        users.forEach((user) => {
            const card = document.createElement("div");
            card.classList.add("card");

            const photo = document.createElement("img");
            photo.src = user.picture.large;
            photo.alt = "User Image";

            const fullName = document.createElement("h3");
            fullName.textContent = `${user.name.first} ${user.name.last}`;

            const email = document.createElement("p");
            email.textContent = user.email;
            card.append(photo, fullName, email);
            container.appendChild(card);
        });
    } catch (error) {
    console.error("An error occurred:", error);

}
};
fetchButton.addEventListener("click", fetchData);