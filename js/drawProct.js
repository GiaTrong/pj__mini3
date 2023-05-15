import { fetchApi } from "./fetchApi.js";
import { API_PRODUCT } from "./constants.js";
import { params, products } from "./variable.js";

export const drawProduct = () => {
    let category = "";
    if (params.category != "") {
        category = `&category=${params.category}`;
    }

    const api = `${API_PRODUCT}?q=${params.q}&_sort=${params.sort}
&_order=${params.order}&_page=${params.page}&_limit=${params.limit}&{category}`;

    fetchApi(api)
        .then(data => {
            let htmls = data.map(item => {
                    return `
            <div class="product__item">
                <div class="product__image">
                    <img src="${item.thumbnail}" alt="">
                    <div class="product__percent">${item.discountPercent}%</div>
                </div>
                <div class="product__content">10%</div>
                <div class="product__title">${item.title}</div>
                <div class="product__meta">
                    <div class="product__price">${item.price}</div>
                    <div class="product__stock">còn lại: ${item.stock}</div>
                </div>
            </div>
        `;
                })
                //render
            products.innerHTML = htmls.join();
        })
}