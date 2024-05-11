import { Draw } from "./drawProducts.js";
import { param } from "./param.js";

var select = document.querySelector("select");

select.addEventListener("change",()=>{
    switch (select.value) {
        case "gia":
            param.value = "price";
            console.log(param.value);
            Draw();
            break;
        case "stock":
            param.value = "stock";
            console.log(param.value);
            Draw();
            break;
        case "discount":
            param.value = "discountPercentage";
            console.log(param.value);
            Draw();
            break;
        default:
            break;
    }
});
