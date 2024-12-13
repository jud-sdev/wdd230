const baseURL = "https://jud-sdev.github.io/wdd230/";
const linksURL = "https://jud-sdev.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
  }
  
  function displayLinks(weeks) {
    const activityLinks = document.getElementById('activity-links');
    activityLinks.innerHTML = ''; // Clear current list
  
    weeks.forEach(week => {
      const weekItem = document.createElement('li');
      const weekTitle = document.createElement('strong');
      weekTitle.textContent = week.week;
      weekItem.appendChild(weekTitle);
  
      const linkList = document.createElement('ul');
      week.links.forEach(link => {
        const linkItem = document.createElement('li');
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.textContent = link.title;
        linkItem.appendChild(linkElement);
        linkList.appendChild(linkItem);
      });
  
      weekItem.appendChild(linkList);
      activityLinks.appendChild(weekItem);
    });
  }
  
  getLinks();