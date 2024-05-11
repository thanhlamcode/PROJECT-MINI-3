import { Draw } from "./drawProducts.js";
import { fetchApi } from "./fetch.js";
import { param } from "./param.js";
const categories = document.querySelector("#category");

fetchApi("http://localhost:3000/categories")
    .then(data => {
        let htmls = "";
        data.forEach(item => {
            htmls += `
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="category__item">${item}</div>
            </div>
            `;
        });
        categories.innerHTML = htmls;
        
        // Wait for DOM to be updated before selecting elements
        waitForDOMUpdate();
    })
    .catch(error => {
        console.error('Error:', error);
    });

function waitForDOMUpdate() {
    setTimeout(() => {
        let categoryItems = document.querySelectorAll(".category__item");
        categoryItems.forEach(item => {
            item.addEventListener("click",()=>{
                param.category = item.textContent;
                console.log(param.category);
                Draw();
            })
        });
    }, 0); // Waiting for the next tick
}
