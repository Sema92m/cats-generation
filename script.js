
const url = `https://api.thecatapi.com/v1/images/search`;
const api_key = "live_iWJfMBk1zt3SIyXoj3Y5Cz8p7jA1OIYELEZvF0Zjy4vM47mlhtlF4sMqefULDGC3"

let generate_btn = document.querySelector(".generate_btn");
generate_btn.addEventListener("click", fetchPics);

function fetchPics() {
    let catsImgDiv = document.querySelector(".catsImgDiv");
    catsImgDiv.innerHTML = "";

    fetch(url,{headers: {
		'x-api-key': api_key
	  }})
        .then((response) => response.json())
        .then((data) => {
            let catsImgUrl = data[0].url;

            let catsImgEl = document.createElement("img");
            catsImgEl.setAttribute("src", `${catsImgUrl}`);
            catsImgEl.classList.add("showcase");

            let catsImgDiv = document.querySelector(".catsImgDiv");
            catsImgDiv.appendChild(catsImgEl);
        })
        .catch((err) => console.log(err));
}
