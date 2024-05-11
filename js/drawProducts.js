import { fetchApi } from "./fetch.js";
import { param } from "./param.js";



export function Draw(){
  var api = `http://localhost:3000/products?category=${param.category}&_sort=${param.value}`;
  const products = document.querySelector("#products");

  fetchApi(api)
  .then(data=>{
      let htmls = "";
      data.forEach(item => {
          htmls+=`
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="products__item">
              <div class="products__item--img">
                <img src="${item.thumbnail}" alt="" />
              </div>
              <div class="products__item--discount">${item.discountPercentage}</div>
              <div class="products__item--name">${item.title}</div>
              <div class="products__item--price">$${item.price}</div>
              <div class="products__item--stock">Tồn kho: ${item.stock}</div>
            </div>
          </div>
          `;
      });
      products.innerHTML = htmls;
  })
}



