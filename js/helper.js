/***
 * `generateRandomIndex` function
 ***/
const generateRandomIndex = (maxNum) => {
  const randomNum = Math.floor(Math.random() * maxNum);
  return randomNum;
};

/***
 * `getRandomQuote` function
 * Getting random quote from the quotes array in data.js
 ***/
let previousQuoteObj = {};

const getRandomQuote = () => {
  let randomQuoteObj = {};
  // Prevent call/show same quote in a row
  do {
    // Get a random quote
    randomQuoteObj = quotes[generateRandomIndex(quotes.length)];
  } while (randomQuoteObj.quote === previousQuoteObj.quote);
  previousQuoteObj = randomQuoteObj;
  return randomQuoteObj;
};

/***
 * `getRandomBackgroundColor` function
 * Getting random background color from background colors array in data.js
 ***/
let previousBackgroundColorValue = "";

const getRandomBackgroundColor = () => {
  let backgroundColorValue = "";
  // Prevent call/show same background color in a row
  do {
        // Get a random background color
    backgroundColorValue =
      backgroundColors[generateRandomIndex(backgroundColors.length)];
  } while (backgroundColorValue === previousBackgroundColorValue);
  previousBackgroundColorValue = backgroundColorValue;
  return backgroundColorValue;
};

/***
 * `createHtmlString` function
 * Creating new quote html elements
 ***/
const createHtmlString = (randomQuoteObj) => {
  let html = `<p class="quote">${randomQuoteObj.quote}</p>
    <p class="source">${randomQuoteObj.source}`;
  if (randomQuoteObj.citation) {
    html += `<span class="citation">${randomQuoteObj.citation}</span>`;
  } else if (randomQuoteObj.year) {
    html += `<span class="year">${randomQuoteObj.year}</span>`;
  } else if (randomQuoteObj.tags) {
    html += `<span class="tags">, ${randomQuoteObj.tags}</span>`;
  }
  html += `</p>`;
  return html;
};

/***
 * `autoRefreshQuotes` function
 * Print new quote every 10 second
 ***/
let timer;

const autoRefreshQuotes = () => {
  timer = setInterval(() => {
    printQuote();
  }, 10000);
};

autoRefreshQuotes();
