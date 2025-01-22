const adviceList = [
    "Be yourself; everyone else is already taken.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The best way to predict the future is to invent it.",
    "Don’t count the days, make the days count.",
    "Act as if what you do makes a difference. It does.",
    "Happiness is not something ready made. It comes from your own actions.",
    "Life is short, and it is up to you to make it sweet."
  ];
  
  const adviceContainer = document.getElementById('advice');
  const button = document.getElementById('generate-advice');
  
  button.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * adviceList.length);
    adviceContainer.textContent = adviceList[randomIndex];
  });
  