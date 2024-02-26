document.addEventListener('DOMContentLoaded', () => {
    const generateAdvice = async () => {
      try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        document.getElementById("advice-id").textContent = data.slip.id;
        document.getElementById("advice-text").textContent = data.slip.advice;
      } catch (error) {
        console.error("Error fetching advice:", error);
      }
    };
  
    const btn = document.getElementById("generate-btn");
    btn.addEventListener("click", generateAdvice);
  
    // Simulate click to load initial advice
    btn.click();
  });
  