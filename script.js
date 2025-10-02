const dateElement = document.querySelector("#date");
const yearElement = document.querySelector("#year");

function updateDateAndYear() {
  const now = new Date();

  // Format the date
  const formattedDate = now.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  dateElement.textContent = formattedDate;
  yearElement.textContent = now.getFullYear();
}

// Update immediately on page load
updateDateAndYear();

// Then update every 1 second
setInterval(updateDateAndYear, 1000);
