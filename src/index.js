const init = () => {
    const inputForm = document.querySelector("form");
    inputForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const input = document.querySelector("#searchByID");


        fetch(`http://localhost:3000/movies/${input.value}`)
        .then((response) => response.json())
        .then((data) => {
        document.querySelector("#movieDetails h4").textContent = data.title;
        document.querySelector("#movieDetails p").textContent = data.summary;
      });

    });
}

document.addEventListener('DOMContentLoaded', init);