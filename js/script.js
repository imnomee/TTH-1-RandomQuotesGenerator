/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/
/*
You must be the change you wish to see in the world. -Mahatma Gandhi
Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa
The only thing we have to fear is fear itself. -Franklin D. Roosevelt
Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that. -Martin Luther King Jr.
Do one thing every day that scares you. -Eleanor Roosevelt
Well done is better than well said. -Benjamin Franklin
The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. -Helen Keller
It is during our darkest moments that we must focus to see the light. -Aristotle
Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson
Be yourself; everyone else is already taken. -Oscar Wilde
*/

//random number function
function getRandomNumber(upper) {
  const num = Math.floor(Math.random() * upper) + 1;
  // console.log(num);
  return num;
}

const quotesArray = [
  {
    quote: "You must be the change you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa",
  },
  {
    quote: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote:
      "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    author: "Martin Luther King Jr.",
    citation: 'Local',
    year:2010
  },
  {
    quote: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt",
    year: 2016
  },
  { quote: "Well done is better than well said.", author: "Benjamin Franklin" },
  {
    quote:
      "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    author: "Helen Keller",
  },
  {
    quote:
      "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
  },
  {
    quote:
      "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson",
    citation: 'Twitter'
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
    citation: 'Facebook'
  },
];

/***
 * `getRandomQuote` function
 ***/
function getRandomQuote(arr) {
  const randNumber = getRandomNumber(arr.length)
  const quote = arr[randNumber -1]
  // console.log(quote);
  return quote;
}

/***
 * `printQuote` function
 ***/
function printQuote(){
  let html = '';
  const container = document.querySelector('.container');
  const quote = getRandomQuote(quotesArray);
  const main = quote.quote;
  const auth = quote.author;
  let cite = ''
  if (quote.citation) {
    cite= `<span class="citation">${quote.citation}</span>`
  };
  let year = ''
  if (quote.year) {
    year= `<span class="year">${quote.year}</span>`
  };
  console.log(quote.quote);
  console.log(quote.author);
  html += `
  <div id="quote-box" class="quote-box">
    <p class="quote">${main}</p>
    <p class="source">${auth}${cite}${year}</p>
  </div>`
  container.innerHTML = html;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
