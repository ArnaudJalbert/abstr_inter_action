document
  .getElementById("send-artwork-matches")
  .addEventListener("click", async () => {
    const descriptionsDropBoxes = document.getElementsByClassName(
      "description-drop-box",
    );

    const descriptionsMatches = [];

    for (const descriptionDropBox of descriptionsDropBoxes) {
      if (descriptionDropBox.children.length > 0) {
        const description = descriptionDropBox.children[0].innerHTML;
        const title = descriptionDropBox.parentNode.children[0].innerHTML;
        descriptionsMatches.push({ description: description, title: title });
      }
    }

    console.log(descriptionsMatches);

    await fetch("/atom-series-matches", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(descriptionsMatches),
    })
      .then((response) => {
        // this line of code depends upon what type of response you're expecting
        return response.text();
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });
