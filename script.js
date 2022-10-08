let btn = document.querySelector("#btn");
btn.addEventListener("click", searchGif);

function searchGif() {
    let input = document.querySelector("#search_form");
    let valueInput = input.value;

    fetch("https://api.giphy.com/v1/gifs/search?api_key=D50JTA6ZqdOsssLYlNtUTLiqTsCVEy5T&q=" + valueInput + "&limit=5")
        .then(response => response.json())
        .then(data => {
            let output = document.querySelector(".result");
            output.innerHTML = "";
            for (let i in data.data) {
                output.innerHTML += `
                <img src="${data.data[i].images.fixed_height.url} alt="gif">`;
            }
        });
    }
