let btn = document.querySelector("#btn");
btn.addEventListener("click", searchGif);

function searchGif() {
    let input = document.querySelector("#search_form");
    let valueInput = input.value;

    fetch("https://api.giphy.com/v1/gifs/search?api_key=D50JTA6ZqdOsssLYlNtUTLiqTsCVEy5T&q=" + valueInput + "&limit=5")
        .then(response => response.json())
        .then(data => {
            let output = data.data;
           getData(output);
        })
        .catch(error => alert( `Sorry:( The server is currently unable to handle the incoming request. Error: ${error.name} - ${error.message}`))
    }

    function getData(output) {
        let result = document.querySelector(".result");
        result.innerHTML = "";
        try {
            for (let i in output) {
                result.innerHTML += `
                <img src="${output[i].images.fixed_height.url} alt="gif">`;
            
        } 
        } catch (error) {
            alert("Aw, Snap! Data loading failed.");
        }  
    }
    
    