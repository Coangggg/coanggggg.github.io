const myProduct = [
    {
      "id": "81",
      "name": "dat",
      "price": "920.00",
      "image": "http://lorempixel.com/640/480/technics",
      "description": "Regional Creative Producer"
    },
    {
      "id": "82",
      "name": "new product",
      "price": "526.00",
      "image": "http://lorempixel.com/640/480/abstract",
      "description": "Central Usability Agent"
    },
    {
      "id": "83",
      "name": "tesst",
      "price": "594.00",
      "image": "http://lorempixel.com/640/480/sports",
      "description": "Corporate Program Technician"
    },
    {
      "id": "84",
      "name": "Theem",
      "price": "14.00",
      "image": "http://lorempixel.com/640/480/people",
      "description": "Dynamic Data Designer"
    },
    {
      "id": "85",
      "name": "Gorgeous Wooden Shirt",
      "price": "874.00",
      "image": "http://lorempixel.com/640/480/food",
      "description": "Senior Operations Designer"
    },
    {
      "id": "86",
      "name": "Gorgeous Concrete Soap",
      "price": "652.00",
      "image": "http://lorempixel.com/640/480/technics",
      "description": "International Assurance Analyst"
    },
    {
      "id": "87",
      "name": "Awesome Cotton Bacon",
      "price": "810.00",
      "image": "http://lorempixel.com/640/480/food",
      "description": "National Factors Assistant"
    },
    {
      "id": "88",
      "name": "Sleek Concrete Table",
      "price": "333.00",
      "image": "http://lorempixel.com/640/480/animals",
      "description": "Internal Accounts Facilitator"
    },
    {
      "id": "89",
      "name": "Refined Plastic Bacon",
      "price": "723.00",
      "image": "http://lorempixel.com/640/480/sports",
      "description": "Corporate Interactions Orchestrator"
    },
    {
      "id": "90",
      "name": "Handcrafted Concrete Fish",
      "price": "709.00",
      "image": "http://lorempixel.com/640/480/city",
      "description": "Internal Intranet Technician"
    },
    {
      "id": "91",
      "name": "Awesome Cotton Fish",
      "price": "978.00",
      "image": "http://lorempixel.com/640/480/technics",
      "description": "Senior Factors Technician"
    },
    {
      "id": "92",
      "name": "Unbranded Soft Chips",
      "price": "215.00",
      "image": "http://lorempixel.com/640/480/food",
      "description": "Central Solutions Officer"
    },
    {
      "id": "93",
      "name": "Fantastic Plastic Tuna",
      "price": "186.00",
      "image": "http://lorempixel.com/640/480/technics",
      "description": "Dynamic Mobility Strategist"
    },
    {
      "id": "94",
      "name": "Small Frozen Shirt",
      "price": "253.00",
      "image": "http://lorempixel.com/640/480/people",
      "description": "National Assurance Administrator"
    },
    {
      "id": "95",
      "name": "Intelligent Soft Shirt",
      "price": "67.00",
      "image": "http://lorempixel.com/640/480/animals",
      "description": "International Branding Strategist"
    },
    {
      "id": "96",
      "name": "Fantastic Steel Bike",
      "price": "985.00",
      "image": "http://lorempixel.com/640/480/transport",
      "description": "Senior Metrics Analyst"
    },
    {
      "id": "97",
      "name": "Gorgeous Fresh Chicken",
      "price": "903.00",
      "image": "http://lorempixel.com/640/480/fashion",
      "description": "Human Usability Engineer"
    },
    {
      "id": "98",
      "name": "Incredible Wooden Cheese",
      "price": "604.00",
      "image": "http://lorempixel.com/640/480/business",
      "description": "Global Factors Liaison"
    },
    {
      "id": "99",
      "name": "Fantastic Soft Towels",
      "price": "623.00",
      "image": "http://lorempixel.com/640/480/fashion",
      "description": "Future Markets Liaison"
    },
    {
      "id": "100",
      "name": "Ergonomic Fresh Gloves",
      "price": "409.00",
      "image": "http://lorempixel.com/640/480/city",
      "description": "National Assurance Specialist"
    }
  ]

  let setProducts = document.querySelectorAll('.products')
  for (let i = 0; i < 5; i++) {
    setProducts[i].innerHTML = `<div class="products-item">
  </div>
  <div class="products-item">
  </div>
  <div class="products-item">
  </div>
  <div class="products-item">
  </div>`
  }
  
  let setProductsItem = document.querySelectorAll('.products-item')
  for (let i = 0; i < 20; i++) {
    setProductsItem[i].innerHTML = `<span class="status-sale">Sale off</span>
    <div class="products-img">
        <a href="chitietsp.html">
            <img src="" alt="day la anh">
        </a>
    </div>
    <h4 class="products-item-name">
        <a href="chitietsp.html"></a>
    </h4>
    <div class="products-price">
        <span class="new-price">
        </span>
    </div>`
  }

let setValueProducts = document.querySelectorAll('.products-item')

for(let i = 0;i<myProduct.length;i++){
    setValueProducts[i].children[1].children[0].children[0].src = myProduct[i].image;
    setValueProducts[i].children[2].children[0].innerHTML = `${myProduct[i].name}`;
    setValueProducts[i].children[3].children[0].innerHTML = `${myProduct[i].price}`
}

let titleSet = document.querySelectorAll('li')[1]
console.log(titleSet)
titleSet.addEventListener('click',function(){
    console.log('hihi')
    let x = JSON.stringify(myProduct);
    localStorage.setItem('array',x);
})

let imgSelect = document.querySelectorAll('.products-img')
for(let i = 0;i<myProduct.length;i++){
    imgSelect[i].addEventListener('click',function(){
        localStorage.setItem('id',myProduct[i].id)
    })
}
for(let i = 0;i<myProduct.length;i++){
    imgSelect[i].nextElementSibling.addEventListener('click',function(){
        localStorage.setItem('id',myProduct[i].id)
    })
}

let toList = document.querySelector('.category')
toList.children[0].children[0].addEventListener('click',function(){
  let x = JSON.stringify(myProduct);
  localStorage.setItem('array', x);
})

let showMoreProducts = document.querySelectorAll('.products')
let clickbtn = document.querySelectorAll('.btn')[0]
function showMore(){
  for (let index = 1; index < 5; index++) {
    showMoreProducts[index].classList.toggle('hide') 
  }
  console.log(clickbtn.innerHTML);
  
  if(clickbtn.innerHTML === 'Ẩn bớt'){
    clickbtn.innerHTML = 'Xem Thêm'
  }
  else {
    clickbtn.innerHTML = 'Ẩn bớt';
  console.log('a');
  }
}

let valueSearch = document.querySelector('.input-mail')
function checkSearch(){
  console.log(Number(valueSearch.value));
  
  console.log(typeof Number(valueSearch.value));
  
  if(Number(valueSearch.value) <81 || Number(valueSearch.value)  > 100 || isNaN( Number(valueSearch.value))) {
    alert('Moi ban nhap tu 81 - 100')
    valueSearch.value = ''
  }
  else{
    localStorage.setItem('id',Number(valueSearch.value));
    window.open('chitietsp.html')
  }
}
