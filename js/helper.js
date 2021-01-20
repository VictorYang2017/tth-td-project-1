/***
 * `generateRandomIndex` function
 ***/
const generateRandomIndex = (maxNum) => {
  const randomNum = Math.floor(Math.random() * maxNum);
  return randomNum;
};

/***
 * `getRandomQuote` function
 ***/
let previousQuoteObj = {};

const getRandomQuote = () => {
  let randomQuoteObj = {};
  // Prevent call/show same background color in a row
  do {
    randomQuoteObj = quotes[generateRandomIndex(quotes.length)];
  } while (randomQuoteObj.quote === previousQuoteObj.quote);
  previousQuoteObj = randomQuoteObj;
  return randomQuoteObj;
};

/***
 * `getRandomBackgroundColor` function
 ***/
let previousBackgroundColorValue = "";

const getRandomBackgroundColor = () => {
  let backgroundColorValue = "";
  // Prevent call/show same background color in a row
  do {
    backgroundColorValue =
      backgroundColors[generateRandomIndex(backgroundColors.length)];
  } while (backgroundColorValue === previousBackgroundColorValue);
  previousBackgroundColorValue = backgroundColorValue;
  return backgroundColorValue;
};

/***
 * `createHtmlString` function
 ***/
const createHtmlString = (randomQuoteObj) => {
  let html = `<p class="quote">${randomQuoteObj.quote}</p>
    <p class="source">${randomQuoteObj.source}`;
  if (randomQuoteObj.citation) {
    html += `<span class="citation">${randomQuoteObj.citation}</span>`;
  } else if (randomQuoteObj.year) {
    html += `<span class="year">${randomQuoteObj.year}</span>`;
  }
  html += `</p>`;
  return html;
};

/***
 * `autoRefreshQuotes` function
 ***/
let timer;

const autoRefreshQuotes = () => {
  timer = setInterval(() => {
    printQuote();
  }, 10000);
};

autoRefreshQuotes();
