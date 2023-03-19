// gets quotes from the local array
function getCap() {
  let selector = document.getElementById('select');
  selector.disabled = false;
  let selected = document.getElementById('select').value;
  let quoteCountry = document.getElementById('blockquote');
  let quoteCapital = document.getElementById('capital');
  let quoteContinent = document.getElementById('continent');
  let cap = data.filter(quote => quote.continent === selected);
  let rand = Math.floor(Math.random() * cap.length);
  quoteCountry.innerText = cap[rand].country;
  quoteCapital.innerText = cap[rand].capital;
    if (cap[rand].continent === null) {
      quoteContinent.innerText = "Not specified";
    } else {
      quoteContinent.innerText = cap[rand].continent;
    };
  // console.log(country[rand]);
}