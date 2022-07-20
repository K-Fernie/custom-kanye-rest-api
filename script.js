//when button is clicked console.log button clicked
document.getElementById("btn").addEventListener("click", () => {
  const URL = "http://localhost:3000/kanye_quotes";

  fetch(URL)
    .then((response) => response.json())
    .then(({ quote }) => {
      //or data.quote
      document.getElementById("kanye_quote").innerText = quote;
    });
});
