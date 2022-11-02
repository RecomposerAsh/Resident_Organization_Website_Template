fetch("resident_stories.JSON")
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    let temp = "";

    for (let i = 0; i < data.products.length; i++) {
      // ITEM CONTAINER
      temp += `<div class="item-box">`;

      //    ITEM
      temp += `<div class = "image">
               <img src= ${data.products[i].thumbnail} alt="image" height=250 width=300>
               </div>`;
      temp += `<div class = "story-title" id="t${i}">${
        data.products[i].story - title
      }</div>`;
      temp += `<div class = "date" id="p${1}">${data.products[i].date}</div>`;
      temp += `<div class = "orientation" id="d${1}">${
        data.products[i].orientation
      }</div>`;
    }
    document.getElementById("data").innerHTML = temp;
  })
  .catch((err) => console.log("error", err));

const parent = document.querySelector("#data");
const div = parent.parentElement;
// console.log(div);
