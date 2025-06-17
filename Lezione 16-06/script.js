const BASE_URL = "https://jsonplaceholder.typicode.com"

const creaUserCard = (userData) => {
    const card = document.createElement("div");
    card.className = "user-card";

    card.innerHTML = `
        <h2>${userData.name}</h2>
        <p><strong>Username:</strong> ${userData.username}</p>
        <p><strong>Email:</strong> ${userData.email}</p>
    `;

    document.body.appendChild(card);
}

const creaPostCard = (userData) => {
    const card = document.createElement("div");
    card.className = "post-card";

    card.innerHTML = `
        <h2>${userData.title}</h2>
        <p>${userData.body}</p>
    `;

    document.body.appendChild(card);
}

async function apiCall(endpoint) {
    try {
        const response = await fetch(`${BASE_URL}/${endpoint}`);
        if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`)

        const data = await response.json();

        return data;
    } catch(error) { 
        log("Errore", error.message);

        return null; 
    }
}

async function getUtente() {
    const userData = await apiCall('users/1');
    if (userData) creaUserCard(userData);
}

async function getPost() {
    const postData = await apiCall('posts/1');
    if (postData) creaPostCard(postData);
}

getUtente();
getPost();