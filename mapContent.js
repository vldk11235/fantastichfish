// THIS IS JSON FETCH !!! Hope will work at iOS
fetch("https://wp.sitesworkshop.pro/wp-json/wp/v2/fish")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    //   console.log(data);
    let pricelist = [];
      console.log(Object.keys(data).length);
      
let divContent = document.getElementById("content");

    for (let fishIndex = 0; fishIndex < Object.keys(data).length; fishIndex++) {
      pricelist.push({
        name: data[fishIndex].title.rendered,
        description: data[fishIndex].ACF.description,
        price: data[fishIndex].ACF.price,
        photo: data[fishIndex].ACF.image.url,
      });
      console.log(data[fishIndex].ACF.image.url);
    }
    console.log(pricelist);

    window.onload = pricelist.map(({ name, description, price, photo }) => {
      let newDiv = document.createElement("div");
      newDiv.classList.add("item");
      newDiv.innerHTML =
        "<div class = 'image_wrapper'><img src = '" +
        photo +
        "'></div><div class = 'fish_info'><p class = 'name'>" +
        name +
        "</p><p class = 'price'>" +
        price +
        " €</p> <p class = 'description'>" +
        description +
        "</p> </div>";

      divContent.appendChild(newDiv);
    });
  });


// window.onload = pricelist.map(({ name, description, price, photo }) => {
//   let newDiv = document.createElement("div");
//   newDiv.classList.add("item");
//   newDiv.innerHTML =
//     "<div class = 'image_wrapper'><img src = 'images2\\" +
//     photo +
//     "'></div><div class = 'fish_info'><p class = 'name'>" +
//     name +
//     "</p><p class = 'price'>" +
//     price +
//     "</p> <p class = 'description'>" +
//     description +
//     "</p> </div>";

//   divContent.appendChild(newDiv);
// });


// THIS IS JASON ASSERT !!! Not working on iOS



// import pricelist from './Pricelist.json' assert {type: 'json'};

// let divContent = document.getElementById('content');

// // alert(divContent)

// window.onload = pricelist.map(({
//     name,
//     description,
//     price,
//     photo
// }) => {
//     let newDiv = document.createElement("div");
//     newDiv.classList.add("item");
//     newDiv.innerHTML = "<div class = 'image_wrapper'><img src = 'images2\\"+photo+"'></div><div class = 'fish_info'><p class = 'name'>"+name+"</p><p class = 'price'>"+price+"</p> <p class = 'description'>"+description+"</p> </div>";

//     divContent.appendChild(newDiv)
    

// })


