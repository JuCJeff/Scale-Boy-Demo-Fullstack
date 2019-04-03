var animation = bodymovin.loadAnimation({
    container: document.getElementById("ingredients"), // Required
    path: "../images/ingredients.json", // Required
    renderer: "svg", // Required
    loop: true, // Optional
    autoplay: true, // Optional
    name: "ingredients", // Name for future reference. Optional.
});