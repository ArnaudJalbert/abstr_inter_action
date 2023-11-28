const descriptionCardClassName = "description-card";
const descriptionDropBoxClassName = "description-drop-box";

window.onload = (event) => {
  setDragDrop("ten-largest-collection");
  setDragDrop("atom-series-part-a");
  setDragDrop("atom-series-part-b");
  setDragDrop("atom-series-part-c");
  setDragDrop("atom-series-part-d");
  setDragDrop("atom-series-part-e");
};

async function setDragDrop(collectionName) {
  // Get the HTML element of the containers
  const container = document.getElementById(collectionName);
  const leftContainerBox = document.getElementById(`${collectionName}-left`);
  const rightContainerBox = document.getElementById(`${collectionName}-right`);
  // Get the artwork data
  const artworksDataResponse = await fetch(`/${collectionName}`);
  const artworksData = await artworksDataResponse.json();
  const artworkMatches = artworksData["matches"];

  setImagesAndDropBoxes(artworkMatches, rightContainerBox);
  setDescriptionCards(artworkMatches, leftContainerBox);
  // setArtworkImages(artworkMatches, leftContainerBox, rightContainerBox)
}

function shuffle(array) {
  // https://bost.ocks.org/mike/shuffle/
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function setImagesAndDropBoxes(artworkMatches, rightContainerBox) {
  for (const artwork of artworkMatches) {
    // Set the container for the image and the drop box
    const imageBoxContainer = document.createElement("div");
    imageBoxContainer.className = "image-box-container";
    // Add it to the main container
    rightContainerBox.appendChild(imageBoxContainer);

    // Set the tile of the artwork
    const artworkTitleElement = document.createElement("div");
    artworkTitleElement.innerHTML = artwork.artworkName;
    artworkTitleElement.className = "artwork-title";
    imageBoxContainer.appendChild(artworkTitleElement);

    // Creating the image element
    const image = document.createElement("img");
    image.setAttribute("src", artwork.imageURL);
    image.className = "image-card";
    imageBoxContainer.appendChild(image);

    // Creating the drop box element
    const dropBox = document.createElement("div");
    dropBox.className = "description-drop-box";
    imageBoxContainer.appendChild(dropBox);
  }
}
function setDescriptionCards(artworkMatches, containerBox) {
  // Loop over all artwork descriptions and create the components
  for (const artwork of shuffle(artworkMatches)) {
    // Create the HTML element and text
    const descriptionElement = document.createElement("div");
    const descriptionNode = document.createTextNode(artwork.description);
    // Define the class name of the element
    descriptionElement.className = descriptionCardClassName;
    descriptionElement.setAttribute("draggable", "true");
    descriptionElement.appendChild(descriptionNode);
    // Add it to the container box
    containerBox.appendChild(descriptionElement);
    addDragAndDropEvent(containerBox, descriptionElement);
  }
}

function addDragAndDropEvent(leftBox, element) {
  const descriptionDropBoxes = document.getElementsByClassName(
    descriptionDropBoxClassName,
  );

  // Checking for the event when the user starts dragging a box
  element.addEventListener("dragstart", (event) => {
    let selected = event.target;
    for (const descriptionDropBox of descriptionDropBoxes) {
      // When dragging over the right box
      descriptionDropBox.addEventListener("dragover", (event) => {
        event.preventDefault();
      });
      // When dropping the object into the right box
      descriptionDropBox.addEventListener("drop", () => {
        if (selected !== null) {
          // When the user drops an object into the right box, it appends it to the DOM element
          descriptionDropBox.appendChild(selected);
          // Remove the element so it keep on being dragged
          selected = null;
        }
        selected = null;
      });
    }

    // When dragging over the right box
    leftBox.addEventListener("dragover", (event) => {
      event.preventDefault();
    });
    // When dropping the object into the right box
    leftBox.addEventListener("drop", () => {
      if (selected !== null) {
        // When the user drops an object into the right box, it appends it to the DOM element
        leftBox.appendChild(selected);
        // Remove the element so it keep on being dragged
        selected = null;
      }
      selected = null;
    });
  });
}
