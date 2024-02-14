console.log("Project News");

// Initialize the news api parameters
/*
google-news-in
bbc-news
cnn
cnbc
the-times-of-india
the-new-york-times
usa-today
sbc=news
crypto-coins-news
*/

console.log("Project News");

// Initialize the news api parameters
const source = 'the-times-of-india';
const apiKey = ''; // Your API Key

// Grab the news container
const newsAccordion = document.getElementById('newsAccordion');

// Create a fetch request
fetch(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`)
  .then(response => response.json()) // Parse the response as JSON
  .then(data => {
    const articles = data.articles;
    console.log(data);

    // Create news HTML using template literals
    let newsHtml = "";
    articles.forEach((element, index) => {
      newsHtml += `
        <div class="card">
          <div class="card-header" id="heading${index}">
            <h2 class="mb-0">
              <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                aria-expanded="false" aria-controls="collapse${index}">
                <b>Breaking News ${index + 1} :</b> ${element["title"]}
              </button>
            </h2>
          </div>

          <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
            <div class="card-body">
              ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a> &nbsp; &nbsp; &nbsp; ${element["publishedAt"]}
            </div>
          </div>
        </div>
      `;
    });

    // Set the innerHTML of the news container
    newsAccordion.innerHTML = newsHtml;
  })
  .catch(error => {
    console.error("Error fetching news:", error);
  });
