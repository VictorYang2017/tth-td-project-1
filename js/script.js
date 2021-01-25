/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

const bodyHtmlEl = document.querySelector("body");






/***
 * `printQuote` function
 ***/
const printQuote = () => {
  // Removes timer, if printQuote was executed
  clearInterval(timer);
  const randomBackgroundColor = getRandomBackgroundColor(backgroundColors);
  const randomQuoteObj = getRandomQuote(quotes);
  bodyHtmlEl.style.backgroundColor = randomBackgroundColor;
  const htmlString = createHtmlString(randomQuoteObj);
  document.getElementById("quote-box").innerHTML = htmlString;
  // Start the timer again
  autoRefreshQuotes();
  return htmlString;
};

printQuote();


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);


