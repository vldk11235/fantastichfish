import pricelist from './pricelist.json' assert {type: 'json'};

let divContent = document.getElementById('content');

// let pricelist = JSON.parse(pricelistJson);



pricelist.map(({
    name,
    description,
    price,
    photo
}) => {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = "<div class='item'> <div class = 'image_wrapper'><img src = 'images2\\"+photo+"'></div><div class = 'fish_info'><p class = 'name'>"+name+"</p><p class = 'price'>"+price+"</p> <p class = 'description'>"+description+"</p> </div> </div> ";


    divContent.appendChild(newDiv)

})