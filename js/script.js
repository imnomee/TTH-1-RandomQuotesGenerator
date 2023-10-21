
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
  const bgColor = `rgb(${getRandomNumber(255)}, ${getRandomNumber(255)}, ${getRandomNumber(255)})`;
  document.body.style.backgroundColor = bgColor;
}

setInterval(printQuote, 5000);
