const modeSwitch = document.getElementById("modeSwitch");
const contentDiv = document.getElementById("content");

modeSwitch.addEventListener("change", function() {
    if (this.checked) {
        // Load content for mode 1
        contentDiv.innerHTML = "<h2>Mode 1 Content</h2>";
    } else {
        // Load content for mode 2
        contentDiv.innerHTML = "<h2>Mode 2 Content</h2>";
    }
});
