const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    // Create elements to add to the div.cards element
    let card = document.createElement('section'); // Create the card section
    let fullName = document.createElement('h2'); // h2 for the prophet's full name
    let portrait = document.createElement('img'); // Image for the prophet's portrait
    let birthInfo = document.createElement('p'); // Birth info

    // Build the h2 content to show the prophet's full name
    fullName.textContent = `${prophet.name} ${prophet.lastname}`; // Corrected to use name and lastname

    // Build the image portrait by setting all the relevant attributes
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // Corrected name reference
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Add the birth info
    birthInfo.textContent = `Born: ${prophet.birthdate} in ${prophet.birthplace}`;

    // Append the section (card) with the created elements
    card.appendChild(fullName);
    card.appendChild(portrait);
    card.appendChild(birthInfo);

    // Add the card to the main cards container
    cards.appendChild(card);
  });
};

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets); // Pass the array of prophets to displayProphets
}

getProphetData();
