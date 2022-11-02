// import what needs importing

// get resident story object from array of objects inside resident-Stories.json

fetch("../public/JSON/resident_stories.JSON")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

// create the page template
// create flexbox container for page contents

// create back button aligned to the left of the article container

// create article container
