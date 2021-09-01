const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

if(id === null) {
    location.href = "/";
}


const url = "https://breakingbadapi.com/api/characters/" + id;

const idContainer = document.querySelector(".id");
const detailContainer = document.querySelector(".details");

idContainer.innerHTML = id;

async function fetchCharacter() {
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        const details = result[0];
        createHTML(details);
    } catch(error) {
        console.log(error);
        detailContainer.innerHTML = error;
    }
}

fetchCharacter();

function createHTML(details) {
    detailContainer.innerHTML = `<h1>${details.name}</h1>
                                    <div>Occupation: <b>${details.occupation[0]}</b></div>`;
}