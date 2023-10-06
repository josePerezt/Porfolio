const contentES = document.getElementById("content-ES");
const contentEN = document.getElementById("content-EN");
const languageEN = document.getElementById("languageEN");
const languageES = document.getElementById("languageES");

languageEN.addEventListener("click", () => {
  console.log("INGLES");
  contentES.classList.add("hide");
  contentEN.classList.remove("hide");
});

languageES.addEventListener("click", () => {
  console.log("ESPAÑOL");
  contentES.classList.remove("hide");
  contentEN.classList.add("hide");
});
