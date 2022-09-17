const visitorCountTextElement = document.querySelector(
  ".resume__visitors-count"
);

document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch("lambda_url");

  const count = await response.json();

  visitorCountTextElement.textContent = `${visitorCountTextElement.textContent} ${count}`;
});
