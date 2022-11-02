fetch("../JSON/resident_stories.JSON")
.then((resp) =>{
    return resp.json()})
    .then((data) =>{
        console.log(data)
        let temp = "";

            for(let i=0; i < data.resident_stories.length; i++){
                // ITEM CONTAINER
               temp +=`<div class="item-box">`

            //    ITEM
               temp +=`<div class = "image">
               <img src= ${data.resident_stories[i].story_image} alt="image" height=250 width=300>
               </div>`;
               temp +=`<div class = "story-title" id="t${i}">${data.resident_stories[i].story_title}</div>`; 
               temp +=`<div class = "date" id="d${1}">${data.resident_stories[i].date}</div>`; 
               temp +=`<div class = "orientation" id="o${1}">${data.resident_stories[i].orientation}</div>`; 

            }
            document.getElementById("data").innerHTML=temp;

        })
        .catch((err) => console.log("error", err))

            
                const container = document.getElementById("data");
                console.log(container)

                const div = container.parentElement;
                console.log(div);
