// NAVBAR //

const listItems = [
    {href: '#', text: 'Logo'},
    {href: '#', text: 'Home'},
    {href: '#', text: 'About'},
    {href: '#', text: 'Get Involved'},
    {href: '#', text: 'User Stories'},
    {href: '#', text: 'FAQ'},
    {href: '#', text: 'Support Us'},

];


const navElement = document.createElement("nav")
const navList = document.createElement("ul")
navElement.appendChild(navList)

for (var i = 0; i < listItems.length; i++){
const listItem = document.createElement("li")
const itemLink = document.createElement("a")

itemLink.href = listItems[i].href;
itemLink.innerHTML = listItems[i].text;

listItem.appendChild(itemLink)
navList.appendChild(listItem)
}

console.log(navElement)


document.body.appendChild(navElement);

// navList.children[0].className = "current";


