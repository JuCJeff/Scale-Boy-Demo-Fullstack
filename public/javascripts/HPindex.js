var animation = bodymovin.loadAnimation({
  container: document.getElementById("avocado"), // Required
  path: "../images/avocado.json", // Required
  renderer: "svg", // Required
  loop: true, // Optional
  autoplay: true, // Optional
  name: "avocado" // Name for future reference. Optional.
});
