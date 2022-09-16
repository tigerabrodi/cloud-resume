const visitorCountTextElement = document.querySelector(
  ".resume__visitors-count"
);

document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch(
    "https://olvmn27mjxhmzollt2whn7ecie0brzqu.lambda-url.eu-west-3.on.aws/"
  );

  const data = await response.json();

  visitorCountTextElement.textContent = `${visitorCountTextElement.textContent} ${data}`;
});
