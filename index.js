const currentMode = localStorage.getItem("theme");

if (currentMode === "dark") {
  document.body.classList.add("dark-mode");
}

document.getElementById("mode-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("theme", theme);
});


function updateDateTime() {
    const dateContainer = document.getElementById("datetime");
    
    const now = new Date();
    
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    };
    
    const formattedDateTime = now.toLocaleString('en-US', options);
    dateContainer.textContent = formattedDateTime;
}

updateDateTime();

setInterval(updateDateTime, 1000);