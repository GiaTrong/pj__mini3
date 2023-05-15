import { fetchApi } from "./fetchApi.js";
import { API_CATEGORY } from "./constants.js";
import { category, params } from "./variable.js";
import { drawProduct } from "./drawProct.js";


fetchApi(API_CATEGORY)
    .then(data => {
        let htmls = data.map(item => {
                return `
        <div class="category__item" data-category=${item}>
            ${item}
            </div>
        `;
            })
            //render
        category.innerHTML = htmls.join("");


        const listCategory = document.querySelectorAll("#category .category__item");
        listCategory.forEach(item => {
            item.addEventListener('click', function() {
                params.category = item.getAttribute("data-category");
                // params.category = item.dataset.category;
                drawProduct();
            })
        })
    })