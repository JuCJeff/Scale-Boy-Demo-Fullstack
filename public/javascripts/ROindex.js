var animation = bodymovin.loadAnimation({
    container: document.getElementById("folder"), // Required
    path: "folder.json", // Required
    renderer: "svg", // Required
    loop: false, // Optional
    autoplay: true, // Optional
    name: "folder", // Name for future reference. Optional.
});

var animation2 = bodymovin.loadAnimation({
    container: document.getElementById("noodles"), // Required
    path: "noodles.json", // Required
    renderer: "svg", // Required
    loop: false, // Optional
    autoplay: true, // Optional
    name: "noodles" // Name for future reference. Optional.
});