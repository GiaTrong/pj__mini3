import { drawProduct } from "./drawProct.js";
import { params, buttonSearch, inputSearch, filter, pagiPrev, pagiNumber, pagiNext } from "./variable.js"

drawProduct();

// search
//function: search
const search = () => {
    params.q = inputSearch.value;
    drawProduct();
}

//click: button
buttonSearch.addEventListener('click', function() {
    search();
})

//keydown:enter
inputSearch.addEventListener('keydown', (e) => {
        if (e.key === "Enter") {
            search();
        }
    })
    //end search


//filter
filter.addEventListener('change', function(e) {;
        switch (e.target.value) {
            case "mac-dinh":
                params.sort = "";
                params.order = "";
                break;
            case "gia-cao-den_thap":
                params.sort = "price";
                params.order = "asc";
                break;
            case "gia-thap-den_cao":
                params.sort = "price";
                params.order = "desc";
                break;
            case "giam-gia-nhieu":
                params.sort = "discountPercentage";
                params.order = "desc";
                break;
            default:
                break;
        }
        drawProduct();
    })
    //end filter

//pagination
pagiNext.addEventListener('click', function() {
    params.page = params.page + 1;
    pagiNumber.innerHTML = params.page;
    drawProduct();
})

pagiPrev.addEventListener('click', function() {
    if (params.page > 1) {
        params.page = params.page - 1;
        pagiNumber.innerHTML = params.page;
        drawProduct();
    }
})